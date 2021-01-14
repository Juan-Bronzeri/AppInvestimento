import { ActiveBuyState, ActiveBuyAction } from './types';

const initialState: ActiveBuyState = {
  loadingAddActiveRequest: false,
  Active: [{
    id: 0,
    active: 'null',
    amount: 1,
    valueB3: 1,
    valueBroker: 1,
    valueActive: 1,
    date: '',
    gain: 0
  }],
  error: false,
};

export default function active(
  state = initialState,
  action: ActiveBuyAction
): ActiveBuyState {
  switch (action.type) {
    case '@active/GET_ACTIVE_BUY_REQUEST':
      return {
        ...state,
        loadingAddActiveRequest: true,
      };
    case '@active/GET_ACTIVE_BUY_SUCCESS':
      return {
        ...state,
        Active: action.payload.data,
        loadingAddActiveRequest: false,
      };
    case '@active/GET_ACTIVE_BUY_FAILURE':
      return {
        ...state,
        loadingAddActiveRequest: false,
        error: true,
      };
    default:
      return state;
  }
}
