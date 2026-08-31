import React from 'react'
import { useState } from 'react'
import { Table, TableBody, TableCell, TableHeader, TableHeaderRow, TableRow } from 'react-table'
import { Button } from '../components/common'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const StudentList = () => {
  const [students, setStudents] = useState([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState({ class: '', section: '' })
  const navigate = useNavigate()

  const { register, handleSubmit, reset } = useForm()

  const onAddStudent = () => {
    navigate('/students/add')
  }

  const searchStudents = (students) => {
    return students.filter((student) => {
      const matchesSearch = student.name.toLowerCase().includes(search.toLowerCase())
      return matchesSearch
    })
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-text-primary">Student Management</h2>
        <button
          onClick={onAddStudent}
          className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors"
        >
          Add Student
        </button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary w-64"
        />
      </div>

      <div className="overflow-x-auto">
        <Table
          columns={[
            {
              Header: 'ID',
              accessor: 'id',
            },
            {
              Header: 'Name',
              accessor: 'name',
            },
            {
              Header: 'Class',
              accessor: 'class',
            },
            {
              Header: 'Section',
              accessor: 'section',
            },
            {
              Header: 'Actions',
              accessor: 'actions',
            },
          ]}
          data={students}
        />
      </div>
    </div>
  )
}