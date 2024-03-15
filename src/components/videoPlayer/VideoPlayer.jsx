import React, { useRef } from 'react'
import './videoPlayer.css'
import video from '../../assets/video.mp4'
function VideoPlayer({playState,setPlayState}) {
  let player=useRef(null)

  let closePlayer=(e)=>{
    if(e.target===player.current){
      setPlayState(false)
    }
  }
  return (
    <div className={`video-player ${playState ? '': 'hide'} `} ref={player} onClick={closePlayer}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer