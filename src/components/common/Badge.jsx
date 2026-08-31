import React from 'react'

export const Badge = ({ children, variant = "primary", className }) => {
  const variantClasses = {
    primary: "bg-primary text-white",
    secondary: "bg-gray-200 text-gray-900",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-white",
    danger: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
  }

  return (
    <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${variantClasses[variant] || variantClasses.primary} ${className || ''}`}>
      {children}
    </span>
  )
}

export const Default = Badge