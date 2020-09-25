import { put, call, take } from 'redux-saga/effects';
import { buffers, eventChannel, END } from 'redux-saga';

import * as videoUploadActionType from '../actions/videoupload-actions';
import { storage } from '../../config/firebase-config';

export function* uploadVideoSaga(action) {

    const file = action.payload;
    const channel = yield call(createUploadFileChannel, file);
    while (true) {

        const { progress = 0, error, url } = yield take(channel, buffers.sliding(5));
        if (error) {
            console.log('channel err' + error);
            channel.close();
            return;
        }

        if (url) {
            console.log('[completed. Dowload URL]' + url);
            yield put(videoUploadActionType.fetchUploadedVideos());
            return;
        }

        yield put(videoUploadActionType.updateProgress(progress));

    }

}

function createUploadFileChannel(file) {
    return eventChannel(emittter => {
        const uploadTask = storage.ref(`images/${file.name}`).put(file);
        uploadTask.on("state_changed",
            snapshot => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                console.log(progress);
                emittter({ progress });
            },
            error => {
                console.log(error);
                emittter({ error });
            },
            () => {
                storage.ref('images')
                    .child(file.name)
                    .getDownloadURL()
                    .then(url => {
                        emittter({ url });
                    });
            });

        return () => {
            uploadTask.off("state_changed");
        }
    });
}