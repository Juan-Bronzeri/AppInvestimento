import { action } from 'typesafe-actions';

export function getActiveBuyRequest() {
  return action('@active/GET_ACTIVE_BUY_REQUEST');
}

export function getActiveBuySuccess(
  data: [{
    id: number,
    active: string,
    amount: number,
    valueB3: number,
    valueBroker: number,
    valueActive: number,
    date: string,
    gain?: number
  }]
  ) {
  return action('@active/GET_ACTIVE_BUY_SUCCESS', {
    data
  });
}

export function getActiveBuyFailure() {
  return action('@active/GET_ACTIVE_BUY_FAILURE');
}
