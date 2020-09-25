import { put, call, take } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';

import { storage } from '../../config/firebase-config';
import * as videoUploadActionType from '../actions/videoupload-actions';

export function* fetchUploadedVideoSaga() {


    const uploadedFilesChannel = yield call(fetchUploadedVideos);
    const uploadedFiles = [];

    while (true) {

        const { files } = yield take(uploadedFilesChannel);

        if (files) {
            files.items.map(file => {
                uploadedFiles.push(file.location.path);
            });
            console.log(uploadedFiles);
            yield put(videoUploadActionType.renderUploadedFiles(uploadedFiles))
        }

    }
};

function fetchUploadedVideos() {
    return eventChannel(emitter => {
        storage
            .ref('images')
            .listAll()
            .then(files => {
                emitter({ files });
            });

        return () => {
            emitter({ END });
        }
    });
}