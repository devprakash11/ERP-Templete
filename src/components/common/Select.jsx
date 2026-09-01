import React from 'react'

export const Select = ({ placeholder, value, onChange, options = [], disabled, className = '', name, id, required, children }) => (
  <select
    id={id}
    name={name}
    value={value}
    onChange={(event) => onChange?.(event.target.value)}
    disabled={disabled}
    required={required}
    className={`erp-select ${className}`}
  >
    {placeholder && <option value="" disabled>{placeholder}</option>}
    {children}
    {!children && options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
)

export const Default = Select
export default Select
