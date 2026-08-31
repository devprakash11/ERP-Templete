import React from 'react'
import { Button } from '../../../components/common/Button'

export const ReportCardsPage = () => {
  const students = [
    { name: 'John Doe', className: 'Grade 10', grade: 'A', gpa: '3.8' },
    { name: 'Jane Smith', className: 'Grade 10', grade: 'A-', gpa: '3.5' },
    { name: 'Michael Brown', className: 'Grade 9', grade: 'B+', gpa: '3.2' },
  ]

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-text-primary">Report Cards</h2>
        <p className="mt-1 text-sm text-gray-500">Review student academic performance and report cards.</p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[640px] bg-white">
          <thead>
            <tr className="border-b border-border bg-gray-50">
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Student</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Class</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Grade</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">GPA</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.name} className="border-b border-border last:border-b-0 hover:bg-gray-50">
                <td className="p-3 text-sm font-medium text-text-primary">{student.name}</td>
                <td className="p-3 text-sm text-text-secondary">{student.className}</td>
                <td className="p-3 text-sm text-text-secondary">{student.grade}</td>
                <td className="p-3 text-sm text-text-secondary">{student.gpa}</td>
                <td className="p-3">
                  <Button size="sm" variant="outline" onClick={() => console.log(`View report for ${student.name}`)}>
                    View
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

export default ReportCardsPage
