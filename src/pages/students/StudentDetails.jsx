import React from 'react'
import { useParams } from 'react-router-dom'

export const StudentDetails = () => {
  const { id } = useParams()

  const students = [
    { id: '1', name: 'John Doe', email: 'john@school.edu', class: 'Grade 10', section: 'A', admissionDate: '2023-02-15', contactNumber: '+91 98765 43210', address: '123 School Street, City' },
    { id: '2', name: 'Jane Smith', email: 'jane@school.edu', class: 'Grade 10', section: 'B', admissionDate: '2023-03-20', contactNumber: '+91 98765 43211', address: '456 Education Avenue, City' },
    { id: '3', name: 'Michael Brown', email: 'michael@school.edu', class: 'Grade 9', section: 'A', admissionDate: '2023-01-10', contactNumber: '+91 98765 43212', address: '789 Learning Road, City' },
  ]

  const student = students.find((s) => s.id === id) || students[0]

  return (
    <div className="w-full rounded-lg bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-6 rounded-lg border border-border bg-gray-50 p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
            {student.name.charAt(0)}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-text-primary">{student.name}</h2>
            <p className="text-sm text-text-secondary">Student ID: {student.id} · {student.class} · Section {student.section}</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="mb-4 text-xl font-bold text-text-primary">Student Information</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div><p className="text-sm text-text-secondary">Full Name</p><p className="font-medium text-text-primary">{student.name}</p></div>
          <div><p className="text-sm text-text-secondary">Email</p><p className="font-medium text-text-primary break-all">{student.email}</p></div>
          <div><p className="text-sm text-text-secondary">Class</p><p className="font-medium text-text-primary">{student.class}</p></div>
          <div><p className="text-sm text-text-secondary">Section</p><p className="font-medium text-text-primary">{student.section}</p></div>
          <div><p className="text-sm text-text-secondary">Admission Date</p><p className="font-medium text-text-primary">{student.admissionDate}</p></div>
          <div><p className="text-sm text-text-secondary">Contact</p><p className="font-medium text-text-primary">{student.contactNumber}</p></div>
          <div className="sm:col-span-2"><p className="text-sm text-text-secondary">Address</p><p className="font-medium text-text-primary">{student.address}</p></div>
        </div>
      </div>
    </div>
  )
}

export default StudentDetails
