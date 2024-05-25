
import React from 'react';

const GridTable = (props) => {
    const { rows, columns } = props;
    console.log(rows)
    return (
        <>
        <table>
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
                        return (
                            <tr>
                                <td>{element.label}</td>
                                {
                                    columns.map((element) => {
                                        return <td><input type="checkbox" /></td>
                                    })
                                }
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