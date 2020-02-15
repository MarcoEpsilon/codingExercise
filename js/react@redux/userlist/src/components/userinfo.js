import React, { Component } from 'react';
import Avar from '../components/avar';
class UserInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let avar = this.props.user.avar;
        let name = this.props.user.name;
        let sign = this.props.user.sign;
        let style = {
            display: "flex",
            flexDirection: "row",
            width: "300px",
            height: "100px",
        };
        let nameStyle = {
            marginTop: "0px",
            marginBottom: "5px",
        };
        return (
            <div style={style}>
               <Avar avar={avar}/>
               <div style={{ marginLeft: "15px"}}>
                    <h3 style={nameStyle}>{name}</h3>
                    <div>
                        <span>{sign}</span>
                    </div>
               </div>
            </div>
        );
    }
}

export default UserInfo;