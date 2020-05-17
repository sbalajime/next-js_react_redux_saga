import { combineReducers } from 'redux';
import jokeReducer from './joke/reducer';

const reducers = combineReducers({
  jokeReducer
});

export default reducers;