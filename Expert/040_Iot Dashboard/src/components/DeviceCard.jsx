import React from 'react';
import StatusIndicator from './StatusIndicator';

const DeviceCard = ({ device }) => {
  const renderDeviceData = () => {
    switch (device.type) {
      case 'thermostat':
        return (
          <div className="device-data">
            <div className="data-item">
              <span className="data-label">Temperature</span>
              <span className="data-value">{device.temperature}°C</span>
            </div>
            <div className="data-item">
              <span className="data-label">Humidity</span>
              <span className="data-value">{device.humidity}%</span>
            </div>
          </div>
        );
      
      case 'camera':
        return (
          <div className="device-data">
            <div className="data-item">
              <span className="data-label">Motion</span>
              <span className={`data-value ${device.motionDetected ? 'warning' : 'normal'}`}>
                {device.motionDetected ? 'Detected' : 'No Motion'}
              </span>
            </div>
          </div>
        );
      
      case 'light':
        return (
          <div className="device-data">
            <div className="data-item">
              <span className="data-label">State</span>
              <span className="data-value">{device.isOn ? 'ON' : 'OFF'}</span>
            </div>
            <div className="data-item">
              <span className="data-label">Brightness</span>
              <span className="data-value">{device.brightness}%</span>
            </div>
          </div>
        );
      
      case 'lock':
        return (
          <div className="device-data">
            <div className="data-item">
              <span className="data-label">Lock</span>
              <span className="data-value">{device.isLocked ? 'Locked' : 'Unlocked'}</span>
            </div>
            <div className="data-item">
              <span className="data-label">Battery</span>
              <span className="data-value">{device.battery}%</span>
            </div>
          </div>
        );
      
      case 'sensor':
        return (
          <div className="device-data">
            <div className="data-item">
              <span className="data-label">Air Quality</span>
              <span className={`data-value ${device.airQuality}`}>
                {device.airQuality.toUpperCase()}
              </span>
            </div>
            <div className="data-item">
              <span className="data-label">PM2.5</span>
              <span className="data-value">{device.pm25} μg/m³</span>
            </div>
          </div>
        );
      
      case 'plug':
        return (
          <div className="device-data">
            <div className="data-item">
              <span className="data-label">State</span>
              <span className="data-value">{device.isOn ? 'ON' : 'OFF'}</span>
            </div>
            <div className="data-item">
              <span className="data-label">Power</span>
              <span className="data-value">{device.powerConsumption}W</span>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  const getDeviceIcon = (type) => {
    const icons = {
      thermostat: '🌡️',
      camera: '📹',
      light: '💡',
      lock: '🔒',
      sensor: '📊',
      plug: '🔌'
    };
    return icons[type] || '📱';
  };

  return (
    <div className={`device-card ${device.status}`}>
      <div className="device-header">
        <div className="device-icon">{getDeviceIcon(device.type)}</div>
        <div className="device-info">
          <h3 className="device-name">{device.name}</h3>
          <StatusIndicator status={device.status} />
        </div>
      </div>
      {renderDeviceData()}
      <div className="device-footer">
        <span className="last-update">
          Last update: {new Date(device.lastUpdate).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};

export default DeviceCard;