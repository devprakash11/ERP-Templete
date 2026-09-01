import React from 'react'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { Button } from '../../components/common/Button'

export const GatePassDashboard = () => {
  const [isScanning, setIsScanning] = useState(false)
  const [entries] = useState([])
  const { isAuthenticated } = useAuth()


  return (
    <div className="w-full rounded-lg bg-white p-4 shadow-sm sm:p-6">
      <h2 className="text-2xl font-bold text-text-primary">Gate Pass Management</h2>

      {!isAuthenticated && (
        <div className="mt-4 rounded-md border border-primary/20 bg-primary/10 p-4">
          <p className="text-sm text-primary">Please login to access gate pass features</p>
        </div>
      )}

      <div className="mt-6">
        <h3 className="mb-3 text-lg font-medium text-text-secondary">Student Registration</h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
          <select className="w-full rounded-md border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
            <option>Select Student</option>
            <option value="1">John Doe - Grade 10</option>
            <option value="2">Jane Smith - Grade 10</option>
            <option value="3">Michael Brown - Grade 9</option>
          </select>
          <Button onClick={() => console.log('Add New Student')}>
            Add Student
          </Button>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="mb-3 text-lg font-medium text-text-secondary">Gate Scanner</h3>
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="mb-2 text-sm text-gray-500">Scan QR code to record entry/exit</p>
          <Button className="w-full sm:w-auto" onClick={() => setIsScanning(true)}>
            {isScanning ? 'Scanner Open' : 'Open Scanner'}
          </Button>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="mb-3 text-lg font-medium text-text-secondary">Entry Log</h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[650px] bg-white">
            <thead>
              <tr className="border-b border-border">
                <th className="p-3 text-left text-xs font-medium text-text-secondary">Student</th>
                <th className="p-3 text-left text-xs font-medium text-text-secondary">Entry Time</th>
                <th className="p-3 text-left text-xs font-medium text-text-secondary">Exit Time</th>
                <th className="p-3 text-left text-xs font-medium text-text-secondary">Status</th>
              </tr>
            </thead>
            <tbody>
              {entries.length > 0 ? entries.map((entry) => (
                <tr key={entry.id} className="border-b border-border last:border-b-0">
                  <td className="p-3 text-sm text-text-primary">{entry.studentName}</td>
                  <td className="p-3 text-sm text-text-secondary">{entry.entryTime}</td>
                  <td className="p-3 text-sm text-text-secondary">—</td>
                  <td className="p-3 text-sm font-medium text-primary">{entry.status}</td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-sm text-gray-500">No gate pass entries yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default GatePassDashboard
