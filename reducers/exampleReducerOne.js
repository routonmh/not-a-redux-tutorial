/**
 * Reducer for value one
 * @param state - previous store state
 * @param action - incoming action
 * @returns {*} - new state
 */
export const exampleReducerOne = (state = {}, action) => {

    let retState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case "UPDATE_VALUE_ONE":

            retState.valueOne = action.value;
            break;
        default:
            break;
    }

    return retState;
};
