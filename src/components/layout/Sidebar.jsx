import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  BarChart3, BookOpen, Briefcase, CalendarDays, ChevronRight, ClipboardCheck,
  DollarSign, DoorOpen, FileText, Home, Layers3, Library, LogOut, Menu,
  Package, Settings, ShieldCheck, Truck, User, Users, X,
} from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

const navItems = [
  { path: '/dashboard', icon: Home, label: 'Dashboard' },
  { path: '/students', icon: Users, label: 'Students' },
  { path: '/teachers', icon: User, label: 'Teachers' },
  { path: '/staff', icon: Briefcase, label: 'Staff' },
  { path: '/classes', icon: Layers3, label: 'Classes' },
  { path: '/sections', icon: Layers3, label: 'Sections' },
  { path: '/subjects', icon: BookOpen, label: 'Subjects' },
  { path: '/timetable', icon: CalendarDays, label: 'Timetable' },
  { path: '/marks', icon: ClipboardCheck, label: 'Marks Entry' },
  { path: '/report-cards', icon: FileText, label: 'Report Cards' },
  { path: '/attendance', icon: ClipboardCheck, label: 'Attendance' },
  { path: '/fees', icon: DollarSign, label: 'Fees' },
  { path: '/gatepass', icon: DoorOpen, label: 'Gate Pass' },
  { path: '/library', icon: Library, label: 'Library' },
  { path: '/transport', icon: Truck, label: 'Transport' },
  { path: '/inventory', icon: Package, label: 'Inventory' },
  { path: '/payroll', icon: Users, label: 'Payroll' },
  { path: '/reports', icon: BarChart3, label: 'Reports' },
  { path: '/users', icon: ShieldCheck, label: 'Users' },
  { path: '/settings', icon: Settings, label: 'Settings' },
]

const Sidebar = ({ isOpen, onToggle }) => (
  <>
    <button
      className={`fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
      onClick={onToggle}
      aria-label="Close navigation overlay"
    />

    <aside
      className={`erp-sidebar fixed inset-y-0 left-0 z-50 flex w-[min(86vw,256px)] flex-col text-white transition-transform duration-300 md:w-[256px] md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      aria-label="Primary navigation"
    >
      <div className="erp-sidebar-brand flex h-[68px] shrink-0 items-center justify-between px-4 md:px-5">
        <NavLink
          to="/dashboard"
          onClick={() => window.innerWidth < 768 && onToggle()}
          className="flex min-w-0 items-center gap-3"
        >
          <span className="erp-sidebar-icon flex items-center justify-center rounded-xl text-white">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <span className="truncate text-lg font-bold tracking-tight text-white">
            School ERP
          </span>
        </NavLink>

        <button
          onClick={onToggle}
          className="rounded-lg p-2 text-white/70 transition hover:bg-white/10 hover:text-white md:hidden"
          aria-label="Close sidebar"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="ERP modules">
        <div className="space-y-1">
          {navItems.map(({ path, icon: Icon, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => window.innerWidth < 768 && onToggle()}
              className={({ isActive }) => `group erp-nav-item flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${isActive ? 'erp-nav-item-active' : ''}`}
            >
              <Icon className="h-5 w-5 shrink-0" />
              <span className="min-w-0 flex-1 truncate">{label}</span>
              <ChevronRight className="h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-60" />
            </NavLink>
          ))}
        </div>
      </nav>
    </aside>
  </>
)

const Header = ({ onToggle }) => {
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <header className="erp-header fixed inset-x-0 top-0 z-30 h-[68px] md:left-[256px]">
      <div className="flex h-full items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <button
            onClick={onToggle}
            className="shrink-0 rounded-lg p-2 text-text-secondary transition hover:bg-bg hover:text-text-primary md:hidden"
            aria-label="Open navigation"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-text-primary">School ERP</p>
            <p className="hidden truncate text-xs text-text-secondary sm:block">School management system</p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="erp-header-user hidden max-w-[260px] items-center gap-2 rounded-full px-3 py-1.5 sm:flex">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
              {(user?.email?.[0] || 'A').toUpperCase()}
            </span>
            <span className="max-w-[190px] truncate text-sm font-medium text-text-primary">
              {user?.email || 'Admin'}
            </span>
          </div>

          <button
            onClick={handleLogout}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-text-secondary transition hover:bg-danger-light hover:text-danger"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </header>
  )
}

const MobileNav = ({ isOpen, onToggle }) => (
  <div className={`fixed inset-0 z-40 md:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
    <button className="absolute inset-0 bg-black/40" onClick={onToggle} aria-label="Close mobile navigation" />
  </div>
)

const PageHeader = ({ title, subtitle }) => (
  <div className="mb-5 min-w-0">
    <h1 className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">{title}</h1>
    {subtitle && <p className="mt-1 text-sm text-text-secondary">{subtitle}</p>}
  </div>
)

const MainLayout = ({ children, title, subtitle, showSidebar = true, showHeader = true }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

  return (
    <div className="min-h-screen overflow-x-hidden bg-bg">
      {showHeader && <Header onToggle={() => setIsSidebarOpen((open) => !open)} />}
      {showSidebar && <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen((open) => !open)} />}

      <main className={`min-h-screen pt-[68px] ${showSidebar ? 'md:pl-[256px]' : ''}`}>
        <div className="mx-auto w-full max-w-[1600px] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
          {title && <PageHeader title={title} subtitle={subtitle} />}
          {children}
        </div>
      </main>
    </div>
  )
}

export { Sidebar, Header, MainLayout, MobileNav, PageHeader }
export default Sidebar
