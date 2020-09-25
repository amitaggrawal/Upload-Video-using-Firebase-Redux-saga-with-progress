import React, { Fragment } from "react";
import propTypes from "prop-types";

import './PatternDiscovery.scss';
import VideoUpload from '../../container/VideoUpload/VideoUpload';
import VideoThumbnail from '../../container/VideoThumbnail/VideoThumbnail';


const PatternDiscoveryPage = (props) =>
    (
        <Fragment>
            <div className="header"> Upload File with progress bar using Redux-Saga</div>
            <div>
                <div style={{ "display": "flex" }}>
                    {/* Top Section */}
                    {/* Here thumbnail to uplaod */}
                    <div>
                        <VideoUpload />
                    </div>
                    {/* Here List of normal thumbnails */}
                    <div style={{ display: "flex", overflow: "auto" }}>
                        {
                            props.files.map(video =>
                                <VideoThumbnail key={video} />
                            )}
                    </div>
                </div>
            </div>
        </Fragment>
    );

PatternDiscoveryPage.propTypes = {
    files: propTypes.array
}
export default PatternDiscoveryPage;