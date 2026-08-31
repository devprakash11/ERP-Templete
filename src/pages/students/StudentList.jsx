import React from 'react'
import { useState } from 'react'
import { Button } from '../../components/common/Button'
import { useNavigate } from 'react-router-dom'

export const StudentList = () => {
  const [students] = useState([
    { id: 'STU001', name: 'John Doe', class: 'Grade 10', section: 'A' },
    { id: 'STU002', name: 'Jane Smith', class: 'Grade 10', section: 'B' },
    { id: 'STU003', name: 'Michael Brown', class: 'Grade 9', section: 'A' },
  ])
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const filteredStudents = students.filter((student) =>
    `${student.name} ${student.id} ${student.class} ${student.section}`.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="w-full rounded-lg bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold text-text-primary">Student Management</h2>
        <Button onClick={() => navigate('/students/add')} className="w-full sm:w-auto">
          Add Student
        </Button>
      </div>

      <div className="mb-4">
        <input
          type="search"
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-md border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary sm:max-w-sm"
        />
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[650px] bg-white">
          <thead>
            <tr className="border-b border-border">
              <th className="p-3 text-left text-xs font-medium text-text-secondary">ID</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Name</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Class</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Section</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? filteredStudents.map((student) => (
              <tr key={student.id} className="border-b border-border last:border-b-0">
                <td className="p-3 text-sm text-text-primary">{student.id}</td>
                <td className="p-3 text-sm font-medium text-text-primary">{student.name}</td>
                <td className="p-3 text-sm text-text-secondary">{student.class}</td>
                <td className="p-3 text-sm text-text-secondary">{student.section}</td>
                <td className="p-3">
                  <Button size="sm" variant="outline" onClick={() => navigate(`/students/${student.id}`)}>
                    View
                  </Button>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan={5} className="p-8 text-center text-sm text-text-secondary">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StudentList
