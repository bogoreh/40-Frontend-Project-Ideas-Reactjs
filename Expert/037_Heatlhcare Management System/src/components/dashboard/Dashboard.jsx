import React from 'react';
// Remove the react-icons import
import StatsCard from '../common/StatsCard';
import { stats, appointments } from '../../data/mockData';

const Dashboard = () => {
  const statCards = [
    {
      title: 'Total Patients',
      value: stats.totalPatients.toLocaleString(),
      icon: null, // Remove icon reference
      color: '#2563eb'
    },
    {
      title: "Today's Appointments",
      value: stats.todayAppointments,
      icon: null, // Remove icon reference
      color: '#10b981'
    },
    {
      title: 'Pending Tasks',
      value: stats.pendingTasks,
      icon: null, // Remove icon reference
      color: '#f59e0b'
    },
    {
      title: 'Available Staff',
      value: stats.availableStaff,
      icon: null, // Remove icon reference
      color: '#8b5cf6'
    }
  ];

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ 
          fontSize: '1.75rem', 
          fontWeight: '700', 
          color: 'var(--gray-800)',
          marginBottom: '1rem'
        }}>
          Dashboard Overview
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          {statCards.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: '1fr 1fr' }}>
        <div className="card">
          <h3 style={{ 
            fontSize: '1.25rem', 
            fontWeight: '600', 
            marginBottom: '1rem',
            color: 'var(--gray-800)'
          }}>
            Recent Appointments
          </h3>
          <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {appointments.slice(0, 5).map(appointment => (
              <div key={appointment.id} style={{
                padding: '1rem',
                borderBottom: '1px solid var(--gray-200)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>
                    {appointment.patientName}
                  </p>
                  <p style={{ 
                    color: 'var(--gray-600)', 
                    fontSize: '0.875rem' 
                  }}>
                    {appointment.date} at {appointment.time}
                  </p>
                </div>
                <span className={`badge badge-${appointment.status === 'Scheduled' ? 'warning' : 'success'}`}>
                  {appointment.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 style={{ 
            fontSize: '1.25rem', 
            fontWeight: '600', 
            marginBottom: '1rem',
            color: 'var(--gray-800)'
          }}>
            Quick Actions
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button className="btn btn-primary">
              Add New Patient
            </button>
            <button className="btn btn-secondary">
              Schedule Appointment
            </button>
            <button className="btn btn-secondary">
              View Today's Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;