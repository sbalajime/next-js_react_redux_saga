import { all } from 'redux-saga/effects';
import userSaga from './joke/saga';

export default function* rootSaga(getState) {
  yield all([
    userSaga(),
  ]);
}
