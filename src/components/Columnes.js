import React from 'react';

function Columnes(props) {
    return (
        /****** The probleme : <td> cannot appear as a child of <div>.***/
        // <div>
        //     <th>User name</th>
        //     <td>Abdessamade</td>
        // </div>
        /****** The solution : Use the fragment.***/
        // <React.Fragment>
        //     <th>User name</th>
        //     <td>Abdessamade</td>
        // </React.Fragment>
        /****** we can add a key as attribute to fragment.***/
        // <React.Fragment key={}>
        //     <th>User name</th>
        //     <td>Abdessamade</td>
        // </React.Fragment>
        /****** use short expresion <></>.***/
        <>
            <th>User name</th>
            <td>Abdessamade</td>
        </>
    );
}

export default Columnes;