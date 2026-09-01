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
    <div className="w-full rounded-xl border border-border bg-surface p-4 shadow-sm sm:p-6">
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-text-primary">Select Class</label>
          <Select value={selectedClass} onChange={setSelectedClass}>
            <option value="">All Classes</option>
            {classes.map((cls) => <option key={cls} value={cls}>{cls}</option>)}
          </Select>
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-text-primary">Select Date</label>
          <Input type="date" value={selectedDate} onChange={(event) => setSelectedDate(event.target.value)} />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="mb-3 text-xl font-bold text-text-primary">Attendance Overview</h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {attendanceData.map((item) => (
            <div key={item.name} className="rounded-xl border border-border bg-primary/5 p-4 text-center">
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
              <XAxis dataKey="name" tick={{ fill: '#5F6D66' }} axisLine={{ stroke: '#D5DED8' }} tickLine={false} />
              <YAxis tick={{ fill: '#5F6D66' }} axisLine={{ stroke: '#D5DED8' }} tickLine={false} />
              <Tooltip contentStyle={{ border: '1px solid #D5DED8', borderRadius: '12px', background: '#FFFFFF' }} />
              <Legend />
              <Bar dataKey="present" name="Present" fill="#15803D" radius={[6, 6, 0, 0]} />
              <Bar dataKey="absent" name="Absent" fill="#B83A3A" radius={[6, 6, 0, 0]} />
              <Bar dataKey="late" name="Late" fill="#C77700" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default AttendanceDashboard
