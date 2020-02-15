import axios from 'axios';
const LOADING_USERS = "LOADING_USERS";
const LOADING_USERS_FAILED = "LOADING_USERS_FAILED";
const LOADING_USERS_FINISHED = "LOADING_USERS_FINISHED";
const SWITCH_USERS = "SWITCH_USERS";
const loadingUser = {
    type: LOADING_USERS,
};
const getUsers = (user = "Normal") => {
    let url = '/' + user + ".json";
    return (dispatch) => {
        dispatch(loadingUser);
        console.log("begin");
        return axios.get(url).then((response) => (dispatch({
            type: LOADING_USERS_FINISHED,
            users: response.data,
        }))).catch((error) => (dispatch({
            type: LOADING_USERS_FAILED,
        })));
    };
};
const switchUsers = (user) => {
    return (dispatch) => {
        dispatch({
            type: SWITCH_USERS,
            user: user,
        });
        dispatch(getUsers(user));
    };
};
export { LOADING_USERS,
    LOADING_USERS_FINISHED,
    LOADING_USERS_FAILED,
    SWITCH_USERS,
    getUsers,
    switchUsers
};