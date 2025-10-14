import React from 'react'

const JobCard = ({ job }) => {
  const getTypeColor = (type) => {
    const colors = {
      'Full-time': '#10b981',
      'Part-time': '#f59e0b',
      'Contract': '#8b5cf6',
      'Remote': '#ef4444',
      'Internship': '#06b6d4'
    }
    return colors[type] || '#6b7280'
  }

  return (
    <div className="job-card">
      <div className="job-header">
        <div className="company-logo">
          {job.company.charAt(0)}
        </div>
        <div className="job-info">
          <h3 className="job-title">{job.title}</h3>
          <p className="company-name">{job.company}</p>
          <p className="job-location">{job.location}</p>
        </div>
      </div>

      <p className="job-description">
        {job.description.length > 120 
          ? `${job.description.substring(0, 120)}...` 
          : job.description
        }
      </p>

      <div className="job-footer">
        <span 
          className="job-type"
          style={{ backgroundColor: getTypeColor(job.type) }}
        >
          {job.type}
        </span>
        <div className="job-meta">
          <span className="salary">${job.salary}/year</span>
          <span className="posted-date">{job.posted}</span>
        </div>
      </div>

      <button className="apply-btn">Apply Now</button>
    </div>
  )
}

export default JobCard