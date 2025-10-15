import React from 'react';

const StatusIndicator = ({ status }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'online':
        return '#10B981';
      case 'offline':
        return '#EF4444';
      case 'warning':
        return '#F59E0B';
      default:
        return '#6B7280';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'online':
        return 'Online';
      case 'offline':
        return 'Offline';
      case 'warning':
        return 'Warning';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="status-indicator">
      <div 
        className="status-dot"
        style={{ backgroundColor: getStatusColor(status) }}
      ></div>
      <span className="status-text">{getStatusText(status)}</span>
    </div>
  );
};

export default StatusIndicator;