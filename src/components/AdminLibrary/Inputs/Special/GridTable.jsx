import React from 'react';
import './GridTable.scss';

const GridTable = (props) => {
    const { rows, columns } = props;
    console.log(rows)
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
                            return (
                                <tr>
                                    <td>{element.label}</td>
                                    {
                                        columns.map((element) => {
                                            return <td>
                                                <div class="content">
                                                    <label class="checkBox">
                                                        <input type="checkbox" />
                                                        <div class="transition"></div>
                                                    </label>
                                                </div>
                                            </td>
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