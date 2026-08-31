import React from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { LogOut, Sun, Moon, Shield, Users } from 'lucide-react'

const Sidebar = ({ isOpen, onToggle, userRole }) => {
  const navItems = [
    { path: '/dashboard', icon: 'Home', label: 'Dashboard' },
    { path: '/students', icon: 'Users', label: 'Students' },
    { path: '/teachers', icon: 'User', label: 'Teachers' },
    { path: '/staff', icon: 'Briefcase', label: 'Staff' },
    { path: '/classes', icon: 'Layout', label: 'Classes' },
    { path: '/sections', icon: 'Layers', label: 'Sections' },
    { path: '/subjects', icon: 'BookOpen', label: 'Subjects' },
    { path: '/timetable', icon: 'Calendar', label: 'Timetable' },
    { path: '/attendance', icon: 'Clipboard', label: 'Attendance' },
    { path: '/fees', icon: 'DollarSign', label: 'Fees' },
    { path: '/admissions', icon: 'UserPlus', label: 'Admissions' },
    { path: '/gatepass', icon: 'Gate', label: 'Gate Pass' },
    { path: '/library', icon: 'Book', label: 'Library' },
    { path: '/transport', icon: 'Truck', label: 'Transport' },
    { path: '/inventory', icon: 'Box', label: 'Inventory' },
    { path: '/payroll', icon: 'Users', label: 'Payroll' },
    { path: '/reports', icon: 'BarChart', label: 'Reports' },
    { path: '/settings', icon: 'Settings', label: 'Settings' },
  ]

  return (
    <aside
      className={`fixed left-0 top-0 h-full w-64 bg-navy text-white transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className="h-16 border-b border-border py-3">
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-lg font-semibold">School ERP</span>
          </div>
          <button
            onClick={onToggle}
            className="p-1 rounded hover:bg-primary/10 transition-colors"
            aria-label="Close sidebar"
          >
            <HiX className="w-4 h-4" />
          </button>
        </div>
      </div>

      <nav className="px-2 pt-2 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={onToggle}
            className={`w-full flex items-center rounded-md px-3 py-2 text-sm font-medium color-text-secondary hover:bg-primary/10 transition-colors hover:text-primary ${userRole === 'super_admin' ? '' : ''}`}
            aria-label={item.label}
          >
            <span className="w-5 h-5 flex-shrink-0">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  )
}

const Header = ({ onToggle, userRole, userName }) => {
  return (
    <header
      className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-border z-50 backdrop-blur-sm shadow-sm"
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6">
        <button
          onClick={onToggle}
          className="md:hidden p-1 rounded hover:bg-primary/10 transition-colors"
          aria-label="Open sidebar"
        >
          <HiMenu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold">School ERP</h1>
        </div>

        <div className="flex items-center gap-3">
          {userName && (
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface">
              <span className="text-sm font-medium">{userName}</span>
            </div>
          )}
          <button
            onClick={() => console.log('Logout clicked')}
            className="hidden md:block px-4 py-1 rounded text-sm hover:bg-primary/10 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}

const MobileNav = ({ isOpen, onToggle, userRole }) => {
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
          <HiX className="w-5 h5" />
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

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-text-primary mb-1">{title}</h2>
      {subtitle && (
        <p className="text-text-secondary">{subtitle}</p>
      )}
    </div>
  )
}

const MainLayout = ({
  children,
  title,
  subtitle,
  showSidebar = true,
  showHeader = true,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true)
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false)
  const [userRole, setUserRole] = React.useState('super_admin')
  const [userName, setUserName] = React.useState('Admin')

  return (
    <div className="min-h-screen">
      {showHeader && (
        <Header
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          userRole={userRole}
          userName={userName}
        />
      )}

      {showSidebar && <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} userRole={userRole} />}

      <main className="ml-64 flex-1 p-6 transition-all">
        {showHeader && isMobile && (
          <MobileNav
            isOpen={isMobileNavOpen}
            onToggle={() => setIsMobileNavOpen(!isMobileNavOpen)}
            userRole={userRole}
          />
        )}

        <div className="w-full">
          {title && <PageHeader title={title} subtitle={subtitle} />}
          {children}
        </div>
      </main>
    </div>
  )
}

export { Sidebar, Header, MainLayout, MobileNav, PageHeader }