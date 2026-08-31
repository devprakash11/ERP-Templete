import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Button } from '../../common'

export const UsersPage = () => {
  const [users, setUsers] = useState([])
  const [roles, setRoles] = useState([])
  const navigate = useNavigate()

  const permissions = [
    { role: 'Super Admin', access: 'Full Access', description: 'All modules and settings' },
    { role: 'Admin', access: 'Most Modules', description: 'Students, Teachers, Fees, Payroll' },
    { role: 'Teacher', access: 'Students, Attendance, Marks', description: 'Class management and grading' },
    { role: 'Accountant', access: 'Fees, Payroll', description: 'Fee collection and salary processing' },
    { role: 'Librarian', access: 'Library', description: 'Book issuance and returns' },
    { role: 'Gate Security', access: 'Gate Pass', description: 'Entry and exit verification' },
  ]

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-text-primary">Users & Roles</h2>

      <div className="grid grid-cols-1 gap-4 mb-6">
        <div>
          <h3 className="text-lg font-medium text-text-secondary">Users</h3>
          <p className="text-sm text-gray-500">Manage user accounts</p>
          <Button variant="outline">Add User</Button>
        </div>
        <div>
          <h3 className="text-lg font-medium text-text-secondary">Roles</h3>
          <p className="text-sm text-gray-500">Define role-based access</p>
          <Button variant="outline">Add Role</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <Card>
            <h3 className="text-xl font-bold text-text-primary mb-3">Role Permissions</h3>
            <div className="space-y-3">
              {permissions.map((perm) => (
                <div key={perm.role} className="p-3 rounded-md bg-primary/5 border border-primary/10">
                  <div className="flex items-between justify-between">
                    <span className="font-medium text-primary">{perm.role}</span>
                    <span className="text-sm text-gray-500">{perm.access}</span>
                  </div>
                  <p className="text-xs text-gray-500">{perm.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
        <div>
          <Card>
            <h3 className="text-xl font-bold text-text-primary mb-3">Audit Logs</h3>
            <div className="space-y-3 pt-4 border-t border-border">
              <div className="p-3 rounded-md bg-gray-50 border border-gray-200">
                <p className="text-sm text-gray-500">No audit logs available</p>
              </div>
              <div className="p-3 rounded-md bg-gray-50 border border-gray-200">
                <p className="text-sm text-gray-500">No audit logs available</p>
              </div>
              <div className="p-3 rounded-md bg-gray-50 border border-gray-200">
                <p className="text-sm text-gray-500">No audit logs available</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}