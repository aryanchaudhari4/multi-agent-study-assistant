import useUserStore from '../../store/userStore'
import { useAuth } from '../../hooks/useAuth'

const Logo = ({ size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="10" fill="url(#hLg)" />
    <path d="M12 20C12 15.6 15.6 12 20 12C22.4 12 24.6 13 26.2 14.6L23.4 17.4C22.6 16.5 21.4 16 20 16C17.8 16 16 17.8 16 20C16 22.2 17.8 24 20 24C21.4 24 22.6 23.5 23.4 22.6L26.2 25.4C24.6 27 22.4 28 20 28C15.6 28 12 24.4 12 20Z" fill="white"/>
    <path d="M24 20H28M28 20L26 18M28 20L26 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="hLg" x1="0" y1="0" x2="40" y2="40">
        <stop stopColor="#6366f1"/><stop offset="1" stopColor="#8b5cf6"/>
      </linearGradient>
    </defs>
  </svg>
)

export default function Header({ dark, setDark }) {
  const { user } = useUserStore()
  const { logoutUser } = useAuth()

  return (
    <div style={{
      height: 58, display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', padding: '0 24px',
      borderBottom: dark ? '1px solid rgba(255,255,255,0.07)' : '1px solid #ebebeb',
      background: dark ? '#0a0a0f' : 'white',
      flexShrink: 0, zIndex: 10,
    }}>

      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Logo size={30} />
        <div>
          <div style={{ fontWeight: 900, fontSize: 16, color: dark ? 'white' : '#0f0f0f', letterSpacing: '-0.04em' }}>
            StudyMind
          </div>
          <div style={{ fontSize: 10, color: dark ? 'rgba(255,255,255,0.28)' : '#bbb', fontWeight: 500, marginTop: -1 }}>
            AI Study Assistant
          </div>
        </div>
      </div>

      {/* Right side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>

        {/* Status pill */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 5,
          background: 'rgba(34,197,94,0.08)',
          border: '1px solid rgba(34,197,94,0.18)',
          borderRadius: 100, padding: '5px 12px',
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: '#22c55e', display: 'inline-block',
            boxShadow: '0 0 6px #22c55e',
          }} />
          <span style={{ fontSize: 11, color: '#4ade80', fontWeight: 600 }}>4 agents online</span>
        </div>

        {/* Divider */}
        <div style={{ width: 1, height: 20, background: dark ? 'rgba(255,255,255,0.08)' : '#eee' }} />

        {/* User pill */}
        {user && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: dark ? 'rgba(255,255,255,0.05)' : '#f5f5f5',
            border: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e8e8e8',
            borderRadius: 100, padding: '4px 12px 4px 4px',
          }}>
            <div style={{
              width: 26, height: 26, borderRadius: '50%',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', fontSize: 11, fontWeight: 900,
              boxShadow: '0 2px 8px rgba(99,102,241,0.4)',
            }}>
              {user.name?.charAt(0).toUpperCase()}
            </div>
            <span style={{
              fontSize: 13, fontWeight: 700,
              color: dark ? 'rgba(255,255,255,0.85)' : '#333',
              letterSpacing: '-0.01em',
            }}>
              {user.name}
            </span>
          </div>
        )}

        {/* Dark toggle */}
        <button onClick={() => setDark(!dark)}
          style={{
            width: 34, height: 34, borderRadius: 9,
            border: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e8e8e8',
            background: dark ? 'rgba(255,255,255,0.05)' : '#f5f5f5',
            cursor: 'pointer', fontSize: 15,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.15s',
          }}>
          {dark ? '☀️' : '🌙'}
        </button>

        {/* Logout */}
        <button onClick={logoutUser}
          style={{
            fontSize: 12, fontWeight: 700, cursor: 'pointer',
            background: 'rgba(239,68,68,0.07)',
            border: '1px solid rgba(239,68,68,0.15)',
            color: '#f87171', padding: '7px 14px', borderRadius: 9,
            transition: 'all 0.15s', letterSpacing: '-0.01em',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(239,68,68,0.12)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(239,68,68,0.07)'}>
          Logout
        </button>
      </div>
    </div>
  )
}