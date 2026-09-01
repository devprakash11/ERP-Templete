import React from 'react'

const sizes = {
  sm: 'px-3 py-2 text-xs',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-5 py-3 text-sm',
}

const variants = {
  primary: 'erp-button-primary',
  secondary: 'erp-button-secondary',
  success: 'erp-button-success',
  warning: 'erp-button-warning',
  danger: 'erp-button-danger',
  outline: 'erp-button-outline',
}

export const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`erp-button ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
  >
    {children}
  </button>
)

export const Default = Button
export default Button
