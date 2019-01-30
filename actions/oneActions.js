import axios from 'axios';
import {store} from '../store';

// you can import the store in multiple places,
// it will become a singleton.

let Actions = {};

/**
 * Update value one.
 * @param value
 * @returns {Promise<void>}
 */
Actions.updateValueTwo = (value) => {

    // you can make requests here...
    // let req = axios.post('/api/get_really_important_data');
    // let res = await req;

    store.dispatch({
        type: "UPDATE_VALUE_TWO",
        value: value
    });
};

export default Actions;