import {createStore} from 'redux';
import {reducers} from './reducers';
import {defaultStates} from './defaultStates';

export function configureStore() {

    let initialState = {...defaultStates};

    const store = createStore(
        reducers,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
}

export const store = configureStore();
