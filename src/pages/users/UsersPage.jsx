import React from 'react'
import { Card } from '../../components/common/Card'
import { Button } from '../../components/common/Button'

export const UsersPage = () => {
  const permissions = [
    { role: 'Super Admin', access: 'Full Access', description: 'All modules and settings' },
    { role: 'Admin', access: 'Most Modules', description: 'Students, Teachers, Fees, Payroll' },
    { role: 'Teacher', access: 'Students, Attendance, Marks', description: 'Class management and grading' },
    { role: 'Accountant', access: 'Fees, Payroll', description: 'Fee collection and salary processing' },
    { role: 'Librarian', access: 'Library', description: 'Book issuance and returns' },
    { role: 'Gate Security', access: 'Gate Pass', description: 'Entry and exit verification' },
  ]

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-text-primary">Users & Roles</h2>

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-medium text-text-secondary">Users</h3>
          <p className="text-sm text-gray-500">Manage user accounts</p>
          <Button variant="outline" className="mt-3">Add User</Button>
        </div>
        <div>
          <h3 className="text-lg font-medium text-text-secondary">Roles</h3>
          <p className="text-sm text-gray-500">Define role-based access</p>
          <Button variant="outline" className="mt-3">Add Role</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <h3 className="mb-3 text-xl font-bold text-text-primary">Role Permissions</h3>
          <div className="space-y-3">
            {permissions.map((perm) => (
              <div key={perm.role} className="rounded-md border border-primary/10 bg-primary/5 p-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-medium text-primary">{perm.role}</span>
                  <span className="text-right text-sm text-gray-500">{perm.access}</span>
                </div>
                <p className="text-xs text-gray-500">{perm.description}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="mb-3 text-xl font-bold text-text-primary">Audit Logs</h3>
          <div className="space-y-3 border-t border-border pt-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-md border border-gray-200 bg-gray-50 p-3">
                <p className="text-sm text-gray-500">No audit logs available</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default UsersPage
