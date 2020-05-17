import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
   GET_JOKE
} from "../actions";
import {
   getjokeFailed,
   getjokeSuccess
} from "./actions";
import { getjokeURL } from "./services";

function* getjokes({ payload }) {
   try {
      const response = {type:'success', joke:'this is a joke'} //static data
      // const response = yield call(getRaffleUrl, payload); //api data
      if (response.error) {
         console.log('response error')
         yield put(getjokeFailed(response.error));
      } else {
         console.log('response no error', response)
         yield put(getjokeSuccess(response));
      }
   } catch (error) {
   }
}


export function* watchGetJoke() {
   yield takeEvery(GET_JOKE.REQUEST, getjokes);
}

export default function* rootSaga() {
   yield all([
      fork(watchGetJoke)
   ]);
}
