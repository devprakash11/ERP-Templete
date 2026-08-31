import React from 'react'
import { useParams } from 'react-router-dom'
import { StudentCard } from '../components/students/StudentCard'
import { StudentTable } from '../components/students/StudentTable'

export const StudentDetails = () => {
  const { id } = useParams()

  const students = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@school.edu',
      class: 'Grade 10',
      section: 'A',
      admissionDate: '2023-02-15',
      contactNumber: '+91 98765 43210',
      address: '123 School Street, City',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@school.edu',
      class: 'Grade 10',
      section: 'B',
      admissionDate: '2023-03-20',
      contactNumber: '+91 98765 43211',
      address: '456 Education Avenue, City',
    },
    {
      id: '3',
      name: 'Michael Brown',
      email: 'michael@school.edu',
      class: 'Grade 9',
      section: 'A',
      admissionDate: '2023-01-10',
      contactNumber: '+91 98765 43212',
      address: '789 Learning Road, City',
    },
  ]

  const student = students.find((s) => s.id === id) || students[0]

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <StudentCard student={student} />

      <div className="mt-6">
        <h3 className="text-xl font-bold text-text-primary mb-4">Student Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-text-secondary">Full Name</p>
            <p className="font-medium text-text-primary">{student.name}</p>
          </div>
          <div>
            <p className="text-sm text-text-secondary">Email</p>
            <p className="font-medium text-text-primary">{student.email}</p>
          </div>
          <div>
            <p className="text-sm text-text-secondary">Class</p>
            <p className="font-medium text-text-primary">{student.class}</p>
          </div>
          <div>
            <p className="text-sm text-text-secondary">Section</p>
            <p className="font-medium text-text-primary">{student.section}</p>
          </div>
          <div>
            <p className="text-sm text-text-secondary">Admission Date</p>
            <p className="font-medium text-text-primary">{student.admissionDate}</p>
          </div>
          <div>
            <p className="text-sm text-text-secondary">Contact</p>
            <p className="font-medium text-text-primary">{student.contactNumber}</p>
          </div>
          <div>
            <p className="text-sm text-text-secondary">Address</p>
            <p className="font-medium text-text-primary">{student.address}</p>
          </div>
        </div>
      </div>
    </div>
  )
}