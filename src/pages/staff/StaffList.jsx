import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/common/Button'

export const StaffList = () => {
  const [staff] = useState([])
  const navigate = useNavigate()

  const onAddStaff = () => {
    navigate('/staff/add')
  }

  return (
    <div className="w-full rounded-lg bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold text-text-primary">Staff Management</h2>
        <button
          onClick={onAddStaff}
          className="w-full rounded-md bg-primary px-4 py-2 font-medium text-white transition-colors hover:bg-primary/90 sm:w-auto"
        >
          Add Staff
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[700px] bg-white">
          <thead>
            <tr className="border-b border-border">
              <th className="p-3 text-left text-xs font-medium text-text-secondary">ID</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Name</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Role</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Department</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {staff.length > 0 ? staff.map((member) => (
              <tr key={member.id} className="border-b border-border last:border-b-0">
                <td className="p-3 text-sm">{member.id}</td>
                <td className="p-3 text-sm">{member.name}</td>
                <td className="p-3 text-sm">{member.role}</td>
                <td className="p-3 text-sm">{member.department}</td>
                <td className="p-3">
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" variant="outline" onClick={() => console.log('Edit')}>
                      Edit
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => console.log('Delete')}>
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan={5} className="p-8 text-center text-sm text-text-secondary">
                  No staff records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StaffList
