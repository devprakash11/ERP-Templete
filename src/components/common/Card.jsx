import React from 'react'

export const Card = ({ children, className = '' }) => (
  <section className={`erp-card ${className}`}>{children}</section>
)

export default Card
