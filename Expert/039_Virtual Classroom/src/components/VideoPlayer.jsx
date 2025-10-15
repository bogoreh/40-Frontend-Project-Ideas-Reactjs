import React from 'react'

const VideoPlayer = ({ classroom }) => {
  return (
    <div className="video-player">
      <div className="video-container">
        <div className="video-placeholder">
          <i className="fas fa-video"></i>
          <p>Live Class Session</p>
          <span>Instructor: {classroom?.instructor}</span>
        </div>
      </div>
      <div className="video-controls">
        <button className="control-btn">
          <i className="fas fa-microphone"></i>
        </button>
        <button className="control-btn">
          <i className="fas fa-video"></i>
        </button>
        <button className="control-btn share">
          <i className="fas fa-share"></i>
        </button>
        <button className="control-btn end-call">
          <i className="fas fa-phone-slash"></i>
        </button>
      </div>
    </div>
  )
}

export default VideoPlayer