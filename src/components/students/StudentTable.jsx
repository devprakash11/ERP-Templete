import React from 'react'
import { Button } from '../../common'

export const StudentTable = ({ students, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white rounded-lg shadow-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="p-3 text-left text-xs font-medium text-text-secondary">ID</th>
            <th className="p-3 text-left text-xs font-medium text-text-secondary">Name</th>
            <th className="p-3 text-left text-xs font-medium text-text-secondary">Class</th>
            <th className="p-3 text-left text-xs font-medium text-text-secondary">Section</th>
            <th className="p-3 text-left text-xs font-medium text-text-secondary">Email</th>
            <th className="p-3 text-left text-xs font-medium text-text-secondary">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-b border-border">
              <td className="p-3 text-sm">{student.id}</td>
              <td className="p-3 text-sm">{student.name}</td>
              <td className="p-3 text-sm">{student.class}</td>
              <td className="p-3 text-sm">{student.section}</td>
              <td className="p-3 text-sm">{student.email}</td>
              <td className="p-3">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onEdit(student)}
                >
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => onDelete(student.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}