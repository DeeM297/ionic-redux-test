var initialState = {
    counter: 0
};
export function increment(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'INCREMENT':
            var newState = Object.assign({}, state);
            newState.counter++;
            return newState;
        default:
            break;
    }
    return state;
}
