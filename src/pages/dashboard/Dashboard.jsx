import React from 'react'
import Card from '../../components/common/Card'
import { StatCard } from '../../components/dashboard/StatCard'

const Dashboard = () => {
  const stats = [
    { title: 'Students', count: '1,247', trend: '+12.5%' },
    { title: 'Teachers', count: '89', trend: '+3.2%' },
    { title: 'Attendance', count: '94.5%', trend: '+2.1%' },
    { title: 'Pending Fees', count: '₹45,230', trend: '+8.7%' },
  ]

  const recentActivity = [
    { title: 'New student admission', detail: 'John Doe was added to Grade 10', time: '10 min ago' },
    { title: 'Fee payment received', detail: '₹5,500 payment recorded', time: '35 min ago' },
    { title: 'Attendance updated', detail: 'Grade 9 attendance was submitted', time: '1 hr ago' },
  ]

  return (
    <div className="erp-dashboard w-full space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-primary sm:text-3xl">Dashboard</h1>
        <p className="mt-1 text-sm text-text-secondary">Overview of your school management system.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => <StatCard key={stat.title} {...stat} />)}
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Card>
          <h2 className="mb-4 text-lg font-semibold text-text-primary">Attendance Overview</h2>
          <div className="space-y-4">
            <div>
              <div className="mb-1 flex justify-between text-sm text-text-secondary"><span>Present</span><span>94.5%</span></div>
              <div className="erp-progress-track"><div className="erp-progress-bar erp-progress-success" style={{ width: '94.5%' }} /></div>
            </div>
            <div>
              <div className="mb-1 flex justify-between text-sm text-text-secondary"><span>Absent</span><span>5.5%</span></div>
              <div className="erp-progress-track"><div className="erp-progress-bar erp-progress-danger" style={{ width: '5.5%' }} /></div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-text-primary">Fee Collection</h2>
            <span className="text-sm font-semibold text-primary">₹45,230</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-border bg-primary/5 p-4">
              <p className="text-sm text-text-secondary">Collected</p>
              <p className="mt-1 text-xl font-bold text-primary">₹31,730</p>
            </div>
            <div className="rounded-xl border border-border bg-yellow-50 p-4">
              <p className="text-sm text-text-secondary">Pending</p>
              <p className="mt-1 text-xl font-bold text-yellow-600">₹13,500</p>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <div className="mb-4 flex items-center justify-between"><h2 className="text-lg font-semibold text-text-primary">Recent Activity</h2></div>
        <div className="divide-y divide-border">
          {recentActivity.map((activity) => (
            <div key={activity.title} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium text-text-primary">{activity.title}</p>
                <p className="text-sm text-text-secondary">{activity.detail}</p>
              </div>
              <span className="text-xs text-text-muted">{activity.time}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

export default Dashboard
