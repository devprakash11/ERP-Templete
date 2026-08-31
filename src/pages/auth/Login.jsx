import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    login(email, password)
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-primary/5">
      <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-md">
        <h2 className="text-2xl font-bold text-primary mb-4 text-center">School ERP Login</h2>
        <form onSubmit={onSubmit} className="space-y-4">
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