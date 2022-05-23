/**
 * Entry point for the reducers that will be used in the component.
 */
import {combineReducers, Reducer} from '@reduxjs/toolkit';
import storeUserName from './modules/storeUserName';
/**
 * Method contains combineReducer for combining reducers used in the components.
 * @type {Reducer<>}
 */
const AppReducer: Reducer = combineReducers({storeUserName});

export default AppReducer;
