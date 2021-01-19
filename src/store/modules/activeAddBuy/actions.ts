import { action } from 'typesafe-actions';

export function addActiveBuyRequest({
  active,
  amount,
  valueB3,
  valueBroker,
  valueActive,
  date,
}: {
  active: string;
  amount: number;
  valueB3: number;
  valueBroker: number;
  valueActive: number;
  date: string;
}) {
  return action('@active/ADD_ACTIVE_BUY_REQUEST', {
    active,
    amount,
    valueB3,
    valueBroker,
    valueActive,
    date,
  });
}

export function addActiveBuySuccess(
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
  return action('@active/ADD_ACTIVE_BUY_SUCCESS', {
    data
  });
}

export function addActiveBuyFailure() {
  return action('@active/ADD_ACTIVE_BUY_FAILURE');
}
