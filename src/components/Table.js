import React from 'react';
import Columnes from "./Columnes";

function Table(props) {
    return (
        <table>
            <tbody>
                <tr>
                    <Columnes/>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;