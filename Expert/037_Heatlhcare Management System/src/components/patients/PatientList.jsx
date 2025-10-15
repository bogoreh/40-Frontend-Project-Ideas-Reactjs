import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import { patients } from '../../data/mockData';

const PatientList = ({ onAddPatient, onEditPatient }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="card">
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '1.5rem'
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Patients</h2>
        <button className="btn btn-primary" onClick={onAddPatient}>
          <FaPlus />
          Add Patient
        </button>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <input
          type="text"
          placeholder="Search patients..."
          className="form-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ maxWidth: '300px' }}
        />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Contact</th>
            <th>Last Visit</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map(patient => (
            <tr key={patient.id}>
              <td>
                <div>
                  <div style={{ fontWeight: '600' }}>{patient.name}</div>
                  <div style={{ 
                    fontSize: '0.875rem', 
                    color: 'var(--gray-600)' 
                  }}>
                    {patient.email}
                  </div>
                </div>
              </td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.contact}</td>
              <td>{patient.lastVisit}</td>
              <td>
                <span className="badge badge-success">
                  {patient.status}
                </span>
              </td>
              <td>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button 
                    className="btn btn-secondary"
                    style={{ padding: '0.5rem' }}
                    onClick={() => onEditPatient(patient)}
                  >
                    <FaEdit />
                  </button>
                  <button 
                    className="btn btn-danger"
                    style={{ padding: '0.5rem' }}
                  >
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;