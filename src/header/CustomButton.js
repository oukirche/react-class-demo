import React from 'react';
import PropTypes from 'prop-types'
function CustomButton({color,text,onClick}) {

    return <button onClick={onClick} style={{backgroundColor:color}} className="btn">{text}</button>
}
const notImplementedEvent = ()=>alert("You need to implement this event");
CustomButton.defaultProps={
    color:"red",
    text:"succes",
    onClick:notImplementedEvent
}
CustomButton.protoTypes={
    color:PropTypes.string,
    text:PropTypes.string,
    onClick:PropTypes.func
}
export default CustomButton;