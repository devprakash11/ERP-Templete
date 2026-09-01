import React from 'react'

export const StatCard = ({ title, count, trend }) => {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <div
      className="erp-stat-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="erp-stat-label">{title}</p>
          <p className="erp-stat-value">{count}</p>
        </div>
        <span className={`erp-stat-trend ${isHovered ? 'opacity-100' : 'opacity-90'}`}>
          <svg className="h-3 w-3" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span>{trend}</span>
        </span>
      </div>
    </div>
  )
}
