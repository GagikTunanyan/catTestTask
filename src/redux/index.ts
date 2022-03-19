import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import rootReducer from "./reducer";

export const myStore = createStore(rootReducer, applyMiddleware(thunk, logger));
