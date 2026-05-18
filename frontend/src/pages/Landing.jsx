import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import heroArt from '../assets/hero.png'
import { agentProfiles } from '../config/agents'
import { ArrowRightIcon, CheckIcon, LogoMark, SparkIcon } from '../components/ui/Icons'

export default function Landing() {
  const navigate = useNavigate()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setMounted(true), 80)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className={`landing-page ${mounted ? 'is-mounted' : ''}`}>
      <nav className="landing-nav">
        <button className="brand-lockup brand-lockup--button" type="button" onClick={() => navigate('/')}>
          <LogoMark size={38} />
          <span className="brand-lockup__name">StudyMind</span>
        </button>

        <div className="landing-nav__actions">
          <div className="status-pill status-pill--nav">
            <span />
            4 agents online
          </div>
          <button className="ghost-button" type="button" onClick={() => navigate('/login')}>
            Sign in
          </button>
          <button className="primary-button" type="button" onClick={() => navigate('/login')}>
            Get started
            <ArrowRightIcon />
          </button>
        </div>
      </nav>

      <main>
        <section className="landing-hero">
          <div className="landing-hero__copy">
            <div className="product-badge">
              <SparkIcon />
              Multi-agent learning workspace
            </div>
            <h1>StudyMind</h1>
            <p>
              A polished AI study assistant that keeps notes, quizzes, doubts, and study planning in one focused workspace.
            </p>
            <div className="landing-hero__actions">
              <button className="primary-button primary-button--large" type="button" onClick={() => navigate('/login')}>
                Start learning
                <ArrowRightIcon />
              </button>
              <button className="ghost-button ghost-button--large" type="button" onClick={() => navigate('/login')}>
                Sign in
              </button>
            </div>
            <div className="hero-proof">
              {['Notes', 'Quizzes', 'Doubts', 'Planner'].map((item) => (
                <span key={item}>
                  <CheckIcon />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-preview" aria-label="StudyMind app preview">
            <img src={heroArt} alt="" className="hero-preview__art" />
            <div className="preview-window">
              <div className="preview-window__bar">
                <span />
                <span />
                <span />
              </div>
              <div className="preview-window__body">
                <aside className="preview-sidebar">
                  {agentProfiles.map((agent) => {
                    const Icon = agent.icon
                    return (
                      <div
                        key={agent.key}
                        className={`preview-agent ${agent.key === 'notes' ? 'is-active' : ''}`}
                        style={{ '--agent': agent.color, '--agent-rgb': agent.rgb }}
                      >
                        <Icon />
                        <span>{agent.shortLabel}</span>
                      </div>
                    )
                  })}
                </aside>
                <div className="preview-chat">
                  <div className="preview-chat__header">
                    <strong>Notes Agent</strong>
                    <span>Active</span>
                  </div>
                  <div className="preview-message preview-message--user">Create notes on photosynthesis.</div>
                  <div className="preview-message">
                    <strong>Photosynthesis</strong>
                    <p>Definition, equation, chloroplast role, light reactions, Calvin cycle, and exam-ready key points.</p>
                  </div>
                  <div className="preview-input">
                    <span>Ask another topic...</span>
                    <ArrowRightIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="agent-section">
          <div className="section-heading">
            <span>Agent system</span>
            <h2>Built around the way students actually study</h2>
          </div>

          <div className="agent-card-grid">
            {agentProfiles.map((agent) => {
              const Icon = agent.icon
              return (
                <article
                  key={agent.key}
                  className="agent-card"
                  style={{ '--agent': agent.color, '--agent-rgb': agent.rgb }}
                >
                  <div className="agent-card__icon">
                    <Icon />
                  </div>
                  <h3>{agent.label}</h3>
                  <p>{agent.headerDescription}</p>
                </article>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}
