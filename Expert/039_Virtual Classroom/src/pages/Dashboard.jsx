import React from 'react'
import ClassroomCard from '../components/ClassroomCard'
import { classrooms } from '../data/mockData'

const Dashboard = ({ onClassroomSelect, onPageChange }) => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome back, Student!</h1>
        <p>Continue your learning journey</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-book"></i>
          </div>
          <div className="stat-info">
            <h3>5</h3>
            <p>Active Classes</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-tasks"></i>
          </div>
          <div className="stat-info">
            <h3>3</h3>
            <p>Pending Assignments</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-calendar"></i>
          </div>
          <div className="stat-info">
            <h3>2</h3>
            <p>Classes Today</p>
          </div>
        </div>
      </div>

      <section className="classrooms-section">
        <div className="section-header">
          <h2>Your Classrooms</h2>
          <button className="btn-outline">View All</button>
        </div>
        <div className="classrooms-grid">
          {classrooms.map(classroom => (
            <ClassroomCard
              key={classroom.id}
              classroom={classroom}
              onJoin={onClassroomSelect}
            />
          ))}
        </div>
      </section>

      <section className="upcoming-classes">
        <h2>Upcoming Classes</h2>
        <div className="upcoming-list">
          {classrooms.slice(0, 2).map(classroom => (
            <div key={classroom.id} className="upcoming-item">
              <div className="upcoming-time">
                <span className="time">{classroom.schedule.split(' ')[0]}</span>
              </div>
              <div className="upcoming-details">
                <h4>{classroom.name}</h4>
                <p>{classroom.subject} with {classroom.instructor}</p>
              </div>
              <button className="btn-primary" onClick={() => onClassroomSelect(classroom)}>
                Join
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Dashboard