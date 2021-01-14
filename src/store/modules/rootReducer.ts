import { combineReducers } from 'redux';

import { StoreState } from '../createStore';

import auth from './auth/reducer';
import activeSell from './activeSell/reducer';
import activeBuy from './activeBuy/reducer';

export default combineReducers<StoreState>({
  auth,
  activeSell,
  activeBuy
});
