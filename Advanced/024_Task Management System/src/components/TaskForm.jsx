import React, { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [task, setTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (task.trim()) {
      onAddTask(task.trim())
      setTask('')
    }
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Enter a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="add-btn">
        Add Task
      </button>
    </form>
  )
}

export default TaskForm