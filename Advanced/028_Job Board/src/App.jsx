import React, { useState } from 'react'
import Header from './components/Header'
import SearchFilters from './components/SearchFilters'
import JobCard from './components/JobCard'
import Footer from './components/Footer'
import { jobs } from './data/jobs'

function App() {
  const [filteredJobs, setFilteredJobs] = useState(jobs)
  const [searchTerm, setSearchTerm] = useState('')
  const [locationFilter, setLocationFilter] = useState('')
  const [typeFilter, setTypeFilter] = useState('')

  const handleSearch = (term, location, type) => {
    setSearchTerm(term)
    setLocationFilter(location)
    setTypeFilter(type)

    const filtered = jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(term.toLowerCase()) ||
                           job.company.toLowerCase().includes(term.toLowerCase()) ||
                           job.description.toLowerCase().includes(term.toLowerCase())
      const matchesLocation = !location || job.location.toLowerCase().includes(location.toLowerCase())
      const matchesType = !type || job.type === type

      return matchesSearch && matchesLocation && matchesType
    })

    setFilteredJobs(filtered)
  }

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="container">
          <SearchFilters onSearch={handleSearch} />
          
          <div className="jobs-section">
            <h2 className="section-title">
              {filteredJobs.length} Job{filteredJobs.length !== 1 ? 's' : ''} Available
            </h2>
            
            <div className="jobs-grid">
              {filteredJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="no-jobs">
                <h3>No jobs found</h3>
                <p>Try adjusting your search criteria</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App