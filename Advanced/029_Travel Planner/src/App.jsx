import React, { useState } from 'react';
import './styles/App.css';
import TripCard from './components/TripCard';
import AddTripModal from './components/AddTripModal';
import TripDetails from './components/TripDetails';

function App() {
  const [trips, setTrips] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState(null);

  const addTrip = (tripData) => {
    const newTrip = {
      id: Date.now().toString(),
      ...tripData,
      createdAt: new Date().toISOString()
    };
    setTrips([...trips, newTrip]);
    setShowModal(false);
  };

  const deleteTrip = (tripId) => {
    setTrips(trips.filter(trip => trip.id !== tripId));
    setSelectedTrip(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>🌍 Travel Planner</h1>
          <p>Plan your adventures with ease</p>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="trips-header">
            <h2>My Trips</h2>
            <button 
              className="add-trip-btn"
              onClick={() => setShowModal(true)}
            >
              + Add New Trip
            </button>
          </div>

          {trips.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">✈️</div>
              <h3>No trips planned yet</h3>
              <p>Start by adding your first adventure!</p>
              <button 
                className="cta-button"
                onClick={() => setShowModal(true)}
              >
                Plan Your First Trip
              </button>
            </div>
          ) : (
            <div className="trips-grid">
              {trips.map(trip => (
                <TripCard
                  key={trip.id}
                  trip={trip}
                  onClick={() => setSelectedTrip(trip)}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      {showModal && (
        <AddTripModal
          onClose={() => setShowModal(false)}
          onSave={addTrip}
        />
      )}

      {selectedTrip && (
        <TripDetails
          trip={selectedTrip}
          onClose={() => setSelectedTrip(null)}
          onDelete={deleteTrip}
        />
      )}
    </div>
  );
}

export default App;