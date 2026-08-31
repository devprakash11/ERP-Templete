import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../../components/common/Card'
import { Button } from '../../components/common/Button'

export const PayrollDashboard = () => {
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
    <div className="w-full rounded-lg bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-text-primary">Payroll Management</h2>
          <p className="mt-1 text-sm text-gray-500">Manage employees, salary structures, and payroll history.</p>
        </div>
        <Button variant="outline" onClick={() => navigate('/dashboard')}>
          Back to Dashboard
        </Button>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Card>
          <h3 className="text-lg font-medium text-text-secondary">Employees</h3>
          <p className="mt-1 text-sm text-gray-500">Manage employee records</p>
          <Button className="mt-3" variant="outline" onClick={() => navigate('/payroll/employees')}>
            Add Employee
          </Button>
        </Card>
        <Card>
          <h3 className="text-lg font-medium text-text-secondary">Salary Structure</h3>
          <p className="mt-1 text-sm text-gray-500">Define salary components</p>
          <Button className="mt-3" variant="outline" onClick={() => navigate('/payroll/salary-structure')}>
            Configure Structure
          </Button>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <h3 className="mb-3 text-xl font-bold text-text-primary">Payroll History</h3>
          <div className="space-y-3">
            {payrollHistory.map((payroll) => (
              <div key={payroll.employee} className="rounded-md border border-primary/10 bg-primary/5 p-3">
                <div className="flex items-start justify-between gap-3">
                  <span className="font-medium text-text-primary">{payroll.employee}</span>
                  <span className="text-sm text-gray-500">{payroll.period}</span>
                </div>
                <p className="mt-1 font-bold text-primary">₹{payroll.amount.toLocaleString('en-IN')}</p>
                <span className={`text-sm font-medium ${payroll.status === 'Paid' ? 'text-green-600' : 'text-yellow-600'}`}>
                  {payroll.status}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="mb-3 text-xl font-bold text-text-primary">Salary Structure</h3>
          <div className="space-y-3">
            {salaryStructureData.map((structure) => (
              <div key={structure.position} className="rounded-md border border-primary/10 bg-primary/5 p-3">
                <h4 className="mb-2 font-medium text-text-primary">{structure.position}</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div><span className="font-medium">Basic</span>: ₹{structure.basic.toLocaleString('en-IN')}</div>
                  <div><span className="font-medium">HRA</span>: ₹{structure.hra.toLocaleString('en-IN')}</div>
                  <div><span className="font-medium">Allowance</span>: ₹{structure.allowance.toLocaleString('en-IN')}</div>
                  <div><span className="font-medium text-primary">Total</span>: ₹{structure.total.toLocaleString('en-IN')}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default PayrollDashboard
