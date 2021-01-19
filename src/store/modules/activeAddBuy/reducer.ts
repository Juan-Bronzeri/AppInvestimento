import { activeAddBuyState, ActiveAddBuyAction } from './types';

const initialState: activeAddBuyState = {
  loadingAddActiveRequest: false,
  error: false,
};

export default function active(
  state = initialState,
  action: ActiveAddBuyAction
): activeAddBuyState {
  switch (action.type) {
    case '@active/ADD_ACTIVE_BUY_REQUEST':
      return {
        ...state,
        loadingAddActiveRequest: true,
      };
    case '@active/ADD_ACTIVE_BUY_SUCCESS':
      return {
        ...state,
        loadingAddActiveRequest: false,
      };
    case '@active/ADD_ACTIVE_BUY_FAILURE':
      return {
        ...state,
        loadingAddActiveRequest: false,
        error: true,
      };
    default:
      return state;
  }
}
