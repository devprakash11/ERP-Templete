import React from 'react'

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-4">
      <h2 className="text-2xl font-bold text-text-primary mb-1">{title}</h2>
      {subtitle && (
        <p className="text-text-secondary">{subtitle}</p>
      )}
    </div>
  )
}

export default PageHeader