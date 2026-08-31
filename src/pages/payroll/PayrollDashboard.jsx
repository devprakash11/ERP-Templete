import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Button} from '../../common'

export const PayrollDashboard = () => {
  const [employees, setEmployees] = useState([])
  const [salaryStructure, setSalaryStructure] = useState([])
  const navigate = useNavigate()

  const payrollHistory = [
    { employee: 'John Doe', period: 'January 2024', amount: 50000, status: 'Paid' },
    { employee: 'Jane Smith', period: 'January 2024', amount: 45000, status: 'Paid' },
    { employee: 'Michael Brown', period: 'January 2024', amount: 35000, status: 'Processing' },
  ]

  const salaryStructureData = [
    { position: 'Teacher', basic: 35000, hra: 10000, allowance: 5000, total: 50000 },
    { position: 'Administrator', basic: 45000, hra: 15000, allowance: 8000, total: 68000 },
  ]

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-text-primary">Payroll Management</h2>

      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <h3 className="text-lg font-medium text-text-secondary">Employees</h3>
          <p className="text-sm text-gray-500">Manage employee records</p>
          <Button variant="outline">Add Employee</Button>
        </div>
        <div>
          <h3 className="text-lg font-medium text-text-secondary">Salary Structure</h3>
          <p className="text-sm text-gray-500">Define salary components</p>
          <Button variant="outline">Configure Structure</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-6">
        <div>
          <Card>
            <h3 className="text-xl font-bold text-text-primary mb-3">Payroll History</h3>
            <div className="space-y-3">
              {payrollHistory.map((payroll) => (
                <div key={payroll.employee} className="p-3 rounded-md bg-primary/5 border border-primary/10">
                  <div className="flex items-between justify-between">
                    <span className="font-medium">{payroll.employee}</span>
                    <span className="text-sm text-gray-500">{payroll.period}</span>
                  </div>
                  <p className="font-bold text-primary">{payroll.amount}</p>
                  <span className="text-sm font-medium {payroll.status === 'Paid' ? 'text-green-600' : 'text-yellow-600'}">
                    {payroll.status}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
        <div>
          <Card>
            <h3 className="text-xl font-bold text-text-primary mb-3">Salary Structure</h3>
            <div className="space-y-3">
              {salaryStructureData.map((structure) => (
                <div key={structure.position} className="p-3 rounded-md bg-primary/5 border border-primary/10">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div><span className="font-medium">Basic</span>: {structure.basic}</div>
                    <div><span className="font-medium">HRA</span>: {structure.hra}</div>
                    <div><span className="font-medium">Allowance</span>: {structure.allowance}</div>
                    <div><span className="font-medium text-primary">Total</span>: {structure.total}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}