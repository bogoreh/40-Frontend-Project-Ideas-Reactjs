import React, { useState, useEffect } from 'react'
import ARViewer from './components/ARViewer/ARViewer'
import ModelSelector from './components/ModelSelector/ModelSelector'
import Button from './components/UI/Button'
import { useAR } from './hooks/useAR'
import './App.css'

function App() {
  const [selectedModel, setSelectedModel] = useState(null)
  const [isARSessionActive, setIsARSessionActive] = useState(false)
  const [arError, setArError] = useState(null)
  const { isARSupported, isLoading: arLoading, error: arSupportError } = useAR()

  const models = [
    {
      id: 1,
      name: 'Robot',
      type: 'gltf',
      path: '/models/robot.glb',
      thumbnail: '/models/robot-thumb.jpg',
      scale: '0.5 0.5 0.5',
      description: 'A friendly robot character',
      category: 'Characters'
    },
    {
      id: 2,
      name: 'Chair',
      type: 'gltf',
      path: '/models/chair.glb',
      thumbnail: '/models/chair-thumb.jpg',
      scale: '1 1 1',
      description: 'Modern furniture piece',
      category: 'Furniture'
    },
    {
      id: 3,
      name: 'Planet',
      type: 'gltf',
      path: '/models/planet.glb',
      thumbnail: '/models/planet-thumb.jpg',
      scale: '0.1 0.1 0.1',
      description: 'Beautiful celestial body',
      category: 'Space'
    },
    {
      id: 4,
      name: 'Tree',
      type: 'gltf',
      path: '/models/tree.glb',
      thumbnail: '/models/tree-thumb.jpg',
      scale: '0.8 0.8 0.8',
      description: 'Natural environment object',
      category: 'Nature'
    }
  ]

  useEffect(() => {
    if (arSupportError) {
      setArError(arSupportError)
    }
  }, [arSupportError])

  const handleStartAR = () => {
    if (selectedModel) {
      if (!isARSupported && !arLoading) {
        setArError('AR is not supported on your device. Please try using a different browser or device.')
        return
      }
      
      setIsARSessionActive(true)
      setArError(null)
    }
  }

  const handleStopAR = () => {
    setIsARSessionActive(false)
    setArError(null)
  }

  const handleModelSelect = (model) => {
    setSelectedModel(model)
    setArError(null)
  }

  if (isARSessionActive && selectedModel) {
    return (
      <ARViewer
        model={selectedModel}
        onStopAR={handleStopAR}
        isARSupported={isARSupported}
      />
    )
  }

  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <div className="header-content">
            <h1 className="app-title">AR Experience</h1>
            <p className="app-subtitle">Bring 3D models to life with Augmented Reality</p>
            
            <div className="ar-status">
              {arLoading ? (
                <div className="status-loading">
                  <div className="loading-spinner"></div>
                  Checking AR support...
                </div>
              ) : isARSupported ? (
                <div className="status-supported">
                  ✅ AR is supported on your device
                </div>
              ) : (
                <div className="status-unsupported">
                  ⚠️ AR may not be fully supported on your device
                </div>
              )}
            </div>
          </div>
        </header>
        
        <main className="app-main">
          {arError && (
            <div className="error-banner">
              <div className="error-content">
                <span className="error-icon">⚠️</span>
                <span className="error-message">{arError}</span>
                <button 
                  className="error-close"
                  onClick={() => setArError(null)}
                >
                  ×
                </button>
              </div>
            </div>
          )}

          <ModelSelector
            models={models}
            selectedModel={selectedModel}
            onModelSelect={handleModelSelect}
          />
          
          <div className="ar-controls">
            <div className="selected-model-info">
              {selectedModel && (
                <div className="model-preview">
                  <h3>Ready to view:</h3>
                  <div className="preview-card">
                    <div className="preview-thumbnail">
                      {selectedModel.name.charAt(0)}
                    </div>
                    <div className="preview-details">
                      <h4>{selectedModel.name}</h4>
                      <p>{selectedModel.description}</p>
                      <span className="preview-category">{selectedModel.category}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Button
              variant={selectedModel ? "secondary" : "outline"}
              size="large"
              onClick={handleStartAR}
              disabled={!selectedModel || arLoading}
              className="start-ar-btn"
            >
              {arLoading ? (
                <>
                  <div className="btn-spinner"></div>
                  Checking Compatibility...
                </>
              ) : selectedModel ? (
                `Start AR with ${selectedModel.name}`
              ) : (
                'Select a Model First'
              )}
            </Button>

            {!isARSupported && !arLoading && (
              <div className="compatibility-note">
                <p>
                  <strong>Note:</strong> For best experience, use Chrome on Android or Safari on iOS. 
                  Make sure your device has a camera and supports WebXR.
                </p>
              </div>
            )}
          </div>
        </main>

        <footer className="app-footer">
          <p>Point your camera at a flat surface to place 3D models in your space</p>
        </footer>
      </div>
    </div>
  )
}

export default App