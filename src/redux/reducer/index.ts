import { combineReducers } from "redux";
import categoriesReducer from './categories';
import windowReducer from "./window";
import catsReducer from "./cats";

const rootReducer = combineReducers({
    categories: categoriesReducer,
    stateWindow: windowReducer,
    cats: catsReducer,
});

export default rootReducer;