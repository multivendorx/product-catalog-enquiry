import React, { useState, useEffect, useRef } from 'react';
import './GridTable.scss';

const SelectModal = () => {
    return (
        <>
            <main className='main-modal-container'>
                <section className='wrapper'>
                    <div className='wrapper-heading'>
                        <h1>Enquiry Exclusion for user role</h1>
                    </div>
                    <div className='wrapper-content-container'>
                        <section className='modal-content-section'>
                            <main className='modal-main-content-section'>
                                <div className='container-controls'>
                                    <section className='items-container'>
                                        <div className='selected-items'>
                                            <span>Administrator</span>
                                            <button>
                                                <i class="admin-font font-close"></i>
                                            </button>
                                        </div>
                                    </section>
                                    <div className='controls-section'>
                                        <button class="clear-all-data">
                                            <i class="admin-font font-close"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className='select-div'>
                                    <input type="text" />
                                    <span>
                                        <i class="admin-font font-keyboard_arrow_down"></i>
                                    </span>
                                </div>
                            </main>
                            <div className='selectable-option'>
                                <div className='options-item'>Administrator</div>
                            </div>
                        </section>
                    </div>
                </section>
            </main>
        </>
    )
}

const Select = (props) => {
    const { values, onChange, option, asyncGetOptions, asyncFetch = false, isMulti = true } = props;

    // State variable store all selected value by user
    const [selectedValues, setSelectedValues] = useState(values || []);

    // State variable for store option
    const [options, setOptions] = useState(option || []);

    // State variable for select modal open
    const [modalOpen, setModelOpen] = useState(false);

    // State variable for track when search started for async sync
    const [searchStarted, setSearchStarted] = useState(false);

    // State variable for filter on options
    const [filter, setFilter] = useState('');

    // Ref variable for setting changed
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
            return [...previousSelectedValue, value];
        })
    }

    /**
     * Remove a selected value previously selected.
     * @param {*} value 
     */
    const removeSelectedValues = (value) => {
        setSelectedValues((previousSelectedValue) => {
            return previousSelectedValue.filter((previousValue) => previousValue.value != value.value);
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
    const getFilteredOptionValue = async () => {
        let allOptions = await getOptions();

        if (asyncFetch || !filter) {
            return allOptions;
        }

        return allOptions.filter((option) => {
            return option.value?.includes(filter)
                || option.label?.includes(filter);
        });
    }

    // Trigger onchange event when selected value changed
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
    }, [filter, option, selectedValues]);

    return (
        <>
            <main className='grid-table-main-container'>
                <section className='main-container'>
                    <div className='selected-container'>
                        <div className='selected-items-container'>
                            {/* all selected values */}
                            {
                                selectedValues.map((value) => (
                                    <div className='selected-items'>
                                        <span>{value.label}</span>
                                        <button
                                            className=""
                                            onClick={(event) => {
                                                event.preventDefault();
                                                removeSelectedValues(value);
                                            }}
                                        ><i className='admin-font font-close'></i></button>
                                    </div>
                                ))
                            }
                        </div>

                        <div className='container-items-controls'>
                            {/* modalOpen button */}
                            <button
                                className='open-modal'
                                onClick={(event) => {
                                    event.preventDefault();
                                    setModelOpen(!modalOpen)
                                }}
                            >+9</button>

                            {/* selected delete button */}
                            <button
                                className="clear-all-data"
                                onClick={(event) => {
                                    event.preventDefault();
                                    settingChanged.current = true;
                                    clearSelectedValues();
                                    setModelOpen(false);
                                }}
                            ><i className='admin-font font-close'></i></button>
                        </div>
                    </div>

                    <div className='selected-input'>
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
                            onFocus={() => setModelOpen(true)}
                        />

                        <span>
                            <i className='admin-font font-keyboard_arrow_down'></i>
                        </span>

                    </div>

                </section>

                {
                    (modalOpen || filter) &&
                    <div className='option-container' name="" id="">
                        {/* <option value="" selected disabled>Select items</option> */}
                        {
                            options.map((option) => (
                                <div
                                    className='options-item'
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

            {/* Main Modal for responsive time */}
            {/* <SelectModal /> */}
        </>
    )
}
export default GridTable;