import { barActionType, barActions } from "../actions/barActions";

export interface barStateType {
  data: any[],
  isLoading: boolean,
  errorMessage: string
}

const defaultState: barStateType = {
  data: [],
  isLoading: false,
  errorMessage: ''
}

export const barReducer = (state: barStateType = defaultState, action: barActionType): barStateType => {
  switch (action.type) {
    case barActions.LOADING:
      return {
        ...state,
        isLoading: true,
        data: [],
        errorMessage: ''
      };
    case barActions.FINISHED:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        errorMessage: ''
      };
    case barActions.FAILED:
      return {
        ...state,
        isLoading: false,
        data: [],
        errorMessage: action.payload
      };
    default:
      return state;
  }
}
