import React from 'react';

const ProgressBar = ({ currentTime, duration, onSeek }) => {
  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e) => {
    const progressBar = e.currentTarget;
    const clickPosition = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth;
    const newTime = clickPosition * duration;
    onSeek(newTime);
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="progress-container">
      <span className="time-current">{formatTime(currentTime)}</span>
      <div 
        className="progress-bar" 
        onClick={handleProgressClick}
      >
        <div 
          className="progress" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <span className="time-total">{formatTime(duration)}</span>
    </div>
  );
};

export default ProgressBar;