import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/common/Button'

export const TeacherList = () => {
  const [teachers] = useState([])
  const navigate = useNavigate()

  const onAddTeacher = () => {
    navigate('/teachers/add')
  }

  return (
    <div className="w-full rounded-lg bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold text-text-primary">Teacher Management</h2>
        <button
          onClick={onAddTeacher}
          className="w-full rounded-md bg-primary px-4 py-2 font-medium text-white transition-colors hover:bg-primary/90 sm:w-auto"
        >
          Add Teacher
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[700px] bg-white">
          <thead>
            <tr className="border-b border-border">
              <th className="p-3 text-left text-xs font-medium text-text-secondary">ID</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Name</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Subject</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Department</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.length > 0 ? teachers.map((teacher) => (
              <tr key={teacher.id} className="border-b border-border last:border-b-0">
                <td className="p-3 text-sm">{teacher.id}</td>
                <td className="p-3 text-sm">{teacher.name}</td>
                <td className="p-3 text-sm">{teacher.subject}</td>
                <td className="p-3 text-sm">{teacher.department}</td>
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
                  No teacher records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TeacherList
