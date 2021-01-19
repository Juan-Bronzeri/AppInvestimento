import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type ActiveAddBuyAction = ActionType<typeof actions>;

export interface activeAddBuyState {
  readonly loadingAddActiveRequest: boolean;
  readonly error: boolean;
}