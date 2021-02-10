import { combineReducers } from 'redux';
import userReducer from '../pages/Login/redux/reducer';

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
