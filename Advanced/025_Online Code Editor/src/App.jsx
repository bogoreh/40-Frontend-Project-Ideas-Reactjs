import { useState } from 'react'
import Header from './components/Header'
import CodeEditor from './components/CodeEditor'
import Preview from './components/Preview'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [html, setHtml] = useLocalStorage('html', '<div>\n  <h1>Hello World!</h1>\n  <p>Start coding...</p>\n</div>')
  const [css, setCss] = useLocalStorage('css', 'body {\n  font-family: Arial, sans-serif;\n  padding: 20px;\n  background: #f0f2f5;\n}')
  const [js, setJs] = useLocalStorage('js', '// JavaScript code here\nconsole.log("Hello from JS!")')
  const [activeTab, setActiveTab] = useState('html')

  const srcDoc = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>
  `

  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <div className="editor-container">
          <div className="tabs">
            {['html', 'css', 'js'].map(tab => (
              <button
                key={tab}
                className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="editor-wrapper">
            {activeTab === 'html' && (
              <CodeEditor
                language="xml"
                value={html}
                onChange={setHtml}
                placeholder="Enter HTML here..."
              />
            )}
            {activeTab === 'css' && (
              <CodeEditor
                language="css"
                value={css}
                onChange={setCss}
                placeholder="Enter CSS here..."
              />
            )}
            {activeTab === 'js' && (
              <CodeEditor
                language="javascript"
                value={js}
                onChange={setJs}
                placeholder="Enter JavaScript here..."
              />
            )}
          </div>
        </div>
        <Preview srcDoc={srcDoc} />
      </div>
    </div>
  )
}

export default App