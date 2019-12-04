import React from 'react'

const VideoItem = ({ video, onVideoSelect }) => {

    const handleClick = () => {
        onVideoSelect(video)
    }

    return (
        <div onClick={handleClick} >
            <img alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
            <h4>{video.snippet.title}</h4>
        </div>
    )
}

export default VideoItem