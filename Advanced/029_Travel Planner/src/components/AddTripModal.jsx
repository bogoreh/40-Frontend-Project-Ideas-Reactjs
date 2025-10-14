import React, { useState } from 'react';

const AddTripModal = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    budget: '',
    accommodation: '',
    travelers: '',
    tripType: 'leisure',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.destination || !formData.startDate || !formData.endDate) {
      alert('Please fill in required fields: Destination, Start Date, and End Date');
      return;
    }
    onSave(formData);
    setFormData({
      destination: '',
      startDate: '',
      endDate: '',
      budget: '',
      accommodation: '',
      travelers: '',
      tripType: 'leisure',
      notes: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>Plan New Trip</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Destination *</label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Where are you going?"
              required
            />
          </div>

          <div className="form-group">
            <label>Start Date *</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>End Date *</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Budget ($)</label>
            <input
              type="number"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Total trip budget"
            />
          </div>

          <div className="form-group">
            <label>Accommodation</label>
            <input
              type="text"
              name="accommodation"
              value={formData.accommodation}
              onChange={handleChange}
              placeholder="Hotel, Airbnb, etc."
            />
          </div>

          <div className="form-group">
            <label>Number of Travelers</label>
            <input
              type="number"
              name="travelers"
              value={formData.travelers}
              onChange={handleChange}
              placeholder="How many people?"
            />
          </div>

          <div className="form-group">
            <label>Trip Type</label>
            <select
              name="tripType"
              value={formData.tripType}
              onChange={handleChange}
            >
              <option value="leisure">Leisure/Vacation</option>
              <option value="business">Business</option>
              <option value="adventure">Adventure</option>
              <option value="family">Family Visit</option>
              <option value="romantic">Romantic Getaway</option>
            </select>
          </div>

          <div className="form-group">
            <label>Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any special plans or notes..."
              rows="3"
            />
          </div>

          <div className="form-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save Trip
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTripModal;