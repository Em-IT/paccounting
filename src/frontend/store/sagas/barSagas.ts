import { take, takeEvery, put, select } from 'redux-saga/effects'
import axios from 'axios';
//import { history } from './history';
import apiUrl from '../../apiUrl';
import { barActions } from '../actions/barActions';

export function* readBarDataSaga(){
  yield takeEvery(barActions.LOADING, readBarData);
}

function* readBarData(action: any): IterableIterator<any> {
  //while (true){
    try {
      //const result: any = yield axios.get(apiUrl + `/bars/` + (action.payload ? action.payload : 0) );
      const result: any = [{value: "foo"}, {value: "bar"}, {value: action.payload}];
      console.log('axios result=', result);
      yield put({
        type: barActions.FINISHED,
        payload: result
      });
      //history.push(`/dashboard`);
    } catch (error: any) {
        yield put({
          type: barActions.FAILED,
          payload: "Error in reading data: " + (error && error.message && error.message.toString())
        });
    }
  //}
}

