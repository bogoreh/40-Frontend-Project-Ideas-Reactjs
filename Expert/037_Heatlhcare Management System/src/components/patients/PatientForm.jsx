import React, { useState } from 'react';

const PatientForm = ({ patient, onSave, onCancel }) => {
  const [formData, setFormData] = useState(patient || {
    name: '',
    age: '',
    gender: '',
    contact: '',
    email: '',
    medicalHistory: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ 
        fontSize: '1.5rem', 
        fontWeight: '700', 
        marginBottom: '1.5rem' 
      }}>
        {patient ? 'Edit Patient' : 'Add New Patient'}
      </h2>

      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Age</label>
            <input
              type="number"
              name="age"
              className="form-input"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div className="form-group">
            <label className="form-label">Gender</label>
            <select
              name="gender"
              className="form-input"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Contact Number</label>
            <input
              type="tel"
              name="contact"
              className="form-input"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Medical History</label>
          <textarea
            name="medicalHistory"
            className="form-input"
            rows="4"
            value={formData.medicalHistory}
            onChange={handleChange}
            style={{ resize: 'vertical' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            {patient ? 'Update Patient' : 'Add Patient'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientForm;