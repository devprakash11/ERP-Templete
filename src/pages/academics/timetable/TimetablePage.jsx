import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../common'

export const TimetablePage = () => {
  const [periods, setPeriods] = useState([])
  const navigate = useNavigate()

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-text-primary">Timetable Management</h2>

      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Day</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Period 1</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Period 2</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Period 3</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Period 4</th>
              <th className="p-3 text-left text-xs font-medium text-text-secondary">Period 5</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="p-3 text-sm">Monday</td>
              <td className="p-3 text-sm">Math</td>
              <td className="p-3 text-sm">Physics</td>
              <td className="p-3 text-sm">Chemistry</td>
              <td className="p-3 text-sm">English</td>
              <td className="p-3 text-sm">Physical Ed</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3 text-sm">Tuesday</td>
              <td className="p-3 text-sm">English</td>
              <td className="p-3 text-sm">Math</td>
              <td className="p-3 text-sm">Physics</td>
              <td className="p-3 text-sm">Chemistry</td>
              <td className="p-3 text-sm">Biology</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3 text-sm">Wednesday</td>
              <td className="p-3 text-sm">Chemistry</td>
              <td className="p-3 text-sm">English</td>
              <td className="p-3 text-sm">Math</td>
              <td className="p-3 text-sm">Physics</td>
              <td className="p-3 text-sm">Computer Sci</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3 text-sm">Thursday</td>
              <td className="p-3 text-sm">Physical Ed</td>
              <td className="p-3 text-sm">Biology</td>
              <td className="p-3 text-sm">English</td>
              <td className="p-3 text-sm">Math</td>
              <td className="p-3 text-sm">Physics</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3 text-sm">Friday</td>
              <td className="p-3 text-sm">Math</td>
              <td className="p-3 text-sm">Chemistry</td>
              <td className="p-3 text-sm">Biology</td>
              <td className="p-3 text-sm">English</td>
              <td className="p-3 text-sm">Physical Ed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}