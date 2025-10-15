import React from 'react'
import { Users, Circle } from 'lucide-react'
import './UserList.css'

const UserList = () => {
  const onlineUsers = [
    { id: 1, name: 'You', color: '#667eea', isYou: true },
    { id: 2, name: 'Alice', color: '#f56565' },
    { id: 3, name: 'Bob', color: '#48bb78' },
    { id: 4, name: 'Charlie', color: '#ed8936' },
    { id: 5, name: 'Diana', color: '#9f7aea' }
  ]

  return (
    <div className="user-list">
      <div className="user-list-header">
        <Users size={18} />
        <span>Online Users ({onlineUsers.length})</span>
      </div>
      
      <div className="users">
        {onlineUsers.map(user => (
          <div key={user.id} className="user-item">
            <div className="user-avatar">
              <Circle 
                size={12} 
                fill={user.color} 
                color={user.color}
              />
            </div>
            <span className={`user-name ${user.isYou ? 'you' : ''}`}>
              {user.name}
            </span>
            {user.isYou && <span className="you-badge">You</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserList