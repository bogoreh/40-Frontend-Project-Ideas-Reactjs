import React from 'react'
import ProgressBar from './ProgressBar'

const CourseCard = ({ course, onSelect, showProgress = false }) => {
  return (
    <div className="course-card" onClick={() => onSelect(course)}>
      <div className="course-image">
        <img src={course.thumbnail} alt={course.title} />
        <div className="course-category">{course.category}</div>
      </div>
      
      <div className="course-content">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-description">{course.description}</p>
        
        <div className="course-meta">
          <div className="course-instructor">
            <span className="instructor-avatar">👨‍🏫</span>
            {course.instructor}
          </div>
          <div className="course-rating">
            ⭐ {course.rating} ({course.reviews})
          </div>
        </div>
        
        <div className="course-footer">
          <div className="course-price">
            {course.price === 0 ? 'Free' : `$${course.price}`}
          </div>
          {showProgress && course.progress !== undefined && (
            <ProgressBar progress={course.progress} />
          )}
        </div>
      </div>
    </div>
  )
}

export default CourseCard