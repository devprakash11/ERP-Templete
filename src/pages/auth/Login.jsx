import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setIsSubmitting(true)
    const result = await login(email.trim(), password)
    if (result.success) navigate('/dashboard', { replace: true })
    else setError(result.message || 'Invalid email or password')
    setIsSubmitting(false)
  }

  return (
    <div className="erp-auth-page">
      <div className="erp-auth-card p-6 sm:p-8">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
            <span className="text-lg font-bold">S</span>
          </div>
          <h1 className="text-2xl font-bold text-text-primary">Welcome back</h1>
          <p className="mt-1 text-sm text-text-secondary">Sign in to your School ERP account</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-text-primary">Email</label>
            <input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="admin@school.com" autoComplete="email" required className="erp-input" />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-semibold text-text-primary">Password</label>
            <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your password" autoComplete="current-password" required className="erp-input" />
          </div>

          {error && <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-danger" role="alert">{error}</div>}

          <button type="submit" disabled={isSubmitting} className="erp-button erp-button-primary w-full px-4 py-3">
            {isSubmitting ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        <div className="mt-6 rounded-xl border border-border bg-surface-muted p-4 text-center text-xs text-text-secondary">
          Demo credentials: <span className="font-semibold text-text-primary">admin@school.com</span> / <span className="font-semibold text-text-primary">admin123</span>
        </div>
      </div>
    </div>
  )
}

export default Login
