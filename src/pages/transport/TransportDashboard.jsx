import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../../components/common/Card'
import { Button } from '../../components/common/Button'

export const TransportDashboard = () => {
  const navigate = useNavigate()

  const sections = [
    { title: 'Routes', description: 'Create and manage school routes', action: 'Add Route', path: '/transport/routes' },
    { title: 'Vehicles', description: 'Manage school fleet', action: 'Add Vehicle', path: '/transport/vehicles' },
    { title: 'Drivers', description: 'Manage driver information', action: 'Add Driver', path: '/transport/drivers' },
    { title: 'Student Assignments', description: 'Assign students to routes', action: 'Assign Students', path: '/transport/assignments' },
    { title: 'Tracking', description: 'Track vehicle locations', action: 'View Tracking', path: '/transport/tracking' },
  ]

  return (
    <div className="w-full rounded-lg bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-text-primary">Transport Management</h2>
        <p className="mt-1 text-sm text-gray-500">Manage routes, vehicles, drivers, assignments, and tracking.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <Card key={section.title} className="p-4">
            <h3 className="text-lg font-semibold text-text-primary">{section.title}</h3>
            <p className="mt-1 min-h-10 text-sm text-gray-500">{section.description}</p>
            <Button className="mt-4 w-full sm:w-auto" variant="outline" onClick={() => navigate(section.path)}>
              {section.action}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default TransportDashboard
