import React from 'react'

const ClassroomCard = ({ classroom, onJoin }) => {
  return (
    <div className="classroom-card">
      <div className="classroom-header">
        <div className="subject-icon">
          <i className={classroom.icon}></i>
        </div>
        <div className="classroom-info">
          <h3>{classroom.name}</h3>
          <p>{classroom.subject}</p>
        </div>
        <span className="status-indicator live"></span>
      </div>
      
      <div className="classroom-details">
        <div className="detail-item">
          <i className="fas fa-user"></i>
          <span>Instructor: {classroom.instructor}</span>
        </div>
        <div className="detail-item">
          <i className="fas fa-clock"></i>
          <span>{classroom.schedule}</span>
        </div>
        <div className="detail-item">
          <i className="fas fa-users"></i>
          <span>{classroom.students} students</span>
        </div>
      </div>

      <div className="classroom-actions">
        <button className="btn-primary" onClick={() => onJoin(classroom)}>
          Join Class
        </button>
        <button className="btn-secondary">
          View Details
        </button>
      </div>
    </div>
  )
}

export default ClassroomCard