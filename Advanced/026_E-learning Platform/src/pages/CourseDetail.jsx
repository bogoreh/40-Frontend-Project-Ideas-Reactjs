import React from 'react'
import ProgressBar from '../components/ProgressBar'

const CourseDetail = ({ course, onNavigate }) => {
  if (!course) {
    return (
      <div className="container">
        <div className="error-state">
          <h2>Course not found</h2>
          <button onClick={() => onNavigate('courses')}>Back to Courses</button>
        </div>
      </div>
    )
  }

  return (
    <div className="course-detail">
      <div className="container">
        <div className="course-hero">
          <div className="course-hero-content">
            <button 
              className="back-button"
              onClick={() => onNavigate('courses')}
            >
              ← Back to Courses
            </button>
            <span className="course-category">{course.category}</span>
            <h1>{course.title}</h1>
            <p className="course-hero-description">{course.description}</p>
            
            <div className="course-stats">
              <div className="stat">
                <span className="stat-value">⭐ {course.rating}</span>
                <span className="stat-label">Rating</span>
              </div>
              <div className="stat">
                <span className="stat-value">{course.students}+</span>
                <span className="stat-label">Students</span>
              </div>
              <div className="stat">
                <span className="stat-value">{course.duration}</span>
                <span className="stat-label">Duration</span>
              </div>
              <div className="stat">
                <span className="stat-value">{course.level}</span>
                <span className="stat-label">Level</span>
              </div>
            </div>

            <div className="course-actions">
              <button className="btn-primary btn-large">
                Enroll Now - {course.price === 0 ? 'Free' : `$${course.price}`}
              </button>
              <button className="btn-outline btn-large">
                Add to Wishlist
              </button>
            </div>
          </div>
          
          <div className="course-hero-image">
            <img src={course.thumbnail} alt={course.title} />
          </div>
        </div>

        <div className="course-content-grid">
          <div className="course-main-content">
            <section className="course-section">
              <h2>About This Course</h2>
              <p>{course.fullDescription}</p>
            </section>

            <section className="course-section">
              <h2>What You'll Learn</h2>
              <div className="learning-objectives">
                {course.learningObjectives?.map((objective, index) => (
                  <div key={index} className="learning-item">
                    <span className="checkmark">✓</span>
                    {objective}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="course-sidebar">
            <div className="instructor-card">
              <h3>Instructor</h3>
              <div className="instructor-info">
                <div className="instructor-avatar-large">👨‍🏫</div>
                <div className="instructor-details">
                  <h4>{course.instructor}</h4>
                  <p>{course.instructorBio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail