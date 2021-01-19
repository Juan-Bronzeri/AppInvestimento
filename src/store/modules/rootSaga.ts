import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import sell from './activeSell/sagas';
import buy from './activeBuy/sagas';
import addBuy from './activeAddBuy/sagas';

export default function* rootSaga() {
  return yield all([auth, buy, sell, addBuy])
}