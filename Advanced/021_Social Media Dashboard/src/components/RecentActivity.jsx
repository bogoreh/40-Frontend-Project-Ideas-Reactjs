import React from 'react'

const RecentActivity = ({ darkMode }) => {
  const activities = [
    { platform: 'facebook', action: 'liked your post', time: '2 min ago' },
    { platform: 'twitter', action: 'retweeted your tweet', time: '10 min ago' },
    { platform: 'instagram', action: 'commented on your photo', time: '1 hour ago' },
    { platform: 'youtube', action: 'subscribed to your channel', time: '3 hours ago' }
  ]

  const platformColors = {
    facebook: '#1877F2',
    twitter: '#1DA1F2',
    instagram: '#E4405F',
    youtube: '#FF0000'
  }

  return (
    <div className={`recent-activity ${darkMode ? 'dark' : ''}`}>
      <h2 className="section-title">Recent Activity</h2>
      <div className="activity-list">
        {activities.map((activity, index) => (
          <div key={index} className="activity-item">
            <div 
              className="activity-icon"
              style={{ background: platformColors[activity.platform] }}
            >
              {activity.platform[0].toUpperCase()}
            </div>
            <div className="activity-content">
              <p>
                <span className="platform-name">{activity.platform}</span> {activity.action}
              </p>
              <span className="activity-time">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentActivity