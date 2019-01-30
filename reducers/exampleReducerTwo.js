/**
 * Reducer for test reports.
 * @param state - previous store state
 * @param action - incoming action
 * @returns {*} - new state
 */
export const exampleReducerTwo = (state = {}, action) => {

    let retState = Utils.createDeepCopy(state);

    switch (action.type) {
        case "UPDATE_VALUE_TWO":

            retState.valueTwo = action.value;
            break;
        default:
            break;
    }

    return retState;
};
