import React from 'react'

export const RecentActivity = () => {
  const activities = [
    { id: 1, title: 'New student admission', time: '2 hours ago', type: 'success' },
    { id: 2, title: 'Fee payment received', time: '5 hours ago', type: 'info' },
    { id: 3, title: 'Teacher attendance marked', time: 'Yesterday', type: 'warning' },
    { id: 4, title: 'Library book returned', time: '2 days ago', type: 'secondary' },
  ]

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-bold text-text-primary mb-4">Recent Activity</h3>
      <div className="space-y-3">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0"></div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-text-secondary">{activity.title}</p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}