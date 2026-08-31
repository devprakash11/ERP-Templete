import React from 'react'

export const Spinner = ({ size = "md", className }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  }

  return (
    <div className={`inline-block animate-spin rounded-full h-px w-full bg-primary ${sizeClasses[size] || sizeClasses.md} ${className || ''}`} />
  )
}

export const Default = Spinner