import React from 'react';

const heading = {
    fontSize:"72px",
    color:"orange"
}
function InlineStyle(props) {
    return (
        <div>
            <h1 style={heading}>Inline</h1>
        </div>
    );
}

export default InlineStyle;