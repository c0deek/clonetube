import React, { Component } from 'react'

const Video = ({ video }) => {

    if(!video) return <div>Search something ...</div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div>
            <div>
                <iframe src={videoSrc} />
                <div>
                    <h3>{video.snippet.title}</h3>
                    <h4>{video.snippet.channelTitle}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Video;
