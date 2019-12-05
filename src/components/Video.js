import React, { Component } from 'react'

const Video = ({ video }) => {

    if(!video) return <div className="loading">Search something ...</div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div className="video-display">
                <iframe src={videoSrc} />
                <div>
                    <h4>{video.snippet.title}</h4>
                    <h3>{video.snippet.channelTitle}</h3>
                    <p>{video.snippet.description}</p>
                </div>
        </div>
    )
}

export default Video;
