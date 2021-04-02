import { combineReducers } from 'redux';

import eventReducer from '../pages/Event/redux/reducer';

const reducer = combineReducers({
  event: eventReducer,
});

export default reducer;
