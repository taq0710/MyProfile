import loginSaga from "features/login/loginSaga";
import postSaga from "features/post/postSaga";
import uploadSaga from "features/upload/uploadSaga";
import { all } from "redux-saga/effects";
export default function* rootSaga() {
  yield all([loginSaga(), postSaga(), uploadSaga()]);
}
