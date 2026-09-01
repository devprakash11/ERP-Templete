import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../../components/common/Button'

export const SubjectsPage = () => {
  const [subjects] = useState([])
  const navigate = useNavigate()

  const onAddSubject = () => {
    navigate('/academics/subjects/add')
  }

  return (
    <div className="w-full rounded-lg bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold text-text-primary">Subjects Management</h2>
        <button
          onClick={onAddSubject}
          className="w-full rounded-md bg-primary px-4 py-2 font-medium text-white transition-colors hover:bg-primary/90 sm:w-auto"
        >
          Add Subject
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[760px] bg-white">
          <thead>
            <tr className="border-b border-border bg-gray-50">
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Subject ID</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Subject Name</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Class</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Teacher</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Credits</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subjects.length > 0 ? (
              subjects.map((subject) => (
                <tr key={subject.id} className="border-b border-border last:border-b-0 hover:bg-gray-50">
                  <td className="p-3 text-sm">{subject.id}</td>
                  <td className="p-3 text-sm">{subject.name}</td>
                  <td className="p-3 text-sm">{subject.class}</td>
                  <td className="p-3 text-sm">{subject.teacher}</td>
                  <td className="p-3 text-sm">{subject.credits}</td>
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
                  No subjects available. Click “Add Subject” to create one.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SubjectsPage
