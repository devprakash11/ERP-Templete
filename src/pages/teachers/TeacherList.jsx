import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../common'

export const TeacherList = () => {
  const [teachers, setTeachers] = useState([])
  const navigate = useNavigate()

  const onAddTeacher = () => {
    navigate('/teachers/add')
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-text-primary">Teacher Management</h2>
        <button
          onClick={onAddTeacher}
          className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors"
        >
          Add Teacher
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-sm">
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
            {teachers.map((teacher) => (
              <tr key={teacher.id} className="border-b border-border">
                <td className="p-3 text-sm">{teacher.id}</td>
                <td className="p-3 text-sm">{teacher.name}</td>
                <td className="p-3 text-sm">{teacher.subject}</td>
                <td className="p-3 text-sm">{teacher.department}</td>
                <td className="p-3">
                  <Button size="sm" variant="outline" onClick={() => console.log('Edit')}>
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => console.log('Delete')}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}