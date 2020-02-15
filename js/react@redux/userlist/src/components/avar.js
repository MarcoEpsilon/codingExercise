import React, { Component } from 'react';

class Avar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let src = this.props.avar;
        let style = {
            width: "60px",
            height: "60px",
            borderRadius: "30px",
        };
        return (
            <img src={src} style={style}/>
        );
    }
};

export default Avar;