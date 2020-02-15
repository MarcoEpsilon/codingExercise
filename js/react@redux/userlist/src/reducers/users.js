import { 
    LOADING_USERS, 
    LOADING_USERS_FAILED, 
    LOADING_USERS_FINISHED,
    SWITCH_USERS
} from '../actions/users';
const loadingUsers = (state) => {
    return Object.assign({}, state, { loadingStatus: "loading" });
}
const loadingUsersFinished = (state, action) => {
    console.log("next");
    return Object.assign({}, state, {
        loadingStatus: "finished",
        users: action.users,
    });
};

const loadingUsersFailed = (state) => {
    return Object.assign({}, state, { loadingStatus: "failed" });
};

const switchUsers = (state, action) => {
    return Object.assign({}, state, { currentUsers: action.users });
}
const defaultState = {
    usersOption: ["Normal", "Vip"],
    currentUsers: "Vip",
    users:[]
};
const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOADING_USERS:
            console.log("loading");
            return loadingUsers(state);
        case LOADING_USERS_FINISHED:
            console.log("finished");
            return loadingUsersFinished(state, action);
        case LOADING_USERS_FAILED:
            console.log("failed");
            return loadingUsersFailed(state);
        case SWITCH_USERS:
            return switchUsers(state, action);
        default:
            return state;
    }
};

export default rootReducer;