import * as videoUploadActionType from "../actions/videoupload-actions";

const initialState = {
    selectedFile: null,
    progress: 0,
    files: [],
}

const videoUploadReducer = (state = initialState, action) => {
    switch (action.type) {
        case videoUploadActionType.SET_SELECTED_FILE:
            return {
                ...state,
                selectedFile: action.payload,
            }

        case videoUploadActionType.UPDATE_PROGRESS:
            return {
                ...state,
                progress: action.payload,
            }

        case videoUploadActionType.RENDER_UPLOADED_VIDEO:
            console.log('state before upload' + state, action.payload);
            return{
                ...state,
                files: action.payload
            }

        default:
            return state;
    }
}

export default videoUploadReducer;