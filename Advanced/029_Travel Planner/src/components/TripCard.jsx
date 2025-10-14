import React from 'react';

const TripCard = ({ trip, onClick }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="trip-card" onClick={onClick}>
      <div className="trip-header">
        <h3 className="trip-destination">{trip.destination}</h3>
        <span className="trip-date">
          {formatDate(trip.startDate)} - {formatDate(trip.endDate)}
        </span>
      </div>
      
      <div className="trip-details">
        <div className="trip-detail">
          <span>📍</span>
          <span>{trip.accommodation || 'No accommodation set'}</span>
        </div>
        
        <div className="trip-detail">
          <span>👥</span>
          <span>{trip.travelers || 'Not specified'} travelers</span>
        </div>
        
        <div className="trip-detail">
          <span>🎯</span>
          <span>{trip.tripType || 'Leisure'} trip</span>
        </div>
      </div>
      
      <div className="trip-budget">
        Budget: ${trip.budget || '0'}
      </div>
    </div>
  );
};

export default TripCard;