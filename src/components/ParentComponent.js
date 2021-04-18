import React, {Component} from 'react';

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"oukirche"
        }
    }
    componentDidMount() {
        setInterval()
    }

    render() {

        return (
            <div>
                Parent component
            </div>
        );
    }
}

export default ParentComponent;