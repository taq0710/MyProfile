import { PayloadAction } from "@reduxjs/toolkit";
import { call, fork, put, takeEvery } from "redux-saga/effects";
import {
  uploadImage,
  uploadImageSuccess,
  uploadImageFailure,
} from "./uploadSlide";
import factories from "./factories";
function* hadleUploadImage() {
  yield takeEvery(uploadImage.type, function* (payload: PayloadAction<File>) {
    try {
      const reponse: any = yield call(factories.uploadFile, payload.payload);
      yield put(uploadImageSuccess(reponse));
    } catch (error: any) {
      yield put(uploadImageFailure(error.message));
    }
  });
}

export default function* uploadSaga() {
  yield fork(hadleUploadImage);
}
