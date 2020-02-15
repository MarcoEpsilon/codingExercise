import React, { Component } from 'react';
import { render } from 'react-dom';
import UserOption from './containers/useroption';
import UserList from './containers/userlist';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/users';
import { Provider } from 'react-redux';
import { getUsers } from './actions/users';
import thunk from 'redux-thunk';

let store = createStore(rootReducer, applyMiddleware(thunk));
class App extends Component {
    constructor(props) {
        super(props);
        store.dispatch(getUsers());
        console.log(store.getState());
    }
    render() {
        let optionStyle = {
            marginBottom: "12px",
        };
        return (
            <div>
                <div style={optionStyle}>
                    <UserOption />
                </div>
                <UserList/>
            </div>
        );
    }
};

render(<Provider store={store}><App/></Provider>, document.getElementById("main"));