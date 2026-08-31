import React from 'react'

export const ErrorState = ({ title = "Something went wrong", description, onRetry }) => {
  return (
    <div className="text-center py-12">
      <p className="text-4xl font-bold text-red-500 mb-2">!</p>
      <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
      {description && <p className="text-text-secondary">{description}</p>}
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          Retry
        </button>
      )}
    </div>
  )
}

export const Default = ErrorState