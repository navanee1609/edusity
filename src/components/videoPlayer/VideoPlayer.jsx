import React from 'react'
import './videoPlayer.css'
import video from '../../assets/college intro video.mp4'
function VideoPlayer() {
  return (
    <div className="video-player">
        <video src={video}></video>
    </div>
  )
}

export default VideoPlayer