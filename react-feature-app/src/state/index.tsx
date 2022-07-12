import { combineReducers } from 'redux';
import reducer from './TestReducer';

const reducres = combineReducers({
  account: reducer
});

export default reducres;
