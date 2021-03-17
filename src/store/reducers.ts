import { combineReducers } from 'redux';
import userReducer from '../modules/auth/pages/Login/redux/reducer';
import eventReducer from '../modules/beneficiary/pages/Event/redux/reducer';
import giftReducer from '../modules/beneficiary/pages/Gift/redux/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  event: eventReducer,
  gifts: giftReducer,
});

export default rootReducer;
