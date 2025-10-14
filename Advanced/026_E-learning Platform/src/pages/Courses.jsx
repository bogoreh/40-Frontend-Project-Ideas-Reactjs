import React, { useState } from 'react'
import CourseCard from '../components/CourseCard'
import SearchBar from '../components/SearchBar'
import { allCourses, categories } from '../data/courses'

const Courses = ({ onNavigate, onSelectCourse }) => {
  const [filteredCourses, setFilteredCourses] = useState(allCourses)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const handleSearch = (query) => {
    const filtered = allCourses.filter(course =>
      course.title.toLowerCase().includes(query.toLowerCase()) ||
      course.description.toLowerCase().includes(query.toLowerCase()) ||
      course.instructor.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredCourses(filtered)
  }

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category)
    if (category === 'all') {
      setFilteredCourses(allCourses)
    } else {
      const filtered = allCourses.filter(course => course.category === category)
      setFilteredCourses(filtered)
    }
  }

  return (
    <div className="courses-page">
      <div className="container">
        <div className="page-header">
          <h1>All Courses</h1>
          <p>Discover your perfect course from our collection</p>
        </div>

        <div className="courses-controls">
          <SearchBar onSearch={handleSearch} placeholder="Search courses, instructors..." />
          
          <div className="category-filters">
            <button
              className={`category-filter ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => handleCategoryFilter('all')}
            >
              All
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                className={`category-filter ${selectedCategory === category.name ? 'active' : ''}`}
                onClick={() => handleCategoryFilter(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="courses-grid">
          {filteredCourses.map(course => (
            <CourseCard
              key={course.id}
              course={course}
              onSelect={onSelectCourse}
            />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="no-results">
            <h3>No courses found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Courses