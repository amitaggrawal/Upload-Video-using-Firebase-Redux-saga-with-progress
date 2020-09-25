import React from 'react';

import { AiOutlinePlayCircle } from 'react-icons/ai';

import './VideoUpload.scss';

const VideoUploadPage = props => (
    <div>
        <div className="block-primary">
            <div className="play-icon-container">
                <AiOutlinePlayCircle className="play-icon" />
            </div>
        </div>
        <div className="dashed-block">

        </div>
    </div >
)

export default VideoUploadPage;