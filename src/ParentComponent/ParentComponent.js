import React, {Component} from 'react';
import ChildrenComponent from "../childrenComponent/ChildrenComponent";

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parentName:"parent"
        }
    }
    greetParent = ()=>{
        alert(`Hello ${this.state.parentName}`);
    }
    render() {
        return (
            <div>
                <ChildrenComponent greetHandler={this.greetParent}>
                </ChildrenComponent>
            </div>

        );
    }
}

export default ParentComponent;