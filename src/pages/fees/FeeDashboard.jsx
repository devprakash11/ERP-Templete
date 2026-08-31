import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, StatCard } from '../../components/dashboard'
import { Button } from '../../common'

export const FeeDashboard = () => {
  const [feeStructure, setFeeStructure] = useState([])
  const navigate = useNavigate()

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
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card>
          <StatCard title="Total Collected" count="$42,700" trend="+12.5%" />
        </Card>
        <Card>
          <StatCard title="Pending Fees" count="$13,500" trend="+8.7%" />
        </Card>
      </div>

      <Card>
        <h3 className="text-xl font-bold text-text-primary mb-4">Pending Fees</h3>
        <div className="space-y-3">
          {pendingFees.map((fee) => (
            <div
              key={fee.student}
              className={`p-3 rounded-md ${fee.status === 'Overdue' ? 'bg-red-100 text-red-600' : 'bg-yellow-50'} border ${fee.status === 'Overdue' ? 'border-red-200' : 'border-yellow-200'}`}
            >
              <div className="flex items-between justify-between">
                <span className="font-medium">{fee.student}</span>
                <span className="text-sm text-gray-500">{fee.dueDate}</span>
              </div>
              <p className="font-bold text-lg">{fee.amount}</p>
              <span className={`text-sm font-medium ${fee.status === 'Overdue' ? 'text-red-600' : 'text-yellow-600'}`}>
                {fee.status}
              </span>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="text-xl font-bold text-text-primary mb-4">Recently Collected</h3>
        <div className="space-y-3">
          {collectedFees.map((fee) => (
            <div key={fee.student} className="p-3 rounded-md bg-primary/5 border border-primary/10">
              <div className="flex items-between justify-between">
                <span className="font-medium">{fee.student}</span>
                <span className="text-sm text-gray-500">{fee.date}</span>
              </div>
              <p className="font-bold text-primary">{fee.amount}</p>
              <p className="text-xs text-gray-500">Receipt: {fee.receipt}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}