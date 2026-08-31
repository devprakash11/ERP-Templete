import React from 'react'

export const Card = ({ children, className = '' }) => (
  <div className={`rounded-lg border border-border bg-white p-5 shadow-sm ${className}`}>
    {children}
  </div>
)

export default Card
