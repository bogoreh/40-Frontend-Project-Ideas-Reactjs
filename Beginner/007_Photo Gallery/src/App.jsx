import React from 'react';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1>📸 Photo Gallery</h1>
        <p>Click on any image to view it in full size</p>
      </div>
      
      <div className="gallery-container">
        <Gallery />
      </div>
    </div>
  );
}

export default App;