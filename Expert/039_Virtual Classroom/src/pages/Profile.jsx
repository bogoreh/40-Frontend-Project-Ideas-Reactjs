import React from 'react'

const Profile = ({ onBack }) => {
  return (
    <div className="profile-page">
      <button className="back-btn" onClick={onBack}>
        <i className="fas fa-arrow-left"></i>
        Back to Dashboard
      </button>
      
      <div className="profile-content">
        <div className="profile-header">
          <div className="profile-avatar">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face" 
              alt="Profile" 
            />
          </div>
          <div className="profile-info">
            <h1>John Student</h1>
            <p>Computer Science Major</p>
            <div className="profile-stats">
              <div className="stat">
                <strong>12</strong>
                <span>Classes</span>
              </div>
              <div className="stat">
                <strong>45</strong>
                <span>Completed</span>
              </div>
              <div className="stat">
                <strong>92%</strong>
                <span>Attendance</span>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-details">
          <div className="detail-section">
            <h3>Personal Information</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <label>Email</label>
                <p>john.student@university.edu</p>
              </div>
              <div className="detail-item">
                <label>Student ID</label>
                <p>CS2024001</p>
              </div>
              <div className="detail-item">
                <label>Department</label>
                <p>Computer Science</p>
              </div>
              <div className="detail-item">
                <label>Semester</label>
                <p>Spring 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile