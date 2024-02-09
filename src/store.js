import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const feedbackState = {
  feeling: 0,
  understanding: 0,
  support: 0,
  comments: '',
};

//Reducers will go here
const feedback = (state = feedbackState, action) => {
  if (action.type === 'UPDATE_FEELING') {
    return { ...state, feeling: action.payload };
  }
  if (action.type === 'UPDATE_UNDERSTANDING') {
    return { ...state, understanding: action.payload };
  }
  if (action.type === 'UPDATE_SUPPORT') {
    return { ...state, support: action.payload };
  }
  if (action.type === 'UPDATE_COMMENTS') {
    return { ...state, comments: action.payload };
  }
  return state;
};

//Create redux store
export const storeInstance = () =>
  createStore(
    combineReducers({
      feedback,
    }),
    applyMiddleware(logger)
  );
