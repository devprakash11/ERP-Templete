import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Select, Input } from '../../common'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export const AttendanceDashboard = () => {
  const [selectedClass, setSelectedClass] = useState('')
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  const navigate = useNavigate()

  const classes = ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12']

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value)
  }

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value)
  }

  const attendanceData = [
    { name: 'Present', count: 45, color: '#10b981' },
    { name: 'Absent', count: 5, color: '#ef4444' },
    { name: 'Late', count: 2, color: '#f59e0b' },
  ]

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Select Class</label>
        <select
          value={selectedClass}
          onChange={handleClassChange}
          className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">All Classes</option>
          {classes.map((cls) => (
            <option key={cls} value={cls}>
              {cls}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Select Date</label>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold text-text-primary mb-3">Attendance Overview</h3>
        <div className="grid grid-cols-3 gap-3">
          {attendanceData.map((item) => (
            <div key={item.name} className="bg-primary/5 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-primary">{item.count}</p>
              <p className="text-sm text-text-secondary">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-text-primary mb-3">Daily Attendance Chart</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={[{ name: 'Mon', present: 45, absent: 5, late: 2 }]} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="present" name="Present" fill="#10b981" />
            <Bar dataKey="absent" name="Absent" fill="#ef4444" />
            <Bar dataKey="late" name="Late" fill="#f59e0b" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}