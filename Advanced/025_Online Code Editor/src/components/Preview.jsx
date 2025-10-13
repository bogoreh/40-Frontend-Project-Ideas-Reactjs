import { useState } from 'react'

function Preview({ srcDoc }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="preview-container">
      <div className="preview-header">
        <h3>Preview</h3>
        <button 
          className="refresh-button"
          onClick={() => setIsLoading(true)}
        >
          🔄 Refresh
        </button>
      </div>
      <div className="preview-content">
        {isLoading && (
          <div className="loading">Loading preview...</div>
        )}
        <iframe
          srcDoc={srcDoc}
          title="preview"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
          onLoad={() => setIsLoading(false)}
          style={{ display: isLoading ? 'none' : 'block' }}
        />
      </div>
    </div>
  )
}

export default Preview