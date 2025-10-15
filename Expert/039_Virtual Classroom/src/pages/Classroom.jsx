import React from 'react'
import VideoPlayer from '../components/VideoPlayer'
import Chat from '../components/Chat'

const Classroom = ({ classroom, onBack }) => {
  if (!classroom) {
    return (
      <div className="classroom-page">
        <button className="back-btn" onClick={onBack}>
          <i className="fas fa-arrow-left"></i>
          Back to Dashboard
        </button>
        <div className="no-classroom">
          <h2>No classroom selected</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="classroom-page">
      <div className="classroom-header">
        <button className="back-btn" onClick={onBack}>
          <i className="fas fa-arrow-left"></i>
          Back to Dashboard
        </button>
        <div className="classroom-title">
          <h1>{classroom.name}</h1>
          <p>{classroom.subject} • {classroom.instructor}</p>
        </div>
        <div className="classroom-meta">
          <span className="live-badge">
            <i className="fas fa-circle"></i>
            Live
          </span>
        </div>
      </div>

      <div className="classroom-content">
        <div className="video-section">
          <VideoPlayer classroom={classroom} />
          <div className="classroom-tools">
            <h3>Class Tools</h3>
            <div className="tools-grid">
              <button className="tool-btn">
                <i className="fas fa-file"></i>
                Materials
              </button>
              <button className="tool-btn">
                <i className="fas fa-tasks"></i>
                Assignments
              </button>
              <button className="tool-btn">
                <i className="fas fa-poll"></i>
                Polls
              </button>
              <button className="tool-btn">
                <i className="fas fa-hand-paper"></i>
                Raise Hand
              </button>
            </div>
          </div>
        </div>
        
        <div className="chat-section">
          <Chat />
        </div>
      </div>
    </div>
  )
}

export default Classroom