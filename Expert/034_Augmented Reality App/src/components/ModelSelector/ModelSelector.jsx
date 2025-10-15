import React from 'react'
import './ModelSelector.css'

const ModelSelector = ({ models, selectedModel, onModelSelect }) => {
  return (
    <div className="model-selector">
      <h2 className="selector-title">Choose a 3D Model</h2>
      <div className="models-grid">
        {models.map(model => (
          <div
            key={model.id}
            className={`model-card ${selectedModel?.id === model.id ? 'selected' : ''}`}
            onClick={() => onModelSelect(model)}
          >
            <div className="model-thumbnail">
              {/* Placeholder for thumbnail - replace with actual images */}
              <div className="thumbnail-placeholder">
                {model.name.charAt(0)}
              </div>
            </div>
            <div className="model-info">
              <h3 className="model-name">{model.name}</h3>
              <p className="model-type">{model.type.toUpperCase()} Model</p>
            </div>
            <div className="selection-indicator">
              <div className="indicator-circle"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ModelSelector