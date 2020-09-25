export const SET_SELECTED_FILE = "SET_SELECTED_FILE";

export const UPDATE_PROGRESS = "UPDATE_PROGRESS";
// initiate request for uploaded files
export const REQUEST_UPLOADED_VIDEOS = "REQUEST_UPLOADED_VIDEOS";
//uploaded file list will be used to add videos to thumbnail
export const RENDER_UPLOADED_VIDEO = "RENDER_UPLOADED_VIDEO";
//upload file will be used to upload video to server
export const UPLOAD_VIDEO_REQUEST = "UPLOAD_VIDEO_REQUEST";

export const setSelectedFile = (file) => {
    return {
        type: SET_SELECTED_FILE,
        payload: file
    };
};

export const uploadFile = (file) => {
    return {
        type: UPLOAD_VIDEO_REQUEST,
        payload: file,
    };
};

export const updateProgress = (progress) => {
    return{
        type: UPDATE_PROGRESS,
        payload: progress
    }
};

export const fetchUploadedVideos = () => {
    return {
        type: REQUEST_UPLOADED_VIDEOS
    }
}

export const renderUploadedFiles = (files) => {
    console.log(files);
    return {
        type: RENDER_UPLOADED_VIDEO,
        payload: files
    };
}