import React, { Component } from 'react';

class DecrementButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const onClick = this.props.onClick;
        const style = {
            backgroundColor:"#FF0000",
        };
        return (
            <button style={style} onClick={onClick}>Sub</button>
        );
    }
}

export default DecrementButton;