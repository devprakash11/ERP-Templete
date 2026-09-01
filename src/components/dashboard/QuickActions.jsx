import React from 'react'

export const QuickActions = () => {
  const actions = [
    { id: 1, title: 'Add Student', icon: 'UserPlus', href: '/students/add' },
    { id: 2, title: 'Add Teacher', icon: 'User', href: '/teachers/add' },
    { id: 3, title: 'Mark Attendance', icon: 'Clipboard', href: '/attendance' },
    { id: 4, title: 'Collect Fee', icon: 'DollarSign', href: '/fees' },
  ]

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-bold text-text-primary mb-4">Quick Actions</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {actions.map((action) => (
          <div
            key={action.id}
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-primary/10 transition-colors cursor-pointer"
            onClick={() => window.location.href = action.href}
          >
            <span className="w-5 h-5 rounded-lg flex items-center justify-center">
              {action.icon && (
                <svg className="w-3 h-3" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              )}
            </span>
            <span className="text-sm font-medium">{action.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}