import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../common'

export const ReportCardsPage = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-text-primary">Report Cards</h2>

      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Student</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Class</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Grade</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">GPA</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="p-3 text-sm">John Doe</td>
              <td className="p-3 text-sm">Grade 10</td>
              <td className="p-3 text-sm">A</td>
              <td className="p-3 text-sm">3.8</td>
              <td className="p-3">
                <Button size="sm" variant="outline" onClick={() => console.log('View')}>
                  View
                </Button>
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3 text-sm">Jane Smith</td>
              <td className="p-3 text-sm">Grade 10</td>
              <td className="p-3 text-sm">A-</td>
              <td className="p-3 text-sm">3.5</td>
              <td className="p-3">
                <Button size="sm" variant="outline" onClick={() => console.log('View')}>
                  View
                </Button>
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3 text-sm">Michael Brown</td>
              <td className="p-3 text-sm">Grade 9</td>
              <td className="p-3 text-sm">B+</td>
              <td className="p-3 text-sm">3.2</td>
              <td className="p-3">
                <Button size="sm" variant="outline" onClick={() => console.log('View')}>
                  View
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}