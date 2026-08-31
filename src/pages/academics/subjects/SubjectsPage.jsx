import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../common'

export const SubjectsPage = () => {
  const [subjects, setSubjects] = useState([])
  const navigate = useNavigate()

  const onAddSubject = () => {
    navigate('/academics/subjects/add')
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-text-primary">Subjects Management</h2>
        <button
          onClick={onAddSubject}
          className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors"
        >
          Add Subject
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Subject ID</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Subject Name</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Class</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Teacher</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Credits</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject) => (
              <tr key={subject.id} className="border-b border-border">
                <td className="p-3 text-sm">{subject.id}</td>
                <td className="p-3 text-sm">{subject.name}</td>
                <td className="p-3 text-sm">{subject.class}</td>
                <td className="p-3 text-sm">{subject.teacher}</td>
                <td className="p-3 text-sm">{subject.credits}</td>
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