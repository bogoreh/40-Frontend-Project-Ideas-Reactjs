import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>JobBoard</h3>
            <p>Connecting talented professionals with amazing opportunities worldwide.</p>
          </div>
          
          <div className="footer-section">
            <h4>For Job Seekers</h4>
            <a href="#search">Search Jobs</a>
            <a href="#create-profile">Create Profile</a>
            <a href="#career-advice">Career Advice</a>
          </div>

          <div className="footer-section">
            <h4>For Employers</h4>
            <a href="#post-job">Post a Job</a>
            <a href="#search-candidates">Search Candidates</a>
            <a href="#pricing">Pricing</a>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 JobBoard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer