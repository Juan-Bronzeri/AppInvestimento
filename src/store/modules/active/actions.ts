import { action } from 'typesafe-actions';

export function addActiveRequest({
    active,
    count,
    valueB3,
    valueBroker,
    valueActive,
}: {
    active: string;
    count: string;
    valueB3: string;
    valueBroker: string;
    valueActive: string;
}) {
  return action('@active/ADD_ACTIVE_REQUEST', {
    active,
    count,
    valueB3,
    valueBroker,
    valueActive,
  });
}
