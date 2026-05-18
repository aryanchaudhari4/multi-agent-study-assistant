import { useState, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Logo = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="12" fill="url(#lg2)" />
    <path d="M12 20C12 15.6 15.6 12 20 12C22.4 12 24.6 13 26.2 14.6L23.4 17.4C22.6 16.5 21.4 16 20 16C17.8 16 16 17.8 16 20C16 22.2 17.8 24 20 24C21.4 24 22.6 23.5 23.4 22.6L26.2 25.4C24.6 27 22.4 28 20 28C15.6 28 12 24.4 12 20Z" fill="white"/>
    <path d="M24 20H28M28 20L26 18M28 20L26 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="lg2" x1="0" y1="0" x2="40" y2="40">
        <stop stopColor="#6366f1"/><stop offset="1" stopColor="#8b5cf6"/>
      </linearGradient>
    </defs>
  </svg>
)

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
    setTimeout(() => setMounted(true), 50)
  }, [])

  const handleSubmit = async () => {
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
      setError(err.response?.data?.detail || 'Invalid credentials. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#05050a',
      fontFamily: "'DM Sans', system-ui, sans-serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Background glow */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(99,102,241,0.2) 0%, transparent 70%)',
      }} />
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, height: '40vh', zIndex: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(139,92,246,0.12) 0%, transparent 70%)',
      }} />
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.025,
        backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }} />

      {/* Back button */}
      <button onClick={() => navigate('/')}
        style={{
          position: 'fixed', top: 24, left: 24, zIndex: 20,
          display: 'flex', alignItems: 'center', gap: 6,
          background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
          color: 'rgba(255,255,255,0.6)', padding: '8px 16px', borderRadius: 10,
          fontSize: 13, fontWeight: 600, cursor: 'pointer',
        }}>
        ← Back
      </button>

      {/* Card */}
      <div style={{
        position: 'relative', zIndex: 10,
        width: '100%', maxWidth: 420,
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 24, padding: '40px 36px',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 25px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.1)',
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.98)',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>

        {/* Logo + brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
          <Logo size={40} />
          <div>
            <div style={{ color: 'white', fontWeight: 900, fontSize: 18, letterSpacing: '-0.03em' }}>StudyMind</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 2 }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
              <span style={{ fontSize: 11, color: '#86efac', fontWeight: 600 }}>All agents online</span>
            </div>
          </div>
        </div>

        {/* Heading */}
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ color: 'white', fontSize: 28, fontWeight: 900, letterSpacing: '-0.04em', marginBottom: 6 }}>
            {isLogin ? 'Welcome back 👋' : 'Get started 🚀'}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, lineHeight: 1.5 }}>
            {isLogin
              ? 'Sign in to continue your learning journey'
              : 'Create your free account and start learning'}
          </p>
        </div>

        {/* Tab toggle */}
        <div style={{
          display: 'flex', background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 14, padding: 4, marginBottom: 24,
        }}>
          {['Sign In', 'Register'].map((tab, i) => (
            <button key={tab} onClick={() => setIsLogin(i === 0)}
              style={{
                flex: 1, padding: '10px 0', borderRadius: 10,
                fontSize: 14, fontWeight: 700, cursor: 'pointer', border: 'none',
                transition: 'all 0.2s',
                background: isLogin === (i === 0)
                  ? 'linear-gradient(135deg, #6366f1, #8b5cf6)'
                  : 'transparent',
                color: isLogin === (i === 0) ? 'white' : 'rgba(255,255,255,0.4)',
                boxShadow: isLogin === (i === 0) ? '0 4px 15px rgba(99,102,241,0.4)' : 'none',
              }}>
              {tab}
            </button>
          ))}
        </div>

        {/* Form fields */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {!isLogin && (
            <div>
              <label style={{ display: 'block', color: 'rgba(255,255,255,0.4)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', marginBottom: 8 }}>
                FULL NAME
              </label>
              <input type="text" placeholder="John Doe" value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: '100%', padding: '13px 16px', borderRadius: 12,
                  background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.1)',
                  color: 'white', fontSize: 14, fontWeight: 500, outline: 'none',
                  boxSizing: 'border-box', transition: 'border-color 0.2s',
                  fontFamily: 'inherit',
                }}
                onFocus={e => e.target.style.borderColor = '#6366f1'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
          )}

          <div>
            <label style={{ display: 'block', color: 'rgba(255,255,255,0.4)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', marginBottom: 8 }}>
              EMAIL ADDRESS
            </label>
            <input type="email" placeholder="you@example.com" value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%', padding: '13px 16px', borderRadius: 12,
                background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.1)',
                color: 'white', fontSize: 14, fontWeight: 500, outline: 'none',
                boxSizing: 'border-box', transition: 'border-color 0.2s',
                fontFamily: 'inherit',
              }}
              onFocus={e => e.target.style.borderColor = '#6366f1'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
          </div>

          <div>
            <label style={{ display: 'block', color: 'rgba(255,255,255,0.4)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', marginBottom: 8 }}>
              PASSWORD
            </label>
            <input type="password" placeholder="••••••••" value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              style={{
                width: '100%', padding: '13px 16px', borderRadius: 12,
                background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.1)',
                color: 'white', fontSize: 14, fontWeight: 500, outline: 'none',
                boxSizing: 'border-box', transition: 'border-color 0.2s',
                fontFamily: 'inherit',
              }}
              onFocus={e => e.target.style.borderColor = '#6366f1'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
          </div>

          {error && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)',
              borderRadius: 12, padding: '12px 16px',
            }}>
              <span style={{ fontSize: 14 }}>⚠️</span>
              <span style={{ color: '#f87171', fontSize: 13, fontWeight: 500 }}>{error}</span>
            </div>
          )}

          <button onClick={handleSubmit} disabled={loading}
            style={{
              width: '100%', padding: '14px', borderRadius: 12, border: 'none',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: 'white', fontSize: 15, fontWeight: 800, cursor: 'pointer',
              boxShadow: '0 8px 25px rgba(99,102,241,0.45)',
              opacity: loading ? 0.7 : 1,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              marginTop: 4, letterSpacing: '-0.01em', fontFamily: 'inherit',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
            onMouseEnter={e => { if (!loading) { e.target.style.transform = 'translateY(-1px)'; e.target.style.boxShadow = '0 12px 30px rgba(99,102,241,0.55)' }}}
            onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 8px 25px rgba(99,102,241,0.45)' }}>
            {loading ? (
              <>
                <div style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
                Please wait...
              </>
            ) : isLogin ? 'Sign In →' : 'Create Account →'}
          </button>
        </div>

        {/* Switch */}
        <p style={{ textAlign: 'center', marginTop: 20, fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <button onClick={() => setIsLogin(!isLogin)}
            style={{ background: 'none', border: 'none', color: '#818cf8', fontWeight: 700, cursor: 'pointer', fontSize: 13, fontFamily: 'inherit' }}>
            {isLogin ? 'Register' : 'Sign In'}
          </button>
        </p>

        {/* Agent pills */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center', marginTop: 24, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {['📝 Notes', '❓ Quiz', '💡 Doubts', '📅 Planner'].map(a => (
            <span key={a} style={{
              fontSize: 11, padding: '4px 10px', borderRadius: 100,
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              color: 'rgba(255,255,255,0.3)', fontWeight: 500,
            }}>{a}</span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        input::placeholder { color: rgba(255,255,255,0.2); }
      `}</style>
    </div>
  )
}