import React, { Component } from 'react';

class IncrementButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const onClick = this.props.onClick;
        const style = {
            backgroundColor: "#FFEE00",
        };
        return (
            <button style={style} onClick={onClick}>Add</button>
        );
    }
}

export default IncrementButton;