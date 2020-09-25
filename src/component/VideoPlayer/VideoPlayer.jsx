import React from "react";

import ReactPlayer from 'react-player/lazy';

const VideoPlayer = props => (
    <ReactPlayer url={props.url} controls={true} height="auto" width="314px" style={{"margin": "10px"}}/>
);

export default VideoPlayer;