import React from 'react'

export const Select = ({ placeholder, value, onChange, options = [], disabled, className = '', name, id, required }) => {
  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      required={required}
      className={`w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
    >
      {placeholder && <option value="" disabled>{placeholder}</option>}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export const Default = Select
export default Select
