import React from 'react'

export const StatCard = ({ title, count, trend }) => {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-text-secondary text-sm">{title}</p>
          <p className="text-2xl font-bold text-primary">{count}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${isHovered ? 'bg-primary/10' : 'bg-primary/5'} ${!isHovered ? 'hover:bg-primary/10' : ''} transition-colors`}>
            <svg className="w-3 h-3" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-1">{trend}</span>
          </span>
        </div>
      </div>
    </div>
  )
}