import React from 'react';
import Select from 'react-select';
import './GridTable.scss';
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
                                                        value={value}
                                                        onChange={(newValue) => {
                                                            onChange(key, newValue);
                                                        }}
                                                        options={row.options}
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