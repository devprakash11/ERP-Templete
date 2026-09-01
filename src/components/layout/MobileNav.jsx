import React from 'react'

const MobileNav = ({ isOpen, onToggle }) => {
  const navItems = [
    { path: '/dashboard', icon: 'Home', label: 'Dashboard' },
    { path: '/students', icon: 'Users', label: 'Students' },
    { path: '/fees', icon: 'DollarSign', label: 'Fees' },
    { path: '/attendance', icon: 'Clipboard', label: 'Attendance' },
    { path: '/gatepass', icon: 'Gate', label: 'Gate Pass' },
    { path: '/library', icon: 'Book', label: 'Library' },
    { path: '/transport', icon: 'Truck', label: 'Transport' },
    { path: '/payroll', icon: 'Users', label: 'Payroll' },
    { path: '/settings', icon: 'Settings', label: 'Settings' },
  ]

  return (
    <nav
      className={`fixed inset-0 bg-black/70 top-0 left-0 z-40 h-screen w-full transform translateX-full md:translateX-0 transition-transform duration-300 ${isOpen ? 'translateX-0' : ''}`}
    >
      <div className="h-16 bg-navy flex items-center justify-center px-4">
        <h1 className="text-lg font-semibold text-white">School ERP</h1>
        <button
          onClick={onToggle}
          className="absolute right-2 text-white"
          aria-label="Close navigation"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="p-6 space-y-4">
        {navItems.map((item) => (
          <button
            key={item.path}
            className="w-full flex items-center rounded-md px-3 py-2 text-base font-medium hover:text-primary transition-colors"
            aria-label={item.label}
          >
            <span className="w-5 h-5 flex-shrink-0">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}

export default MobileNav