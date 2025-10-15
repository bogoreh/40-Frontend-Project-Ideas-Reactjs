import React, { useEffect, useRef, useState } from 'react'
import Button from '../UI/Button'
import { useAR } from '../../hooks/useAR'
import './ARViewer.css'

const ARViewer = ({ model, onStopAR, isARSupported }) => {
  const sceneRef = useRef(null)
  const [arSessionActive, setArSessionActive] = useState(false)
  const [cameraError, setCameraError] = useState(null)
  const [isModelLoaded, setIsModelLoaded] = useState(false)
  const { isLoading: arLoading } = useAR()

  useEffect(() => {
    const initializeAR = async () => {
      try {
        // Check camera permissions
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          await navigator.mediaDevices.getUserMedia({ video: true })
        }
        
        setArSessionActive(true)
        setCameraError(null)
      } catch (error) {
        console.error('AR initialization error:', error)
        setCameraError('Camera access denied. Please allow camera permissions to use AR.')
      }
    }

    initializeAR()

    // Cleanup function
    return () => {
      setArSessionActive(false)
    }
  }, [])

  const handleModelLoaded = () => {
    setIsModelLoaded(true)
    console.log('3D model loaded successfully')
  }

  const handleModelError = (error) => {
    console.error('Error loading 3D model:', error)
    setIsModelLoaded(false)
  }

  const handleMarkerFound = () => {
    console.log('AR marker found!')
  }

  const handleMarkerLost = () => {
    console.log('AR marker lost')
  }

  const handleSceneClick = (event) => {
    // Handle scene interactions
    console.log('Scene clicked:', event)
  }

  if (!isARSupported && !arLoading) {
    return (
      <div className="ar-error-container">
        <div className="ar-error-content">
          <h2>AR Not Supported</h2>
          <p>Your device or browser doesn't support Augmented Reality features.</p>
          <Button variant="primary" onClick={onStopAR}>
            Return to Menu
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="ar-viewer">
      <div className="ar-header">
        <div className="ar-header-left">
          <Button
            variant="outline"
            size="small"
            onClick={onStopAR}
            className="stop-ar-btn"
          >
            ← Back to Menu
          </Button>
        </div>
        
        <div className="ar-header-center">
          <div className="ar-info">
            Viewing: <strong>{model.name}</strong>
            {isModelLoaded && <span className="model-status loaded">✓ Loaded</span>}
          </div>
        </div>

        <div className="ar-header-right">
          <div className="ar-controls-group">
            <button className="ar-control-btn" title="Take screenshot">
              📸
            </button>
            <button className="ar-control-btn" title="Toggle lights">
              💡
            </button>
          </div>
        </div>
      </div>
      
      {cameraError && (
        <div className="camera-error">
          <div className="error-message">
            <span>⚠️ {cameraError}</span>
            <Button variant="outline" size="small" onClick={onStopAR}>
              Go Back
            </Button>
          </div>
        </div>
      )}

      <div className="ar-instructions">
        <div className="instructions-content">
          <div className="instruction-item">
            <span className="instruction-icon">📱</span>
            <span>Point camera at a flat surface</span>
          </div>
          <div className="instruction-item">
            <span className="instruction-icon">👆</span>
            <span>Tap to interact with model</span>
          </div>
          <div className="instruction-item">
            <span className="instruction-icon">🔍</span>
            <span>Move around to view from different angles</span>
          </div>
        </div>
      </div>

      <div className="ar-scene-container">
        {arLoading ? (
          <div className="ar-loading">
            <div className="loading-content">
              <div className="loading-spinner"></div>
              <p>Initializing AR Camera...</p>
            </div>
          </div>
        ) : (
          <a-scene
            ref={sceneRef}
            embedded
            arjs="sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;"
            renderer="logarithmicDepthBuffer: true; antialias: true;"
            vr-mode-ui="enabled: false"
            onClick={handleSceneClick}
          >
            {/* Marker-based AR */}
            <a-marker 
              type="pattern" 
              preset="hiro"
              emitevents="true"
              onMarkerFound={handleMarkerFound}
              onMarkerLost={handleMarkerLost}
            >
              <a-entity
                gltf-model={model.path}
                scale={model.scale}
                position="0 0 0"
                rotation="0 0 0"
                animation-mixer="clip: *;"
                onModelLoaded={handleModelLoaded}
                onModelError={handleModelError}
              >
              </a-entity>
            </a-marker>

            {/* Marker for pattern */}
            <a-marker type="pattern" url="https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.patt">
              <a-entity
                gltf-model={model.path}
                scale={model.scale}
                position="0 0 0"
                rotation="0 0 0"
                animation-mixer="clip: *;"
              >
              </a-entity>
            </a-marker>

            {/* Camera */}
            <a-entity camera></a-entity>

            {/* Lighting */}
            <a-entity light="type: ambient; color: #CCC; intensity: 0.6"></a-entity>
            <a-entity light="type: directional; color: #FFF; intensity: 0.8" position="1 1 1"></a-entity>
            <a-entity light="type: point; color: #FFF; intensity: 0.5" position="0 2 0"></a-entity>
          </a-scene>
        )}
      </div>

      <div className="ar-footer">
        <div className="ar-stats">
          <div className="stat-item">
            <span className="stat-label">Model:</span>
            <span className="stat-value">{model.name}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Status:</span>
            <span className="stat-value">
              {arSessionActive ? 'Active' : 'Initializing...'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ARViewer