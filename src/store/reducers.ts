import { combineReducers } from 'redux';
import userReducer from '../modules/auth/pages/Login/redux/reducer';
import eventReducer from '../modules/beneficiary/pages/Event/redux/reducers/';
import giftReducer from '../modules/beneficiary/pages/Gift/redux/reducer';
import resourcesReducer from '../modules/resources/redux/reducer';
import contributorReducer from '../modules/contributor/redux/reducer';
import beneficiaryReducer from '../modules/beneficiary/redux/reducers';

const rootReducer = combineReducers({
  user: userReducer,
  event: eventReducer,
  gifts: giftReducer,
  resources: resourcesReducer,
  contributor: contributorReducer,
  beneficiary: beneficiaryReducer,
});

export default rootReducer;
