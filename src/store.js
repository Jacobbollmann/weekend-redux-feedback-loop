import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

//Reducers will go here

//Create redux store
export const storeInstance = createStore(
  combineReducers({}),
  applyMiddleware(logger)
);
