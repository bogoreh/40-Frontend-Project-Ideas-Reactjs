import React from 'react'

function TaskItem({ task, onDelete, onToggle }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div 
        className={`task-checkbox ${task.completed ? 'checked' : ''}`}
        onClick={() => onToggle(task.id)}
      />
      <div className="task-content">
        <div className="task-text">{task.text}</div>
        <div className="task-date">Created: {task.createdAt}</div>
      </div>
      <button 
        className="delete-btn"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </div>
  )
}

export default TaskItem