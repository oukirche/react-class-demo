import React, {Component} from 'react';

class UserGreeting extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLogged:false
        }
    }
    render() {
        return (
            <div>
                <h1>Welcome Abdessamade </h1>
                <h1>Welcome GGuest</h1>
            </div>
        );
    }
}

export default UserGreeting;