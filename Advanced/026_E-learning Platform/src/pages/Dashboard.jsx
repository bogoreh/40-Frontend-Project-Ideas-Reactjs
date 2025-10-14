import React from 'react'
import CourseCard from '../components/CourseCard'
import ProgressBar from '../components/ProgressBar'
import { enrolledCourses } from '../data/courses'

const Dashboard = ({ onNavigate }) => {
  const completedCourses = enrolledCourses.filter(course => course.progress === 100)
  const inProgressCourses = enrolledCourses.filter(course => course.progress < 100)

  return (
    <div className="dashboard">
      <div className="container">
        <div className="dashboard-header">
          <h1>My Learning</h1>
          <p>Continue your learning journey</p>
        </div>

        {/* Learning Stats */}
        <div className="learning-stats">
          <div className="stat-card">
            <div className="stat-icon">📚</div>
            <div className="stat-info">
              <h3>{enrolledCourses.length}</h3>
              <p>Enrolled Courses</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-info">
              <h3>{completedCourses.length}</h3>
              <p>Completed</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⏱️</div>
            <div className="stat-info">
              <h3>12h 30m</h3>
              <p>Learning Time</p>
            </div>
          </div>
        </div>

        {/* Continue Learning */}
        <section className="dashboard-section">
          <h2>Continue Learning</h2>
          <div className="courses-grid">
            {inProgressCourses.map(course => (
              <CourseCard
                key={course.id}
                course={course}
                onSelect={() => onNavigate('course-detail')}
                showProgress={true}
              />
            ))}
          </div>
        </section>

        {/* Completed Courses */}
        {completedCourses.length > 0 && (
          <section className="dashboard-section">
            <h2>Completed Courses</h2>
            <div className="courses-grid">
              {completedCourses.map(course => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onSelect={() => onNavigate('course-detail')}
                  showProgress={true}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default Dashboard