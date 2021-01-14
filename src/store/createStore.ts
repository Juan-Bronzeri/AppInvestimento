import { createStore, applyMiddleware, Middleware, Reducer } from 'redux';
import { AuthAction, AuthState } from './modules/auth/types';
import { ActiveSellAction, ActiveSellState } from './modules/activeSell/types';
import { ActiveBuyAction, ActiveBuyState } from './modules/activeBuy/types';

export interface StoreState {
  auth: AuthState;
  activeSell: ActiveSellState;
  activeBuy: ActiveBuyState;
}

export type StoreAction = AuthAction | ActiveSellAction | ActiveBuyAction;

export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[]
) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
