import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as actions from './actions';
import apiBuy from '../../../services/apiActiveBuy';

export function* getActiveBuy() {
  try {

    const {data} = yield call(apiBuy.get, '');

    yield put(actions.getActiveBuySuccess(
      data
    ));
  } catch (err) {
    yield put(actions.getActiveBuyFailure());
  }
}

export default all([
  takeLatest('@active/GET_ACTIVE_BUY_REQUEST', getActiveBuy)
])