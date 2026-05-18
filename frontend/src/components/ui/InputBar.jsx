import { useState, useRef, useEffect } from 'react'

export default function InputBar({ onSend, loading, placeholder, dark }) {
  const [text, setText] = useState('')
  const textareaRef = useRef(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px'
    }
  }, [text])

  const handleSend = () => {
    if (!text.trim() || loading) return
    onSend(text)
    setText('')
  }

  return (
    <div style={{
      padding: '12px 16px 16px',
      borderTop: dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid #e4e4e7',
      background: dark ? '#0a0a0f' : 'white',
      flexShrink: 0,
    }}>
      <div style={{
        display: 'flex', gap: 10, alignItems: 'flex-end',
        background: dark ? 'rgba(255,255,255,0.04)' : '#f4f4f5',
        border: dark ? '1.5px solid rgba(255,255,255,0.08)' : '1.5px solid #e4e4e7',
        borderRadius: 16, padding: '8px 8px 8px 16px',
        transition: 'border-color 0.2s',
      }}
      onFocus={() => {}}
      >
        <textarea
          ref={textareaRef}
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend() } }}
          placeholder={placeholder || 'Type a message...'}
          rows={1}
          style={{
            flex: 1, resize: 'none', outline: 'none', border: 'none',
            background: 'transparent',
            color: dark ? 'rgba(255,255,255,0.9)' : '#18181b',
            fontSize: 14, fontWeight: 400, lineHeight: 1.6,
            fontFamily: "'DM Sans', system-ui, sans-serif",
            minHeight: 24, maxHeight: 120, padding: 0,
          }}
        />
        <button onClick={handleSend} disabled={loading || !text.trim()}
          style={{
            width: 38, height: 38, borderRadius: 11, border: 'none', flexShrink: 0,
            background: loading || !text.trim()
              ? dark ? 'rgba(99,102,241,0.2)' : '#d1d5db'
              : 'linear-gradient(135deg, #6366f1, #7c3aed)',
            color: 'white', cursor: loading || !text.trim() ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: loading || !text.trim() ? 'none' : '0 4px 12px rgba(99,102,241,0.4)',
            transition: 'all 0.15s',
          }}>
          {loading
            ? <div style={{ width: 15, height: 15, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'inputSpin 0.8s linear infinite' }} />
            : <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"/></svg>
          }
        </button>
      </div>
      <div style={{ textAlign: 'center', marginTop: 6 }}>
        <span style={{ fontSize: 11, color: dark ? 'rgba(255,255,255,0.18)' : '#bbb', fontWeight: 500 }}>
          Press Enter to send · Shift+Enter for new line
        </span>
      </div>
      <style>{`
        @keyframes inputSpin { to { transform: rotate(360deg) } }
        textarea::placeholder { color: ${dark ? 'rgba(255,255,255,0.22)' : '#a1a1aa'} !important; }
      `}</style>
    </div>
  )
}