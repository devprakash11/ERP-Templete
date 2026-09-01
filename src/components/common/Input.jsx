import React from 'react'

export const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled,
  className = '',
  name,
  id,
  required,
}) => (
  <input
    id={id}
    name={name}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    disabled={disabled}
    required={required}
    className={`erp-input ${className}`}
  />
)

export const Default = Input
export default Input
