import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from "./CustomButton";
function Header(props) {
    //const addTask = ()=>console.log("add task");
    return (
        <header className='header'>
            <h5>{props.title}</h5>
            <CustomButton color={props.showAddForm ? 'red' : 'green'}
                          text={props.showAddForm ? 'Hide Add Form': 'Show Add Form'}
                          onClick={props.onToggleShowAddForm}/>
        </header>

    );
}
Header.defaultProps = {
    title : "Task Tracker"
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}
/******** Inline CSS in JS *************/
// const headingStyle = {
//     backgroundColor : 'black',
//     color:'red',
//     textAlign:'center'
// }
export default Header;