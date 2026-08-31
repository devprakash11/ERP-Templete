import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../components/common/Button'

export const SectionsPage = () => {
  const [sections, setSections] = useState([])
  const navigate = useNavigate()

  const onAddSection = () => {
    navigate('/academics/sections/add')
  }

  return (
    <div className="w-full rounded-lg bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold text-text-primary">Sections Management</h2>
        <button
          onClick={onAddSection}
          className="w-full rounded-md bg-primary px-4 py-2 font-medium text-white transition-colors hover:bg-primary/90 sm:w-auto"
        >
          Add Section
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[760px] bg-white">
          <thead>
            <tr className="border-b border-border bg-gray-50">
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Section ID</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Section Name</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Class</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Teacher</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Students</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sections.length > 0 ? (
              sections.map((section) => (
                <tr key={section.id} className="border-b border-border last:border-b-0 hover:bg-gray-50">
                  <td className="p-3 text-sm">{section.id}</td>
                  <td className="p-3 text-sm">{section.name}</td>
                  <td className="p-3 text-sm">{section.className}</td>
                  <td className="p-3 text-sm">{section.teacher}</td>
                  <td className="p-3 text-sm">{section.studentCount}</td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => console.log('Edit')}>
                        Edit
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => console.log('Delete')}>
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="p-8 text-center text-sm text-gray-500">
                  No sections available. Click “Add Section” to create one.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SectionsPage
