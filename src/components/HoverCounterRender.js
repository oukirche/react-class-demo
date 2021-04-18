import React, {Component} from 'react';

class HoverCounterRender extends Component {

    render() {
        const { count, incrementCount } = this.props;
        return (
            <div onMouseOver={incrementCount}>Hoverded {count} time </div>
        );
    }
}

export default HoverCounterRender;