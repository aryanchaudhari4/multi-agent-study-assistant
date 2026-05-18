import { useChat } from '../../hooks/useChat'
import ChatBubble from '../ui/ChatBubble'
import InputBar from '../ui/InputBar'
import { useRef, useEffect } from 'react'

const chips = ['Physics MCQs', 'Chemistry Quiz', 'Math Problems', 'Biology Test', 'History Questions']

export default function QuizAgent({ dark }) {
  const { messages, sendMessage, loading, error } = useChat('quiz')
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

      <div style={{ padding: '14px 20px', borderBottom: dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid #f0f0f0', display: 'flex', alignItems: 'center', gap: 12, background: dark ? '#0a0a0f' : 'white', flexShrink: 0 }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>❓</div>
        <div>
          <div style={{ fontWeight: 800, fontSize: 14, color: dark ? 'white' : '#111', letterSpacing: '-0.02em' }}>Quiz Agent</div>
          <div style={{ fontSize: 12, color: dark ? 'rgba(255,255,255,0.35)' : '#999' }}>Generates MCQs and practice tests</div>
        </div>
        <div style={{ marginLeft: 'auto', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 100, background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)', color: '#60a5fa', display: 'flex', alignItems: 'center', gap: 5 }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#60a5fa', boxShadow: '0 0 5px #60a5fa', display: 'inline-block' }} />
          active
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {messages.length === 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '20px' }}>
            <div style={{ maxWidth: 520, width: '100%', textAlign: 'center', background: dark ? 'rgba(255,255,255,0.03)' : 'white', border: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #ebebeb', borderRadius: 24, padding: '36px 32px', boxShadow: dark ? '0 20px 60px rgba(0,0,0,0.4)' : '0 8px 30px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize: 48, marginBottom: 14 }}>❓</div>
              <div style={{ fontWeight: 900, fontSize: 20, color: dark ? 'white' : '#111', letterSpacing: '-0.04em', marginBottom: 8 }}>Quiz Agent</div>
              <div style={{ fontSize: 14, color: dark ? 'rgba(255,255,255,0.4)' : '#999', marginBottom: 24, lineHeight: 1.6 }}>
                Tell me a topic and I'll generate MCQs, practice tests, and quizzes tailored to your level.
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 20 }}>
                {chips.map(chip => (
                  <button key={chip} onClick={() => sendMessage(`Give me 3 MCQs on ${chip}`)}
                    style={{ padding: '8px 16px', borderRadius: 100, cursor: 'pointer', fontSize: 13, fontWeight: 600, background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)', color: '#60a5fa', transition: 'all 0.15s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(59,130,246,0.15)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(59,130,246,0.08)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                    {chip}
                  </button>
                ))}
              </div>
              <div style={{ fontSize: 12, color: dark ? 'rgba(255,255,255,0.2)' : '#ccc' }}>or type your own topic below ↓</div>
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <ChatBubble key={i} role={msg.role} content={msg.content} dark={dark} userName={msg.userName} />
        ))}

        {loading && (
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #1e1b4b, #312e81)', border: '1px solid rgba(99,102,241,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 12px rgba(99,102,241,0.3)', flexShrink: 0 }}>
              <svg width="14" height="14" viewBox="0 0 40 40" fill="none"><path d="M12 20C12 15.6 15.6 12 20 12C22.4 12 24.6 13 26.2 14.6L23.4 17.4C22.6 16.5 21.4 16 20 16C17.8 16 16 17.8 16 20C16 22.2 17.8 24 20 24C21.4 24 22.6 23.5 23.4 22.6L26.2 25.4C24.6 27 22.4 28 20 28C15.6 28 12 24.4 12 20Z" fill="white"/><path d="M24 20H28M28 20L26 18M28 20L26 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div style={{ padding: '12px 16px', borderRadius: '4px 16px 16px 16px', background: dark ? 'rgba(255,255,255,0.05)' : '#f4f4f5', border: dark ? '1px solid rgba(255,255,255,0.07)' : '1px solid #e4e4e7' }}>
              <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                {[0,1,2].map(i => <div key={i} style={{ width: 7, height: 7, borderRadius: '50%', background: dark ? 'rgba(255,255,255,0.3)' : '#ccc', animation: 'quizBounce 1.2s infinite', animationDelay: `${i*0.15}s` }} />)}
              </div>
            </div>
          </div>
        )}

        {error && <div style={{ textAlign: 'center', fontSize: 13, color: '#f87171', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.15)', borderRadius: 10, padding: '10px 16px' }}>⚠️ {error}</div>}
        <div ref={bottomRef} />
      </div>

      <InputBar onSend={sendMessage} loading={loading} placeholder="Ask for a quiz on any topic..." dark={dark} />
      <style>{`@keyframes quizBounce { 0%,80%,100%{transform:translateY(0);opacity:0.4} 40%{transform:translateY(-5px);opacity:1} }`}</style>
    </div>
  )
}