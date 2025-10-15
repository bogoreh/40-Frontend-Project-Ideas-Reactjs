import React, { useState } from 'react';
import DeviceCard from './DeviceCard';
import SensorChart from './SensorChart';
import { devicesData, sensorData } from '../data';

const Dashboard = () => {
  const [devices] = useState(devicesData);
  const [filter, setFilter] = useState('all');

  const filteredDevices = devices.filter(device => {
    if (filter === 'all') return true;
    return device.status === filter;
  });

  const onlineCount = devices.filter(d => d.status === 'online').length;
  const offlineCount = devices.filter(d => d.status === 'offline').length;
  const totalDevices = devices.length;

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>IoT Dashboard</h1>
        <div className="header-stats">
          <div className="stat">
            <span className="stat-value">{onlineCount}</span>
            <span className="stat-label">Online</span>
          </div>
          <div className="stat">
            <span className="stat-value">{offlineCount}</span>
            <span className="stat-label">Offline</span>
          </div>
          <div className="stat">
            <span className="stat-value">{totalDevices}</span>
            <span className="stat-label">Total</span>
          </div>
        </div>
      </header>

      <div className="dashboard-controls">
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Devices
          </button>
          <button 
            className={`filter-btn ${filter === 'online' ? 'active' : ''}`}
            onClick={() => setFilter('online')}
          >
            Online
          </button>
          <button 
            className={`filter-btn ${filter === 'offline' ? 'active' : ''}`}
            onClick={() => setFilter('offline')}
          >
            Offline
          </button>
        </div>
      </div>

      <div className="dashboard-content">
        <section className="charts-section">
          <SensorChart data={sensorData} />
        </section>

        <section className="devices-section">
          <h2>Connected Devices ({filteredDevices.length})</h2>
          <div className="devices-grid">
            {filteredDevices.map(device => (
              <DeviceCard key={device.id} device={device} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;