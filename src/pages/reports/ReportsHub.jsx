import React from 'react'
import { Card, Button } from '../../common'

export const ReportsHub = () => {
  const categories = [
    { title: 'Student Reports', path: '/reports/students', icon: 'Users', count: 12 },
    { title: 'Attendance Reports', path: '/reports/attendance', icon: 'Clipboard', count: 8 },
    { title: 'Fee Reports', path: '/reports/fees', icon: 'DollarSign', count: 6 },
    { title: 'Academic Reports', path: '/reports/academic', icon: 'Book', count: 10 },
    { title: 'Library Reports', path: '/reports/library', icon: 'BookOpen', count: 4 },
    { title: 'Transport Reports', path: '/reports/transport', icon: 'Truck', count: 5 },
    { title: 'Inventory Reports', path: '/reports/inventory', icon: 'Box', count: 3 },
    { title: 'Payroll Reports', path: '/reports/payroll', icon: 'Users', count: 6 },
    { title: 'Gate Pass Reports', path: '/reports/gatepass', icon: 'Gate', count: 3 },
  ]

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-text-primary mb-6">Reports Hub</h2>

      <div className="grid grid-cols-1 gap-4 mb-6">
        {categories.map((category) => (
          <Card
            key={category.title}
            className="p-4 hover:bg-primary/5 transition-colors cursor-pointer"
            onClick={() => console.log(`Navigate to ${category.title}`)}
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-text-primary">{category.title}</h3>
                <p className="text-sm text-gray-500">{category.count} reports</p>
              </div>
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
                <path fill="currentColor" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}