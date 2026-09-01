import React from 'react'

const sizeClasses = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-14 w-14 text-base',
}

export const Avatar = ({ src, name, size = 'md', className = '' }) => (
  <div className={`shrink-0 overflow-hidden rounded-full border-2 border-surface bg-primary ${sizeClasses[size] || sizeClasses.md} ${className}`}>
    {src ? (
      <img src={src} alt={name || 'Avatar'} className="h-full w-full object-cover" />
    ) : (
      <div className="flex h-full w-full items-center justify-center font-bold text-white">
        {name ? name.charAt(0).toUpperCase() : ''}
      </div>
    )}
  </div>
)

export const Default = Avatar
export default Avatar
