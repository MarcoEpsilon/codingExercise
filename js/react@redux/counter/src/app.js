import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/reducer";
/*import Label from './components/label';
import IncrementButton from './components/incrementbutton';
import DecrementButton from './components/decrementbutton';*/
import Labeler from "./containers/labeler";
import Incrementer from "./containers/incrementer";
import Decrementer from "./containers/decrmenter";
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const style = {
            display:"flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "200px",
        };
        return (
            <div style={style}>
                <Labeler />
                <Incrementer />
                <Decrementer />
            </div>
        );
    }
}
const store = createStore(rootReducer);
render(
    <Provider store={store}>
        <App />
    </Provider>
    , 
    document.getElementById("main"));