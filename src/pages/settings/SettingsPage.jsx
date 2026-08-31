import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Button } from '../../common'

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
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-text-primary">Settings</h2>

      <div className="grid grid-cols-1 gap-4 mb-6">
        {settingsSections.map((section) => (
          <Card
            key={section.title}
            className="p-4 hover:bg-primary/5 transition-colors cursor-pointer"
            onClick={() => navigate(section.path)}
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-text-primary">{section.title}</h3>
                <p className="text-sm text-gray-500">{section.description}</p>
              </div>
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
                <path fill="currentColor" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}