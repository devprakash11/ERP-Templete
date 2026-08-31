import React from 'react'
import Card from '../../components/common/Card'
import { StatCard } from '../../components/dashboard/StatCard'
import { Button } from '../../components/common/Button'

export const FeeDashboard = () => {
  const pendingFees = [
    { student: 'John Doe', amount: 5200, dueDate: '2024-01-15', status: 'Pending' },
    { student: 'Jane Smith', amount: 4800, dueDate: '2024-01-10', status: 'Overdue' },
    { student: 'Michael Brown', amount: 3500, dueDate: '2024-01-20', status: 'Pending' },
  ]

  const collectedFees = [
    { student: 'Sarah Johnson', amount: 5500, date: '2024-01-10', receipt: 'RCP-001' },
    { student: 'David Wilson', amount: 4200, date: '2024-01-12', receipt: 'RCP-002' },
  ]

  return (
    <div className="w-full rounded-lg bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card>
          <StatCard title="Total Collected" count="$42,700" trend="+12.5%" />
        </Card>
        <Card>
          <StatCard title="Pending Fees" count="$13,500" trend="+8.7%" />
        </Card>
      </div>

      <Card className="mb-4">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-xl font-bold text-text-primary">Pending Fees</h3>
          <Button variant="outline" onClick={() => console.log('View pending fees')}>View All</Button>
        </div>
        <div className="space-y-3">
          {pendingFees.map((fee) => (
            <div key={fee.student} className={`rounded-md border p-3 ${fee.status === 'Overdue' ? 'border-red-200 bg-red-100 text-red-600' : 'border-yellow-200 bg-yellow-50'}`}>
              <div className="flex items-start justify-between gap-3">
                <span className="font-medium">{fee.student}</span>
                <span className="text-sm text-gray-500">{fee.dueDate}</span>
              </div>
              <p className="text-lg font-bold">₹{fee.amount.toLocaleString('en-IN')}</p>
              <span className={`text-sm font-medium ${fee.status === 'Overdue' ? 'text-red-600' : 'text-yellow-600'}`}>{fee.status}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="mb-4 text-xl font-bold text-text-primary">Recently Collected</h3>
        <div className="space-y-3">
          {collectedFees.map((fee) => (
            <div key={fee.student} className="rounded-md border border-primary/10 bg-primary/5 p-3">
              <div className="flex items-start justify-between gap-3">
                <span className="font-medium">{fee.student}</span>
                <span className="text-sm text-gray-500">{fee.date}</span>
              </div>
              <p className="font-bold text-primary">₹{fee.amount.toLocaleString('en-IN')}</p>
              <p className="text-xs text-gray-500">Receipt: {fee.receipt}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

export default FeeDashboard
