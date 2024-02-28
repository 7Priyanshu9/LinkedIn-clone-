import {createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import { ThunkMiddleware, thunk } from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware))
export default store;

