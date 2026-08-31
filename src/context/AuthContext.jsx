import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)
const AUTH_STORAGE_KEY = 'school_erp_auth'

const demoUser = {
  email: 'admin@school.com',
  password: 'admin123',
  role: 'super_admin',
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem(AUTH_STORAGE_KEY)
      setUser(savedUser ? JSON.parse(savedUser) : null)
    } catch {
      localStorage.removeItem(AUTH_STORAGE_KEY)
      setUser(null)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const login = async (email, password) => {
    if (email === demoUser.email && password === demoUser.password) {
      const authenticatedUser = { email: demoUser.email, role: demoUser.role }
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authenticatedUser))
      setUser(authenticatedUser)
      return { success: true }
    }

    return { success: false, message: 'Invalid email or password' }
  }

  const logout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY)
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: Boolean(user),
        user,
        login,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthContext
