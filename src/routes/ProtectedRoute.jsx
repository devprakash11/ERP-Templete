import React from 'react'
import { useState } from 'react'
import { Sidebar, Header, MainLayout, MobileNav, PageHeader } from '../components/layout'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useContext(AuthContext)

  if (!isAuthenticated) {
    return <LoginPage />
  }

  return (
    <MainLayout
      title={children.props?.title || 'School ERP'}
      subtitle={children.props?.subtitle || ''}
    >
      {children}
    </MainLayout>
  )
}

const LoginPage = () => {
  const { login } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">School ERP Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default ProtectedRoute