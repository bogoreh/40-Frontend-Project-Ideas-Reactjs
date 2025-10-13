import React, { useState } from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './styles/App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')

  const addTask = (task) => {
    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
      createdAt: new Date().toLocaleDateString()
    }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed
    if (filter === 'active') return !task.completed
    return true
  })

  return (
    <div className="app">
      <div className="container">
        <Header />
        <main className="main-content">
          <TaskForm onAddTask={addTask} />
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
              onClick={() => setFilter('active')}
            >
              Active
            </button>
            <button 
              className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
              onClick={() => setFilter('completed')}
            >
              Completed
            </button>
          </div>
          <TaskList 
            tasks={filteredTasks}
            onDeleteTask={deleteTask}
            onToggleTask={toggleTask}
          />
        </main>
      </div>
    </div>
  )
}

export default App