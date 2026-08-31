import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export const FeeChart = () => {
  const data = [
    { month: 'Jan', collected: 45000, pending: 8000 },
    { month: 'Feb', collected: 52000, pending: 6500 },
    { month: 'Mar', collected: 48000, pending: 9200 },
    { month: 'Apr', collected: 55000, pending: 5800 },
    { month: 'May', collected: 60000, pending: 4200 },
    { month: 'Jun', collected: 58000, pending: 6100 },
  ]

  const statusColor = (label) => {
    if (label === 'Collected') return '#10b981'
    if (label === 'Pending') return '#f59e0b'
    return '#6b7280'
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="collected" name="Collected" fill="#10b981" />
        <Bar dataKey="pending" name="Pending" fill="#f59e0b" />
        <Legend />
        <Legend verticalAlign="bottom" height={36} />
      </BarChart>
    </ResponsiveContainer>
  </ResponsiveContainer>