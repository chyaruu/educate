import {createStore} from "redux";
import {itemReducer, combineReducers,otherReducer} from "./reducer.js";

const itemStore =  createStore(combineReducers(
    itemReducer,
    otherReducer 
)); 

export {itemStore};