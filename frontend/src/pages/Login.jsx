import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, LockIcon, LogoMark, MailIcon, UserIcon } from '../components/ui/Icons'

export default function Login() {
  const { login, register } = useAuth()
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setMounted(true), 80)
    return () => window.clearTimeout(timer)
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (isLogin) {
        await login(email, password)
      } else {
        await register(name, email, password)
        await login(email, password)
      }
    } catch (err) {
      setError(err.response?.data?.detail || 'Unable to continue. Please check your details and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={`auth-page ${mounted ? 'is-mounted' : ''}`}>
      <button className="back-button" type="button" onClick={() => navigate('/')}>
        <ArrowLeftIcon />
        Back
      </button>

      <section className="auth-showcase">
        <div className="brand-lockup">
          <LogoMark size={42} />
          <div>
            <div className="brand-lockup__name">StudyMind</div>
            <div className="brand-lockup__meta">AI Study Assistant</div>
          </div>
        </div>
        <h1>Study sessions with less switching and more momentum.</h1>
        <p>
          Sign in to keep your notes, practice, explanations, and plans connected inside one workspace.
        </p>
        <div className="auth-checklist">
          {['Clean agent workspace', 'Persistent chat history', 'Fast topic prompts'].map((item) => (
            <span key={item}>
              <CheckIcon />
              {item}
            </span>
          ))}
        </div>
      </section>

      <form className="auth-card" onSubmit={handleSubmit}>
        <div className="auth-card__header">
          <span>{isLogin ? 'Welcome back' : 'Create account'}</span>
          <h2>{isLogin ? 'Sign in to StudyMind' : 'Start using StudyMind'}</h2>
          <p>{isLogin ? 'Continue your study workspace.' : 'Create your free student workspace.'}</p>
        </div>

        <div className="auth-toggle" role="tablist" aria-label="Authentication mode">
          <button
            type="button"
            role="tab"
            aria-selected={isLogin}
            className={isLogin ? 'is-active' : ''}
            onClick={() => setIsLogin(true)}
          >
            Sign in
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={!isLogin}
            className={!isLogin ? 'is-active' : ''}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        <div className="auth-fields">
          {!isLogin && (
            <label className="field">
              <span>Full name</span>
              <div className="field__control">
                <UserIcon />
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Aryan Chaudhary"
                  required={!isLogin}
                />
              </div>
            </label>
          )}

          <label className="field">
            <span>Email address</span>
            <div className="field__control">
              <MailIcon />
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>
          </label>

          <label className="field">
            <span>Password</span>
            <div className="field__control">
              <LockIcon />
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
          </label>
        </div>

        {error && (
          <div className="error-banner auth-error" role="alert">
            {error}
          </div>
        )}

        <button className="primary-button primary-button--full" type="submit" disabled={loading}>
          {loading ? <span className="button-spinner" /> : null}
          {isLogin ? 'Sign in' : 'Create account'}
          {!loading && <ArrowRightIcon />}
        </button>

        <p className="auth-switch">
          {isLogin ? "Don't have an account?" : 'Already registered?'}
          <button type="button" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Create one' : 'Sign in'}
          </button>
        </p>
      </form>
    </div>
  )
}
