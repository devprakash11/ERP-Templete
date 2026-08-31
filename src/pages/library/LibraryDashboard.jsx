import React from 'react'
import { useState } from 'react'
import { Card } from '../../components/common/Card'

export const LibraryDashboard = () => {
  const [books] = useState([])
  const [members] = useState([])

  const issueBooks = [
    { book: 'Math Textbook', student: 'John Doe', dueDate: '2024-01-20', status: 'Issued' },
    { book: 'Physics Lab Manual', student: 'Jane Smith', dueDate: '2024-01-25', status: 'Issued' },
  ]

  const returnBooks = [
    { book: 'Chemistry Textbook', student: 'Michael Brown', dueDate: '2024-01-18', status: 'Returned' },
  ]

  return (
    <div className="w-full rounded-lg bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-gray-50 p-4">
          <h3 className="text-sm font-medium text-text-secondary">Books</h3>
          <p className="mt-1 text-2xl font-bold text-primary">{books.length}</p>
        </div>
        <div className="rounded-lg border border-border bg-gray-50 p-4">
          <h3 className="text-sm font-medium text-text-secondary">Members</h3>
          <p className="mt-1 text-2xl font-bold text-primary">{members.length}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <h3 className="mb-4 text-xl font-bold text-text-primary">Issue Book</h3>
          <div className="space-y-3">
            {issueBooks.map((issue) => (
              <div key={issue.book} className="rounded-md border border-primary/10 bg-primary/5 p-3">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-medium text-text-primary">{issue.book}</span>
                  <span className="text-sm text-gray-500">Due: {issue.dueDate}</span>
                </div>
                <p className="mt-1 text-sm text-primary">{issue.student}</p>
                <span className="text-xs text-primary">Status: {issue.status}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="mb-4 text-xl font-bold text-text-primary">Return Book</h3>
          <div className="space-y-3">
            {returnBooks.map((returnBook) => (
              <div key={returnBook.book} className="rounded-md border border-green-200 bg-green-50 p-3">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-medium text-text-primary">{returnBook.book}</span>
                  <span className="text-sm text-gray-500">Due: {returnBook.dueDate}</span>
                </div>
                <p className="mt-1 text-sm text-green-600">{returnBook.student}</p>
                <span className="text-xs text-green-600">Status: {returnBook.status}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default LibraryDashboard
