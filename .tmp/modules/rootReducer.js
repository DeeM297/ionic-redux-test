import { combineReducers } from 'redux';
import { increment } from './increment-reducer';
export var rootReducer = combineReducers({
    increment: increment
});
