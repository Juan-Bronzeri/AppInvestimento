import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type ActiveAction = ActionType<typeof actions>;

export interface ActiveState {
  readonly loadingAddActiveRequest: boolean;
  readonly isSignedIn: boolean;
  readonly error: boolean;
  readonly token: string | null;
}