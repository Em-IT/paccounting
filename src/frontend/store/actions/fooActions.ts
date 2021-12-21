export const fooActions = {
  ACTION_1: "ACTION_1",
  ACTION_2: "ACTION_2",
}

export interface fooActionType {
  type: string,
  payload?: any
}

export const action1: fooActionType = {
  type: fooActions.ACTION_1
}

export const action2 = (value: number): fooActionType => (
  {
    type: fooActions.ACTION_2,
    payload: value
  }
);
