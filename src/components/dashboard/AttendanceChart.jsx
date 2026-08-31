import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export const AttendanceChart = () => {
  const data = [
    { name: 'Mon', present: 45, absent: 5 },
    { name: 'Tue', present: 52, absent: 8 },
    { name: 'Wed', present: 48, absent: 12 },
    { name: 'Thu', present: 55, absent: 7 },
    { name: 'Fri', present: 60, absent: 10 },
    { name: 'Sat', present: 30, absent: 15 },
    { name: 'Sun', present: 20, absent: 20 },
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="present" name="Present" fill="#10b981" />
        <Bar dataKey="absent" name="Absent" fill="#ef4444" />
      </BarChart>
    </ResponsiveContainer>
  )
}