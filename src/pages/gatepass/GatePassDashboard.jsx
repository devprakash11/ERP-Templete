import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { Button } from '../../common'
import { qrcode } from 'qrcode'

export const GatePassDashboard = () => {
  const [isScanning, setIsScanning] = useState(false)
  const [entries, setEntries] = useState([])
  const navigate = useNavigate()

  const { isAuthenticated, user } = useAuth()

  const generateQr = async (studentName, studentId) => {
    const qrData = `STUDENT:${studentId}:${studentName}`
    try {
      const qrCode = await qrcode.toDataURL(qrData)
      alert('QR Generated Successfully')
      return qrCode
    } catch (error) {
      console.error('QR generation error:', error)
      return null
    }
  }

  const handleEntry = (student) => {
    const newEntry = {
      id: Date.now(),
      studentId: student.id,
      studentName: student.name,
      entryTime: new Date().toLocaleString(),
      status: 'Entry'
    }
    setEntries([...entries, newEntry])
    alert('Entry logged successfully')
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-text-primary">Gate Pass Management</h2>

      {!isAuthenticated && (
        <div className="mb-4 p-4 bg-primary/10 border border-primary/20 rounded-md mb-4">
          <p className="text-sm text-primary">Please login to access gate pass features</p>
        </div>
      )}

      <div className="mb-4">
        <h3 className="text-lg font-medium text-text-secondary mb-3">Student Registration</h3>
        <div className="grid grid-cols-1 gap-3">
          <select
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option>Select Student</option>
            <option value="1">John Doe - Grade 10</option>
            <option value="2">Jane Smith - Grade 10</option>
            <option value="3">Michael Brown - Grade 9</option>
          </select>
          <button
            onClick={() => console.log('Add New Student')}
            className="px-4 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Add Student
          </button>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium text-text-secondary mb-3">Gate Scanner</h3>
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-500 mb-2">Scan QR code to record entry/exit</p>
          <button
            onClick={() => setIsScanning(true)}
            className="w-full px-4 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Open Scanner
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-text-secondary mb-3">Entry Log</h3>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="p-3 text-left text-xs font-medium text-text-secondary">Student</th>
                <th className="p-3 text-left text-xs font-medium text-text-secondary">Entry Time</th>
                <th className="p-3 text-left text-xs font-medium text-text-secondary">Exit Time</th>
                <th className="p-3 text-left text-xs font-medium text-text-secondary">Status</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry.id} className="border-b border-border">
                  <td className="p-3 text-sm">{entry.studentName}</td>
                  <td className="p-3 text-sm">{entry.entryTime}</td>
                  <td className="p-3 text-sm"></td>
                  <td className="p-3 text-sm bg-primary/10 text-primary">Entry</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}