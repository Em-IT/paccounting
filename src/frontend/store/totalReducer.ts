import { combineReducers } from 'redux';
import { fooReducer } from './reducers/fooReducer';
import { barReducer } from './reducers/barReducer';

export const totalReducer = combineReducers({
  fooReducer,
  barReducer
});