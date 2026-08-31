import React from 'react'

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
        <header
          className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-border z-50 backdrop-blur-sm shadow-sm"
        >
          <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:hidden p-1 rounded hover:bg-primary/10 transition-colors"
              aria-label="Open sidebar"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M3 12l2-2m0 0l7-7 7 7M7 10l9 9 9-9M7 14l10 10L7 24" />
              </svg>
            </button>

            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold">School ERP</h1>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => console.log('Logout clicked')}
                className="hidden md:block px-4 py-1 rounded text-sm hover:bg-primary/10 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </header>
      )}

      {showSidebar && (
        <aside
          className={`fixed left-0 top-0 h-full w-64 bg-navy text-white transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
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
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-1 rounded hover:bg-primary/10 transition-colors absolute right-2"
                aria-label="Close sidebar"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <nav className="px-2 pt-2 space-y-1">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="w-full flex items-center rounded-md px-3 py-2 text-sm font-medium color-text-secondary hover:bg-primary/10 transition-colors hover:text-primary"
              aria-label="Toggle sidebar"
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                <path fill="currentColor" d="M10 14l2-2m0 0l2-2m-2-2l2 2" />
              </svg>
              <span>Menu</span>
            </button>
            {/* Quick nav items would go here */}
          </nav>
        </aside>
      )}

      <main className="ml-64 flex-1 p-6 transition-all">
        {showHeader && isMobile && (
          <nav
            className="fixed inset-0 bg-black/70 top-0 left-0 z-40 h-screen w-full transform translateX-full md:translateX-0 transition-transform duration-300 {isMobileNavOpen ? 'translateX-0' : ''}"
          >
            <div className="h-16 bg-navy flex items-center justify-center px-4">
              <h1 className="text-lg font-semibold text-white">School ERP</h1>
              <button
                onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                className="absolute right-2 text-white"
                aria-label="Close navigation"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-4">
              {/* Mobile nav items */}
            </div>
          </nav>
        )}

        <div className="w-full">
          {title && (
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-text-primary mb-1">{title}</h2>
              {subtitle && <p className="text-text-secondary">{subtitle}</p>}
            </div>
          )}
          {children}
        </div>
      </main>
    </div>
  )
}

export default MainLayout