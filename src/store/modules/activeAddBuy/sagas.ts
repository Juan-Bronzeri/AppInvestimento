import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as actions from './actions';
import api from '../../../services/apiActiveBuy';
import { ActionType } from 'typesafe-actions';

export function* addActiveBuy({ payload }: ActionType<typeof actions.addActiveBuyRequest>) {
  try {

    const {
      active,
      amount,
      valueB3,
      valueBroker,
      valueActive,
      date, } = payload;

    const {data} = yield call(api.post, '', {   
      active,
      amount,
      valueB3,
      valueBroker,
      valueActive,
      date, 
    });

    yield put(actions.addActiveBuySuccess(
      data
    ));
  } catch (err) {
    yield put(actions.addActiveBuyFailure());
  }
}

export default all([
  takeLatest('@active/ADD_ACTIVE_BUY_REQUEST', addActiveBuy)
])