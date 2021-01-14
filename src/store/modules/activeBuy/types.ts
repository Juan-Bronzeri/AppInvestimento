import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type ActiveBuyAction = ActionType<typeof actions>;

export interface ActiveBuyState {
  readonly loadingAddActiveRequest: boolean;
  readonly Active: [{
    id: number,
    active: string,
    amount: number,
    valueB3: number,
    valueBroker: number,
    valueActive: number,
    date: string
    gain?: number;
  }];
  readonly error: boolean;
}