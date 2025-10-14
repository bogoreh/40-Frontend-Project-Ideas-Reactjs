import React from 'react'
import CourseCard from '../components/CourseCard'
import { featuredCourses, categories } from '../data/courses'

const Home = ({ onNavigate, onSelectCourse }) => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Learn Without <span className="highlight">Limits</span>
            </h1>
            <p className="hero-description">
              Start, switch, or advance your career with thousands of courses, 
              Professional certificates, and degrees from world-class universities and companies.
            </p>
            <div className="hero-actions">
              <button 
                className="btn-primary btn-large"
                onClick={() => onNavigate('courses')}
              >
                Explore Courses
              </button>
              <button className="btn-outline btn-large">
                Join for Free
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Popular Categories</h2>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.name}</h3>
                <p>{category.courses} courses</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="featured-courses">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Courses</h2>
            <button 
              className="btn-text"
              onClick={() => onNavigate('courses')}
            >
              View All →
            </button>
          </div>
          <div className="courses-grid">
            {featuredCourses.map(course => (
              <CourseCard
                key={course.id}
                course={course}
                onSelect={onSelectCourse}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home