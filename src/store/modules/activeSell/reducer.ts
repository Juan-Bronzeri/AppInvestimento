import { ActiveSellState, ActiveSellAction } from './types';

const initialState: ActiveSellState = {
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
  action: ActiveSellAction
): ActiveSellState {
  switch (action.type) {
    case '@active/GET_ACTIVE_SELL_REQUEST':
      return {
        ...state,
        loadingAddActiveRequest: true,
      };
    case '@active/GET_ACTIVE_SELL_SUCCESS':
      return {
        ...state,
        Active: action.payload.data,
        loadingAddActiveRequest: false,
      };
    case '@active/GET_ACTIVE_SELL_FAILURE':
      return {
        ...state,
        loadingAddActiveRequest: false,
        error: true,
      };
    default:
      return state;
  }
}
