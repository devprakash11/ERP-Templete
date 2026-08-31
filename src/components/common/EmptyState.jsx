import React from 'react'

export const EmptyState = ({ title = "No items found", description, icon }) => {
  const IconComponent = icon ? (
    <svg className="w-6 h-6 mx-auto mb-4 text-gray-400" viewBox="0 0 24 24">
      <path fill="currentColor" d="M9 12l2 2 4-4m6 2a4 4 0 01-4 4L9 16l-3 3m2-3.97l.03-.03M5.839 15.03a10 10 0 1115.658-2.04 10 10 0 01-15.658 2.04zm-6 8h.01M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
    </svg>
  ) : (
    <svg className="w-6 h-6 mx-auto mb-4 text-gray-400" viewBox="0 0 24 24">
      <path fill="currentColor" d="M20 7l-8 8-4-4-5 5-3-3" />
    </svg>
  )

  return (
    <div className="text-center py-12">
      <IconComponent />
      <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
      {description && <p className="text-text-secondary">{description}</p>}
    </div>
  )
}

export const Default = EmptyState