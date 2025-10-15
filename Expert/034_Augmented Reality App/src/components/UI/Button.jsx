import React from 'react'
import './Button.css'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  onClick, 
  className = '',
  type = 'button',
  ...props 
}) => {
  const buttonClass = `btn btn-${variant} btn-${size} ${disabled ? 'disabled' : ''} ${className}`.trim()

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button