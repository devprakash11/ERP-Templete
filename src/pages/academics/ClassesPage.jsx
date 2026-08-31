import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../common'

export const ClassesPage = () => {
  const [classes, setClasses] = useState([])
  const navigate = useNavigate()

  const onAddClass = () => {
    navigate('/academics/classes/add')
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-text-primary">Classes Management</h2>
        <button
          onClick={onAddClass}
          className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors"
        >
          Add Class
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Class ID</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Class Name</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Year</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Students</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls) => (
              <tr key={cls.id} className="border-b border-border">
                <td className="p-3 text-sm">{cls.id}</td>
                <td className="p-3 text-sm">{cls.name}</td>
                <td className="p-3 text-sm">{cls.year}</td>
                <td className="p-3 text-sm">{cls.studentCount}</td>
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