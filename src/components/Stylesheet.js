import React from 'react';
import './myStyle.css';
function Stylesheet(props) {
    let className = props.primary ? 'primary' : '';
    console.log(className)
    return (
        <div>
            <h1 className={`${className} font-xl`}>Stylesheet</h1>
        </div>
    );
}

export default Stylesheet;