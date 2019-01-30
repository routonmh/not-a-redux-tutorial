import {combineReducers} from "redux";
import {exampleReducerOne} from './exampleReducerOne';
import {exampleReducerTwo} from './exampleReducerTwo';

export const reducers = combineReducers({
    exampleReducerOne,
    exampleReducerTwo
});
