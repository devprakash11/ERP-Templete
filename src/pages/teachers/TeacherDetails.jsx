import React from 'react'

export const TeacherDetails = () => {
  return (
    <div className="w-full rounded-lg bg-white p-4 shadow-sm sm:p-6">
      <h2 className="mb-6 text-2xl font-bold text-text-primary">Teacher Details</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div><p className="text-sm text-text-secondary">Name</p><p className="font-medium text-text-primary">Mr. Rajesh Kumar</p></div>
        <div><p className="text-sm text-text-secondary">Subject</p><p className="font-medium text-text-primary">Mathematics</p></div>
        <div><p className="text-sm text-text-secondary">Department</p><p className="font-medium text-text-primary">Science</p></div>
        <div><p className="text-sm text-text-secondary">Email</p><p className="break-all font-medium text-text-primary">rajesh@school.edu</p></div>
        <div><p className="text-sm text-text-secondary">Phone</p><p className="font-medium text-text-primary">+91 98765 43210</p></div>
        <div><p className="text-sm text-text-secondary">Joining Date</p><p className="font-medium text-text-primary">2020-06-15</p></div>
      </div>
    </div>
  )
}

export default TeacherDetails
