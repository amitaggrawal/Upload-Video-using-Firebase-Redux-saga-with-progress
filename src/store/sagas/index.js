import { takeEvery } from 'redux-saga/effects';

import * as videoUploadActionTypes from '../actions/videoupload-actions';
import { uploadVideoSaga } from './videouploadsaga';
import { fetchUploadedVideoSaga } from './fetchUploadedVideoSaga'

export function* watchFileUpload() {
    yield takeEvery(videoUploadActionTypes.UPLOAD_VIDEO_REQUEST, uploadVideoSaga);
    yield takeEvery(videoUploadActionTypes.REQUEST_UPLOADED_VIDEOS, fetchUploadedVideoSaga);
}