import React, { Component } from 'react';

class Label extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let currentCounter = this.props.currentCounter;
        return (
            <span>
                { currentCounter }
            </span>
        );
    }
}

export default Label;