import { useEffect, useRef } from 'react'

function CodeEditor({ language, value, onChange, placeholder }) {
  const textareaRef = useRef(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
    }
  }, [value])

  const handleChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <div className="code-editor">
      <div className="editor-header">
        <span className="language-label">{language}</span>
      </div>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="code-textarea"
        spellCheck="false"
      />
    </div>
  )
}

export default CodeEditor