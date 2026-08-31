import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../../components/common/Card'
import { Button } from '../../components/common/Button'

export const ReportsHub = () => {
  const navigate = useNavigate()

  const categories = [
    { title: 'Student Reports', path: '/reports/students', count: 12 },
    { title: 'Attendance Reports', path: '/reports/attendance', count: 8 },
    { title: 'Fee Reports', path: '/reports/fees', count: 6 },
    { title: 'Academic Reports', path: '/reports/academic', count: 10 },
    { title: 'Library Reports', path: '/reports/library', count: 4 },
    { title: 'Transport Reports', path: '/reports/transport', count: 5 },
    { title: 'Inventory Reports', path: '/reports/inventory', count: 3 },
    { title: 'Payroll Reports', path: '/reports/payroll', count: 6 },
    { title: 'Gate Pass Reports', path: '/reports/gatepass', count: 3 },
  ]

  return (
    <div className="w-full rounded-lg bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-text-primary">Reports Hub</h2>
          <p className="mt-1 text-sm text-gray-500">Access and manage school reports by category.</p>
        </div>
        <Button variant="outline" onClick={() => navigate('/dashboard')}>
          Back to Dashboard
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Card
            key={category.title}
            className="cursor-pointer p-4 transition-colors hover:bg-primary/5"
            onClick={() => navigate(category.path)}
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 8h8M8 12h8M8 16h5" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-text-primary">{category.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{category.count} reports</p>
              </div>
              <svg className="h-4 w-4 shrink-0 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ReportsHub
