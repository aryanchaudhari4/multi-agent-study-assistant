import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Logo = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="12" fill="url(#lg)" />
    <path d="M12 20C12 15.6 15.6 12 20 12C22.4 12 24.6 13 26.2 14.6L23.4 17.4C22.6 16.5 21.4 16 20 16C17.8 16 16 17.8 16 20C16 22.2 17.8 24 20 24C21.4 24 22.6 23.5 23.4 22.6L26.2 25.4C24.6 27 22.4 28 20 28C15.6 28 12 24.4 12 20Z" fill="white"/>
    <path d="M24 20H28M28 20L26 18M28 20L26 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="lg" x1="0" y1="0" x2="40" y2="40">
        <stop stopColor="#6366f1"/><stop offset="1" stopColor="#8b5cf6"/>
      </linearGradient>
    </defs>
  </svg>
)

const agents = [
  { emoji: '📝', name: 'Notes Agent', desc: 'Transform any topic into structured, beautiful study notes instantly.', color: '#22c55e', bg: 'rgba(34,197,94,0.08)', border: 'rgba(34,197,94,0.2)' },
  { emoji: '❓', name: 'Quiz Agent', desc: 'Generate MCQs and practice tests tailored to your level.', color: '#3b82f6', bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)' },
  { emoji: '💡', name: 'Doubt Solver', desc: 'Get clear, step-by-step explanations for any concept.', color: '#f97316', bg: 'rgba(249,115,22,0.08)', border: 'rgba(249,115,22,0.2)' },
  { emoji: '📅', name: 'Planner Agent', desc: 'Build smart study schedules and track your progress.', color: '#a855f7', bg: 'rgba(168,85,247,0.08)', border: 'rgba(168,85,247,0.2)' },
]

export default function Landing() {
  const navigate = useNavigate()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => setMounted(true), 50)
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      background: '#05050a',
      fontFamily: "'DM Sans', system-ui, sans-serif",
      color: 'white',
      overflowX: 'hidden',
    }}>

      {/* Background effects */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.25) 0%, transparent 70%)',
      }} />
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, height: '50vh', zIndex: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(139,92,246,0.15) 0%, transparent 70%)',
      }} />

      {/* Grid overlay */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.03,
        backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }} />

      {/* NAV */}
      <nav style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 48px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Logo size={38} />
          <span style={{ fontWeight: 900, fontSize: 20, letterSpacing: '-0.04em' }}>StudyMind</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 100, padding: '6px 14px' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: 12, color: '#86efac', fontWeight: 600 }}>4 Agents Online</span>
          </div>
          <button onClick={() => navigate('/login')}
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'white', padding: '8px 20px', borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
            Sign In
          </button>
          <button onClick={() => navigate('/login')}
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: 'white', padding: '8px 20px', borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: 'pointer', border: 'none', boxShadow: '0 4px 20px rgba(99,102,241,0.4)' }}>
            Get Started →
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '100px 48px 80px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)',
          borderRadius: 100, padding: '8px 18px', marginBottom: 32,
          opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease',
        }}>
          <span style={{ fontSize: 12 }}>✦</span>
          <span style={{ fontSize: 13, color: '#a5b4fc', fontWeight: 600 }}>Multi-Agent AI Study Assistant</span>
        </div>

        <h1 style={{
          fontSize: 'clamp(48px, 8vw, 88px)', fontWeight: 900, lineHeight: 1,
          letterSpacing: '-0.05em', marginBottom: 24, maxWidth: 800, margin: '0 auto 24px',
          opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.7s ease 0.1s',
        }}>
          Study Smarter<br />
          <span style={{
            background: 'linear-gradient(90deg, #818cf8, #a78bfa, #67e8f9)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            with AI Agents
          </span>
        </h1>

        <p style={{
          fontSize: 18, color: 'rgba(255,255,255,0.5)', maxWidth: 520, margin: '0 auto 40px',
          lineHeight: 1.6, fontWeight: 400,
          opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.7s ease 0.2s',
        }}>
          Four specialized AI agents working in harmony — notes, quizzes, doubt solving, and smart planning.
        </p>

        <div style={{
          display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap',
          opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.7s ease 0.3s',
        }}>
          <button onClick={() => navigate('/login')}
            style={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: 'white', padding: '14px 32px', borderRadius: 14,
              fontSize: 15, fontWeight: 800, cursor: 'pointer', border: 'none',
              boxShadow: '0 8px 30px rgba(99,102,241,0.5)',
              letterSpacing: '-0.01em',
            }}>
            Start Learning Free →
          </button>
          <button onClick={() => navigate('/login')}
            style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)',
              color: 'white', padding: '14px 32px', borderRadius: 14,
              fontSize: 15, fontWeight: 600, cursor: 'pointer',
            }}>
            Sign In
          </button>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: 48, justifyContent: 'center', marginTop: 60,
          opacity: mounted ? 1 : 0, transition: 'all 0.7s ease 0.4s',
        }}>
          {[['4', 'AI Agents'], ['∞', 'Topics'], ['24/7', 'Available'], ['Free', 'To Start']].map(([v, l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.04em' }}>{v}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 2, fontWeight: 500 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AGENTS SECTION */}
      <section style={{ position: 'relative', zIndex: 10, padding: '40px 48px 100px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span style={{ fontSize: 12, color: '#6366f1', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Meet Your Agents</span>
          <h2 style={{ fontSize: 40, fontWeight: 900, letterSpacing: '-0.04em', marginTop: 8 }}>
            Four Agents, One Goal
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 16, marginTop: 8 }}>Each agent is specialized for a different part of your learning journey</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {agents.map((a, i) => (
            <div key={a.name}
              style={{
                background: a.bg, border: `1px solid ${a.border}`,
                borderRadius: 20, padding: 28, cursor: 'default',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${0.5 + i * 0.1}s`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = `0 20px 40px ${a.color}20`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{a.emoji}</div>
              <div style={{ fontSize: 16, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.02em' }}>{a.name}</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{a.desc}</div>
              <div style={{ marginTop: 16, display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, color: a.color, fontWeight: 600 }}>
                Active <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '60px 48px 100px' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))',
          border: '1px solid rgba(99,102,241,0.2)',
          borderRadius: 28, padding: '60px 40px', maxWidth: 640, margin: '0 auto',
        }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🎓</div>
          <h2 style={{ fontSize: 36, fontWeight: 900, letterSpacing: '-0.04em', marginBottom: 12 }}>
            Ready to study smarter?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, marginBottom: 28, lineHeight: 1.6 }}>
            Join thousands of students using AI agents to learn faster and score higher.
          </p>
          <button onClick={() => navigate('/login')}
            style={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: 'white', padding: '14px 36px', borderRadius: 14,
              fontSize: 15, fontWeight: 800, cursor: 'pointer', border: 'none',
              boxShadow: '0 8px 30px rgba(99,102,241,0.5)',
            }}>
            Get Started Free →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '20px 48px 40px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 8 }}>
          <Logo size={24} />
          <span style={{ fontWeight: 800, fontSize: 15, letterSpacing: '-0.03em' }}>StudyMind</span>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)' }}>© 2025 StudyMind. Built with ❤️ using React + FastAPI + AI</p>
      </footer>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
      `}</style>
    </div>
  )
}