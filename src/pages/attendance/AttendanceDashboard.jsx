import React from 'react'
import { useState } from 'react'
import { Select } from '../../components/common/Select'
import { Input } from '../../components/common/Input'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export const AttendanceDashboard = () => {
  const [selectedClass, setSelectedClass] = useState('')
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])

  const classes = ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12']
  const attendanceData = [
    { name: 'Present', count: 45 },
    { name: 'Absent', count: 5 },
    { name: 'Late', count: 2 },
  ]

  return (
    <div className="w-full rounded-lg bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <Select label="Select Class" value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
          <option value="">All Classes</option>
          {classes.map((cls) => <option key={cls} value={cls}>{cls}</option>)}
        </Select>
        <Input label="Select Date" type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
      </div>

      <div className="mb-6">
        <h3 className="mb-3 text-xl font-bold text-text-primary">Attendance Overview</h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {attendanceData.map((item) => (
            <div key={item.name} className="rounded-lg bg-primary/5 p-4 text-center">
              <p className="text-2xl font-bold text-primary">{item.count}</p>
              <p className="text-sm text-text-secondary">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-xl font-bold text-text-primary">Daily Attendance Chart</h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
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
    </div>
  )
}

export default AttendanceDashboard
