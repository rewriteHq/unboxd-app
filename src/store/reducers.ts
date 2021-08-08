import { combineReducers } from 'redux';
import userReducer from '../modules/auth/pages/Login/redux/reducer';
import eventReducer from '../modules/beneficiary/pages/Event/redux/reducers/';
import giftReducer from '../modules/beneficiary/pages/Gift/redux/reducer';
import resourcesReducer from '../modules/resources/redux/reducer';
import contributorReducer from '../modules/contributor/redux/reducer';
import beneficiaryReducer from '../modules/beneficiary/redux/reducers';
import wishlistReducer from '../modules/beneficiary/pages/Dashboard/redux/reducer';
import reducer from 'modules/beneficiary/pages/Wallet/redux/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  event: eventReducer,
  gifts: giftReducer,
  resources: resourcesReducer,
  contributor: contributorReducer,
  beneficiary: beneficiaryReducer,
  wishlist: wishlistReducer,
  wallet: reducer,
});

export default rootReducer;
