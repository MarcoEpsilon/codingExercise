import React, { Component } from 'react';
import UserInfo from '../components/userinfo';
class UserList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let users = this.props.users;
        let loadingStatus = this.props.loadingStatus;
        console.log(this.props);
        console.log(loadingStatus);
        switch (loadingStatus) {
            case "loading":
                return (<div><h2>Loading...</h2></div>);
            case "finished":
                return (
                    <div>
                        { users.map((value, index) => (<UserInfo key={index} user={value}/>))}
                    </div>
                );
            case "failed":
                return (<div><h2>Network Error</h2></div>);
            default:
                return (<div><h2>Unreachable</h2></div>);
        }
    }
}

export default UserList;