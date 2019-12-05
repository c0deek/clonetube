import React, { Component } from 'react'

import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelect}) => {

    const sidePanel = videos.map((video, id) => {
        return <VideoItem key={id} video={video} onVideoSelect={onVideoSelect}/>;
    })

    return <div className="side-panel">{sidePanel}</div>;

}

export default VideoList;
