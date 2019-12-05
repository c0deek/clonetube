import React from 'react'

import './VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {

    const handleClick = () => {
        onVideoSelect(video)
    }

    return (
        <div onClick={handleClick} className="video-item">
            <img alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
            <p>{video.snippet.title}</p>
        </div>
    )
}

export default VideoItem