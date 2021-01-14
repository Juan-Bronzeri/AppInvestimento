import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as actions from './actions';
import apiSell from '../../../services/apiActiveSell';

export function* getActiveSell() {
  try {

    const {data} = yield call(apiSell.get, '');

    yield put(actions.getActiveSellSuccess(
      data
    ));
  } catch (err) {
    yield put(actions.getActiveSellFailure());
  }
}

export default all([
  takeLatest('@active/GET_ACTIVE_SELL_REQUEST', getActiveSell)
])