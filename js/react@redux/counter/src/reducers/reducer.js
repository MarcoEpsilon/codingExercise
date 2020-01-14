import Action from '../actions/actions';

const rootReducer = (state = { currentCounter: 0, }, action) => {
    switch(action.type) {
        case Action.INCREMENT:
            return {
                currentCounter: state.currentCounter + 1,
            };
        case Action.DECREMENT:
            return {
                currentCounter: state.currentCounter - 1,
            };
        default:
            return state;
    }
}

export default rootReducer;