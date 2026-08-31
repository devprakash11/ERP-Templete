import React from 'react'

export const Button = ({ children, type = "button", variant = "primary", size = "md", onClick, disabled, className }) => {
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-sm",
  }

  const variantClasses = {
    primary: "bg-primary text-white",
    secondary: "bg-gray-200 text-gray-900",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-white",
    danger: "bg-red-500 text-white",
    outline: "border-2 border-primary text-primary bg-white hover:bg-primary/10",
  }

  const classes = `inline-flex items-center justify-center rounded-md ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.primary} ${className || ''}`

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  )
}

export const Default = Button