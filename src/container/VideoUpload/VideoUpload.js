import React, { Component, Fragment } from 'react';

import { connect } from "react-redux";
import * as videoUploadActionTypes from "../../store/actions/videoupload-actions";

import DragAndDrop from "../../utility/DragAndDrop/DragAndDrop";
import VideoUploadPage from "../../component/VideoUpload/VideoUploadPage";


class VideoUpload extends Component {
    fileUploadRef = React.createRef();

    //This function handles file upload for both dragged and seleted files to upload. 
    handleDrop = files => {
        this.props.updateState(files);
        this.props.uploadFile(files);
    }

    //This function will handle clicks for file upload.
    hanldeUploadClick = (e) => {
        e.stopPropagation()
        this.fileUploadRef.current.click();
    }

    //File validation to be done here.
    handleFileSelection = event => {
        const file = event.target.files[0];
        this.handleDrop(file);
    }

    render() {
        return (
            <Fragment>
                <div onClick={this.hanldeUploadClick}>
                    <DragAndDrop handleDrop={this.handleDrop} >
                        <input type="file" ref={this.fileUploadRef} style={{ display: "none" }} onChange={this.handleFileSelection} />
                        <VideoUploadPage />
                        <progress value={this.props.progress} max={100} />
                    </DragAndDrop>
                </div>
            </Fragment>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        selectedFile: state.selectedFile,
        progress: state.progress,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateState: (fileToUpload) => dispatch(videoUploadActionTypes.setSelectedFile(fileToUpload)),
        uploadFile: (file) => dispatch(videoUploadActionTypes.uploadFile(file))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(VideoUpload);
