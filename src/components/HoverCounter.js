import React, {Component} from 'react';
import updatedComponent from "./WithCounter";
class HoverCounter extends Component {
    render() {
        const {count, incrementCount}=this.props;
        return (
            <div onMouseOver={incrementCount}>
                Hovered {count} times
            </div>
        );
    }
}

export default updatedComponent(HoverCounter,4);