import React, {Component} from 'react';
import ParentComponent from "../ParentComponent/ParentComponent";

class ChildrenComponent extends Component {
    render() {
        return (
            <div>
               <button onClick={this.props.greetHandler}>Greet Parent</button>
            </div>
        );
    }
}

export default ChildrenComponent;