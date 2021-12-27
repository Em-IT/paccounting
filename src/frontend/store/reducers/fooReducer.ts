import { fooActions, fooActionType } from './../actions/fooActions';

export type fooStateType = number;

const defaultState: fooStateType = 0;

export const fooReducer =
  (state: fooStateType = defaultState, action: fooActionType) => {

    switch (action.type) {
    case fooActions.ACTION_1:
      return state + 1;
    case fooActions.ACTION_2:
      return state + (action.payload ? action.payload : 0);
    default:
      return state;
    }
  };
