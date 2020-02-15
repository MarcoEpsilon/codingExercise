import React, { Component } from 'react';

class UserOption extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let options = this.props.options;
        let onChange = this.props.onChange;
        return (
            <select onChange={onChange}>
                { options.map((value, index) => (<option key={index} value={value} >{value}</option>)) }
            </select>
        );
    }
}
export default UserOption;