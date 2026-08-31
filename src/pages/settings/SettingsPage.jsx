import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../../components/common/Card'
import { Button } from '../../components/common/Button'

export const SettingsPage = () => {
  const navigate = useNavigate()

  const settingsSections = [
    { title: 'School Profile', path: '/settings/school-profile', description: 'Edit school information and details' },
    { title: 'Academic Year', path: '/settings/academic-year', description: 'Set current and future academic years' },
    { title: 'Classes', path: '/settings/classes', description: 'Manage class levels and structures' },
    { title: 'Sections', path: '/settings/sections', description: 'Manage class sections and divisions' },
    { title: 'Fee Settings', path: '/settings/fee-settings', description: 'Configure fee structures and plans' },
    { title: 'Notification Settings', path: '/settings/notification-settings', description: 'Manage notification preferences and channels' },
    { title: 'Appearance', path: '/settings/appearance', description: 'Customize theme and visual settings' },
    { title: 'Security', path: '/settings/security', description: 'Manage security settings and access control' },
    { title: 'Backup', path: '/settings/backup', description: 'Database backup and recovery options' },
  ]

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-text-primary">Settings</h2>
        <p className="mt-1 text-sm text-gray-500">Manage your school ERP configuration and preferences.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {settingsSections.map((section) => (
          <Card
            key={section.title}
            className="cursor-pointer p-4 transition-colors hover:bg-primary/5"
            onClick={() => navigate(section.path)}
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.5l9.5 4.75v9.5L12 21.5l-9.5-4.75v-9.5L12 2.5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 7.25L12 12l9.5-4.75M12 12v9.5" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-text-primary">{section.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{section.description}</p>
              </div>
              <svg className="h-4 w-4 shrink-0 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <Button variant="outline" onClick={() => navigate('/dashboard')}>
          Back to Dashboard
        </Button>
      </div>
    </div>
  )
}

export default SettingsPage
