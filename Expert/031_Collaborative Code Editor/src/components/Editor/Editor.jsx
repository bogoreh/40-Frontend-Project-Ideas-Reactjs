import React from 'react'
import './Editor.css'

const Editor = ({ code, setCode, language, theme }) => {
  const handleCodeChange = (e) => {
    setCode(e.target.value)
  }

  const lineCount = code.split('\n').length

  return (
    <div className={`editor-wrapper ${theme}`}>
      <div className="editor-header">
        <div className="editor-tabs">
          <div className="tab active">main.{getFileExtension(language)}</div>
          <div className="tab">styles.css</div>
          <div className="tab">index.html</div>
        </div>
        
        <div className="editor-actions">
          <button className="action-button">Save</button>
          <button className="action-button">Run</button>
        </div>
      </div>
      
      <div className="editor-content">
        <div className="line-numbers">
          {Array.from({ length: lineCount }, (_, i) => (
            <div key={i + 1} className="line-number">
              {i + 1}
            </div>
          ))}
        </div>
        
        <textarea
          value={code}
          onChange={handleCodeChange}
          className="code-input"
          spellCheck="false"
          placeholder={`Start coding in ${language}...`}
        />
      </div>
    </div>
  )
}

const getFileExtension = (language) => {
  const extensions = {
    javascript: 'js',
    typescript: 'ts',
    python: 'py',
    java: 'java',
    cpp: 'cpp',
    html: 'html',
    css: 'css',
    php: 'php',
    ruby: 'rb',
    go: 'go'
  }
  return extensions[language] || 'txt'
}

export default Editor