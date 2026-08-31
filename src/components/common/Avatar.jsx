import React from 'react'

export const Avatar = ({ src, name, size = "md", className }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  }

  return (
    <div className={`w-full ${sizeClasses[size] || sizeClasses.md} rounded-full overflow-hidden ${className || ''}`}>
      {src ? (
        <img
          src={src}
          alt={name}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-primary text-white">
          {name ? name.charAt(0).toUpperCase() : ''}
        </div>
      )}
    </div>
  )
}

export const Default = Avatar