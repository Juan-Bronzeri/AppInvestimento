import { action } from 'typesafe-actions';

export function getActiveSellRequest() {
  return action('@active/GET_ACTIVE_SELL_REQUEST');
}

export function getActiveSellSuccess(
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
  return action('@active/GET_ACTIVE_SELL_SUCCESS', {
    data
  });
}

export function getActiveSellFailure() {
  return action('@active/GET_ACTIVE_SELL_FAILURE');
}
