export const barActions = {
  LOADING: "LOADING",
  FINISHED: "FINISHED",
  FAILED: "FAILED",
}

export interface barActionType {
  type: string,
  payload?: any
}

export const startReadingData = (value: string): barActionType => {
  return {
    type: barActions.LOADING,
    payload: value
  }
}
