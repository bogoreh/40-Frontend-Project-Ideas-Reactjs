import React from 'react'

const InputField = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        type="number"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min="0"
        step="0.1"
      />
    </div>
  )
}

export default InputField