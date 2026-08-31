import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Button } from '../../common'

export const LibraryDashboard = () => {
  const [books, setBooks] = useState([])
  const [members, setMembers] = useState([])
  const navigate = useNavigate()

  const issueBooks = [
    { book: 'Math Textbook', student: 'John Doe', dueDate: '2024-01-20', status: 'Issued' },
    { book: 'Physics Lab Manual', student: 'Jane Smith', dueDate: '2024-01-25', status: 'Issued' },
  ]

  const returnBooks = [
    { book: 'Chemistry Textbook', student: 'Michael Brown', dueDate: '2024-01-18', status: 'Returned' },
  ]

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <h3 className="text-lg font-medium text-text-secondary">Books</h3>
          <p className="text-xl font-bold text-primary">{books.length}</p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-text-secondary">Members</h3>
          <p className="text-xl font-bold text-primary">{members.length}</p>
        </div>
      </div>

      <Card>
        <h3 className="text-xl font-bold text-text-primary mb-4">Issue Book</h3>
        <div className="space-y-3">
          {issueBooks.map((issue) => (
            <div key={issue.book} className="p-3 rounded-md bg-primary/5 border border-primary/10">
              <div className="flex items-between justify-between">
                <span className="font-medium">{issue.book}</span>
                <span className="text-sm text-gray-500">Due: {issue.dueDate}</span>
              </div>
              <p className="text-sm text-primary">{issue.student}</p>
              <span className="text-xs text-primary">Status: {issue.status}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="text-xl font-bold text-text-primary mb-4">Return Book</h3>
        <div className="space-y-3">
          {returnBooks.map((returnBook) => (
            <div key={returnBook.book} className="p-3 rounded-md bg-green-5 border border-green-200">
              <div className="flex items-between justify-between">
                <span className="font-medium">{returnBook.book}</span>
                <span className="text-sm text-gray-500">Due: {returnBook.dueDate}</span>
              </div>
              <p className="text-sm text-green-600">{returnBook.student}</p>
              <span className="text-xs text-green-600">Status: {returnBook.status}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}