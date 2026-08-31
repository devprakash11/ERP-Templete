import React from 'react'

export const Input = ({ type = "text", placeholder, value, onChange, disabled, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className=`w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${className || ''}`
    />
  )
}

export const Default = Input