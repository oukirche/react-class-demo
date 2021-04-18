import React, {Component} from 'react';
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"abdessamade"
        }
        console.log("LifeCycleA in constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleA in getDerivedStateFromProps");

        return null
    }
    componentDidMount() {
        console.log("LifeCycleA in didMount");
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("LifeCycleA in shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifeCycleA in getSnapshotBeforeUpdate");
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("LifeCycleA in componentDidUpdate");
    }
    handleChangeState = ()=>{
        this.setState({
            username:"oukirche"
        })
    }
    render() {
        console.log("LifeCycleA in render");
        return (
            <div>
                LifeCycleA
                <button onClick={this.handleChangeState}>change State</button>
                <LifeCycleB/>
            </div>
        );
    }
}

export default LifeCycleA;