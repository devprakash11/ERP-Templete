import React from 'react'
import { Card, StatCard, AttendanceChart, FeeChart, RecentActivity, QuickActions } from '../components/dashboard'

const Dashboard = () => {
  return (
    <div className="p-6">
      <Card>
        <StatCard title="Students" count="1,247" trend="+12.5%" />
        <StatCard title="Teachers" count="89" trend="+3.2%" />
        <StatCard title="Attendance" count="94.5%" trend="+2.1%" />
        <StatCard title="Pending Fees" count="$45,230" trend="+8.7%" />
      </Card>

      <Card>
        <AttendanceChart />
        <FeeChart />
      </Card>

      <Card>
        <RecentActivity />
        <QuickActions />
      </Card>
    </div>
  )
}

export default Dashboard