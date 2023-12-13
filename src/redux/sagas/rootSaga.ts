import { fork, all } from 'redux-saga/effects';
import AllBlogsSaga from './AllBlogsSaga'

export default function* rootSaga() {
  yield all([
    fork(AllBlogsSaga),
  ]);
}
