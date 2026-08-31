import React from 'react'

export const Select = ({ placeholder, value, onChange, options, disabled, className }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className=`w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${className || ''}`
    >
      <option disabled>{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export const Default = Select