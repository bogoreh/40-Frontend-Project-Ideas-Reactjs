import React from 'react';

const TripDetails = ({ trip, onClose, onDelete }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getTripDuration = () => {
    const start = new Date(trip.startDate);
    const end = new Date(trip.endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return diffDays;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal trip-details-modal" onClick={e => e.stopPropagation()}>
        <div className="trip-details-content">
          <h2>Trip to {trip.destination}</h2>
          
          <div className="detail-section">
            <h3>📅 Trip Dates</h3>
            <div className="detail-item">
              <span className="detail-label">Start Date:</span>
              <span className="detail-value">{formatDate(trip.startDate)}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">End Date:</span>
              <span className="detail-value">{formatDate(trip.endDate)}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Duration:</span>
              <span className="detail-value">{getTripDuration()} days</span>
            </div>
          </div>

          <div className="detail-section">
            <h3>💰 Budget & Accommodation</h3>
            <div className="detail-item">
              <span className="detail-label">Total Budget:</span>
              <span className="detail-value">${trip.budget || 'Not set'}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Accommodation:</span>
              <span className="detail-value">{trip.accommodation || 'Not specified'}</span>
            </div>
          </div>

          <div className="detail-section">
            <h3>👥 Travel Details</h3>
            <div className="detail-item">
              <span className="detail-label">Travelers:</span>
              <span className="detail-value">{trip.travelers || 'Not specified'}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Trip Type:</span>
              <span className="detail-value">
                {trip.tripType ? trip.tripType.charAt(0).toUpperCase() + trip.tripType.slice(1) : 'Leisure'}
              </span>
            </div>
          </div>

          {trip.notes && (
            <div className="detail-section">
              <h3>📝 Notes</h3>
              <div className="notes-section">
                <p>{trip.notes}</p>
              </div>
            </div>
          )}

          <div className="form-actions">
            <button 
              className="btn delete-btn" 
              onClick={() => {
                if (window.confirm('Are you sure you want to delete this trip?')) {
                  onDelete(trip.id);
                }
              }}
            >
              Delete Trip
            </button>
            <button className="btn btn-primary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;