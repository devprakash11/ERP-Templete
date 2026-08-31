import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../common'

export const SectionsPage = () => {
  const [sections, setSections] = useState([])
  const navigate = useNavigate()

  const onAddSection = () => {
    navigate('/academics/sections/add')
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-text-primary">Sections Management</h2>
        <button
          onClick={onAddSection}
          className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors"
        >
          Add Section
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Section ID</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Section Name</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Class</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Teacher</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Students</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sections.map((section) => (
              <tr key={section.id} className="border-b border-border">
                <td className="p-3 text-sm">{section.id}</td>
                <td className="p-3 text-sm">{section.name}</td>
                <td className="p-3 text-sm">{section.className}</td>
                <td className="p-3 text-sm">{section.teacher}</td>
                <td className="p-3 text-sm">{section.studentCount}</td>
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