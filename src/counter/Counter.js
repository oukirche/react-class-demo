import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state={
            counter:0
        }
    }
    increment =  ()=>{
        //  this.setState({
        //     counter:this.state.counter+1
        // },()=>console.log("callback : "+this.state.counter));
        this.setState(prevState=>({
            counter : prevState.counter+1
        }),()=>console.log("callback : "+this.state.counter));
        console.log(this.state.counter);
    }
    incrementFive = ()=>{
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();

    }
    render() {
        return (
            <div>
             count {this.state.counter}
             <button onClick={this.incrementFive}>Increment</button>
            </div>

        );
    }
}

export default Counter;