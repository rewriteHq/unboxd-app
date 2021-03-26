import { combineReducers } from 'redux';
import wishlistReducer from './wishlist';
import walletReducer from './wallet';

const eventReducer = combineReducers({
  list: wishlistReducer,
  wallet: walletReducer,
});

export default eventReducer;
