import { combineReducers } from 'redux';
import userReducer from '../modules/auth/pages/Login/redux/reducer';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
