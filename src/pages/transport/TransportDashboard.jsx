import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Button } from '../../common'

export const TransportDashboard = () => {
  const [routes, setRoutes] = useState([])
  const [vehicles, setVehicles] = useState([])
  const [drivers, setDrivers] = useState([])
  const navigate = useNavigate()

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-text-primary">Transport Management</h2>

      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <h3 className="text-lg font-medium text-text-secondary">Routes</h3>
          <p className="text-sm text-gray-500">Create and manage school routes</p>
          <Button
            variant="outline"
            onClick={() => navigate('/transport/routes')}
          >
            Add Route
          </Button>
        </div>
        <div>
          <h3 className="text-lg font-medium text-text-secondary">Vehicles</h3>
          <p className="text-sm text-gray-500">Manage school fleet</p>
          <Button
            variant="outline"
            onClick={() => navigate('/transport/vehicles')}
          >
            Add Vehicle
          </Button>
        </div>
        <div>
          <h3 className="text-lg font-medium text-text-secondary">Drivers</h3>
          <p className="text-sm text-gray-500">Manage driver information</p>
          <Button
            variant="outline"
            onClick={() => navigate('/transport/drivers')}
          >
            Add Driver
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <h3 className="text-lg font-medium text-text-secondary">Student Assignments</h3>
          <p className="text-sm text-gray-500">Assign students to routes</p>
          <Button variant="outline">Assign Students</Button>
        </div>
        <div>
          <h3 className="text-lg font-medium text-text-secondary">Tracking</h3>
          <p className="text-sm text-gray-500">Track vehicle locations</p>
          <Button variant="outline">View Tracking</Button>
        </div>
      </div>
    </div>
  )
}