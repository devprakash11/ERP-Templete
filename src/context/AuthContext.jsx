import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // Mock authentication
  const users = [
    {
      email: 'admin@school.com',
      password: 'admin123',
      role: 'super_admin'
    }
  ]

  const login = async (email, password) => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    )
    if (user) {
      setIsAuthenticated(true)
      setUser(user)
    } else {
      alert('Invalid credentials')
    }
  }

  const logout = () => {
    setIsAuthenticated(false)
    setUser(null)
  }

  if (isLoading) {
    setIsLoading(false)
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, logout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthContext