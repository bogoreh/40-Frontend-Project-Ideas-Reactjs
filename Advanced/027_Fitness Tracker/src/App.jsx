import React, { useState } from 'react'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import WorkoutForm from './components/WorkoutForm'
import WorkoutList from './components/WorkoutList'
import ProgressChart from './components/ProgressChart'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const [workouts, setWorkouts] = useLocalStorage('fitness-workouts', [])
  const [activeTab, setActiveTab] = useState('dashboard')

  const addWorkout = (workout) => {
    const newWorkout = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      ...workout
    }
    setWorkouts(prev => [newWorkout, ...prev])
  }

  const deleteWorkout = (id) => {
    setWorkouts(prev => prev.filter(workout => workout.id !== id))
  }

  return (
    <div className="app">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="main-content">
        {activeTab === 'dashboard' && (
          <Dashboard workouts={workouts} />
        )}
        
        {activeTab === 'add' && (
          <WorkoutForm onAddWorkout={addWorkout} />
        )}
        
        {activeTab === 'history' && (
          <WorkoutList workouts={workouts} onDeleteWorkout={deleteWorkout} />
        )}
        
        {activeTab === 'progress' && (
          <ProgressChart workouts={workouts} />
        )}
      </main>
    </div>
  )
}

export default App