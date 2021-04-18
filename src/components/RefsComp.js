import React, {Component} from 'react';

class RefsComp extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();

    }
    componentDidMount() {
        this.inputRef.current.focus();
        console.log(this.inputRef);
    }
    clickHandler = ()=>{
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Get value </button>
            </div>
        );
    }
}

export default RefsComp;