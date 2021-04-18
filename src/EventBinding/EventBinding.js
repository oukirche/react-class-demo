import React, {Component} from 'react';

class EventBinding extends Component {
    constructor(props) {
        super(props);

        this.state={
            message:"Hello"
        }
        this.changeMessage = this.changeMessage.bind(this);
    }
    //First solution use arrow function
    // changeMessage = ()=>{
    //     this.setState({
    //         message:"Good By"
    //     })
    // }
    changeMessage(){
        console.log(this);
            this.setState({
                message:"Good By"
            })
    }
    render() {
        return (
            <div>
                {this.state.message}
                {/*<button onClick={this.changeMessage.bind(this)}>Click me</button>*/}
                <button onClick={this.changeMessage}>Click me</button>
            </div>
        );
    }
}

export default EventBinding;