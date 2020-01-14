export const Action = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
}

export const addAction = () => ({
    type: Action.INCREMENT,
});

export const subAction = () => ({
    type: Action.DECREMENT,
});

export default Action;