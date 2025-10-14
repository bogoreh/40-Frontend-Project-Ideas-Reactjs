import React, { useState } from 'react'

const SearchFilters = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [location, setLocation] = useState('')
  const [jobType, setJobType] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(searchTerm, location, jobType)
  }

  const handleReset = () => {
    setSearchTerm('')
    setLocation('')
    setJobType('')
    onSearch('', '', '')
  }

  return (
    <section className="search-section">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-grid">
          <div className="search-field">
            <label htmlFor="search">What</label>
            <input
              type="text"
              id="search"
              placeholder="Job title, company, or keywords"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="search-field">
            <label htmlFor="location">Where</label>
            <input
              type="text"
              id="location"
              placeholder="City, state, or remote"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="search-field">
            <label htmlFor="type">Job Type</label>
            <select
              id="type"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Remote">Remote</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <div className="search-actions">
            <button type="submit" className="btn-primary">
              Search Jobs
            </button>
            <button type="button" onClick={handleReset} className="btn-secondary">
              Clear
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default SearchFilters