import React, {useState, useEffect, useRef} from 'react';
import './GridTable.scss';

const Select = (props) => {
    const { values, onChange, option, asyncGetOptions, asyncFetch = false, isMulti = true } = props;

    // State variable store all selected value by user
    const [selectedValues, setSelectedValues] = useState(values || []);

    // State variable for store option
    const [options, setOptions] = useState(option || []);

    // State variable for selec modal open
    const [modalOpen, setModelOpen] = useState(false);

    // State variable for track when search started for async sync
    const [searchStarted, setSearchStarted] = useState(false);

    // State variable for filter on options
    const [filter, setFilter] = useState('');

    // Ref variable for setting changeed
    const settingChanged = useRef(false);
    
    // Get the options
    const getOptions = async () => {
        let allOptions = option;
        
        // If async fetch option is set get the option from parent component
        if (asyncFetch) {
            setSearchStarted(true);
            allOptions = await asyncGetOptions(filter);
            setSearchStarted(false);
        }

        return allOptions.filter((option) => {
            let selected = false;
            
            selectedValues.forEach((selectedValue) => {
                if (selectedValue.value == option.value) {
                    selected = true;
                }
            });
            
            return !selected;

        });
    }
    
    /**
     * Insert a new selected value.
     * @param {*} value 
     */
    const insertSelectedValues = (value) => {
        setSelectedValues((previousSelectedValue) => {
            return [ ...previousSelectedValue, value ];
        })
    }

    /**
     * Remove a selected value previously selected.
     * @param {*} value 
     */
    const removeSelectedValues = (value) => {
        setSelectedValues((previousSelectedValue) => {
            return previousSelectedValue.filter((previousValue) => previousValue.value != value.value );
        })
    }

   /**
    * Clear all selected value.
    * @param {*} values 
    */ 
    const clearSelectedValues = () => {
        setSelectedValues([]);
    }

    /**
     * Get filtered selected value
     * @returns {array}
     */
    const getFilteredOptionValue = async() => {
        let allOptions = await getOptions();

        if (asyncFetch || ! filter ) {
            return allOptions;
        }

        return allOptions.filter((option) => {
            return option.value?.includes(filter)
                || option.label?.includes(filter);
        });
    }

    // Trigger onchage event when selected value changed
    useEffect(() => {
        if (settingChanged.current) {
            settingChanged.current = false;
            onChange(selectedValues); 
        }
    }, [selectedValues]);

    useEffect(() => {
        getFilteredOptionValue().then((options) => {
            setOptions(options);
        });
    },[ filter, option, selectedValues ]);

    return (
        <>
            <main>
                <section>
                    <div>
                        {/* all selected values */}
                        {
                            selectedValues.map((value) => (
                                <div>
                                    <span>{value.label}</span>
                                    <button
                                        className=""
                                        onClick={(event) => {
                                            event.preventDefault();
                                            removeSelectedValues(value);
                                        }}
                                    >clear</button>
                                </div>
                            ))
                        }
                    </div>

                    <div>
                        {/* Search section */}
                        <input
                            className=''
                            placeholder='Select...'
                            value={filter}
                            onChange={(event) => {
                                event.preventDefault();
                                settingChanged.current = true;
                                setFilter(event.target.value);
                            }}
                        />
                    </div>

                    {/* modalopen button */}
                    <button
                        className='open-modal'
                        onClick={(event) => {
                            event.preventDefault();
                            setModelOpen(!modalOpen)
                        }}
                    >open</button>


                    {/* selected delete button */}
                    <button
                        className="clear-all-data"
                        onClick={(event) => {
                            event.preventDefault();
                            settingChanged.current = true;   
                            clearSelectedValues();
                            setModelOpen(false);
                        }}
                    >close</button>
                </section>

                {
                    ( modalOpen || filter ) &&
                        <div name="" id="">
                            {/* <option value="" selected disabled>Select items</option> */}
                            {
                                options.map((option) => (
                                    <div
                                        className=''
                                        value={option.value}
                                        onClick={(event) => {
                                            event.preventDefault();
                                            settingChanged.current = true;
                                            insertSelectedValues(option);
                                            setModelOpen(false);
                                        }}
                                    >{option.label}</div>
                                ))
                            }
                        </div>
                }
                
            </main>
        </>
    );
}

const GridTable = (props) => {
    const { rows, columns, onChange, setting } = props;
    return (
        <>
            <table className='grid-table'>
                <thead>
                    <tr>
                        <th></th>
                        {
                            columns.map((row) => {
                                return <th>{row.label}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((row) => {
                            // console.log(row.options)
                            return (
                                <tr>
                                    <td >{row.label}</td>
                                    {columns.map((column) => {
                                        // Find key and value for each cell.
                                        let key = column.key + "_" + row.key;
                                        let value = setting[key] || [];
                                        return (
                                            <td id='grid-table-cell' className='grid-table-cell-class' key={column.key}>
                                                {
                                                    row.options &&
                                                    <Select
                                                        values={value}
                                                        onChange={(newValue) => {
                                                            onChange(key, newValue);
                                                        }}
                                                        option={row.options}
                                                        isMulti
                                                    />
                                                }
                                                {
                                                    !row.options &&
                                                    <input
                                                        placeholder='select'
                                                        type="checkbox"
                                                        onChange={(e) => {
                                                            let key = column.key + '_' + row.key;
                                                            if (e.target.checked) {
                                                                onChange(key, e.target.checked);
                                                            }
                                                        }}
                                                    />
                                                }
                                            </td>
                                        )
                                    })}
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default GridTable;