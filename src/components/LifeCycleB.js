import React, {Component} from 'react';

class LifeCycleB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"abdessamade"
        }
        console.log("LifeCycleB in constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleB in getDerivedStateFromProps");

        return null
    }
    componentDidMount() {
        console.log("LifeCycleB in didMount");
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("LifeCycleB in shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCycleB in getSnapshotBeforeUpdate");
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("LifeCycleB in componentDidUpdate");
    }
    render() {
        console.log("LifeCycleB in render");
        return (
            <div>
                LifeCycleB
            </div>
        );
    }
}

export default LifeCycleB;