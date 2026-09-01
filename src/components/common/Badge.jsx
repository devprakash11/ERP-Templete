import React from 'react'

const variants = {
  primary: 'erp-badge-primary',
  secondary: 'erp-badge-neutral',
  success: 'erp-badge-success',
  warning: 'erp-badge-warning',
  danger: 'erp-badge-danger',
  info: 'erp-badge-info',
}

export const Badge = ({ children, variant = 'primary', className = '' }) => (
  <span className={`erp-badge ${variants[variant] || variants.primary} ${className}`}>
    {children}
  </span>
)

export const Default = Badge
export default Badge
