
import React from 'react';
import './GridTable.scss';

const GridTable = (props) => {
    const { rows, columns } = props;
    return (
        <>
        <table className='grid-table'>
            <thead>
                <tr>
                <th></th>
                {
                    columns.map((element) => {
                        return <th>{element.label}</th>
                    })
                }
                </tr>
            </thead>
            <tbody>
                {
                    rows.map((element) => {
                        // console.log(element.options)
                        return (
                            <tr>
                                <td>{element.label}</td>
                                {columns.map((column) => (
                                    <td key={column.key}>
                                        {element.options ? (

                                                <select name="" id="" >
                                                    {element.options.map((option, index) => (

                                                    <option>
                                                        {option.label}
                                                    </option>
                                                 ))}
                                                </select>
                                           
                                        ) : (
                                            <input type="checkbox" />
                                        )}
                                    </td>
                                ))}

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