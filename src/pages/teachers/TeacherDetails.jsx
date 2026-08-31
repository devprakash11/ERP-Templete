import React from 'react'

export const TeacherDetails = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-text-primary">Teacher Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-text-secondary">Name</p>
          <p className="font-medium text-text-primary">Mr. Rajesh Kumar</p>
        </div>
        <div>
          <p className="text-sm text-text-secondary">Subject</p>
          <p className="font-medium text-text-primary">Mathematics</p>
        </div>
        <div>
          <p className="text-sm text-text-secondary">Department</p>
          <p className="font-medium text-text-primary">Science</p>
        </div>
        <div>
          <p className="text-sm text-text-secondary">Email</p>
          <p className="font-medium text-text-primary">rajesh@school.edu</p>
        </div>
        <div>
          <p className="text-sm text-text-secondary">Phone</p>
          <p className="font-medium text-text-primary">+91 98765 43210</p>
        </div>
        <div>
          <p className="text-sm text-text-secondary">Joining Date</p>
          <p className="font-medium text-text-primary">2020-06-15</p>
        </div>
      </div>
    </div>
  )
}