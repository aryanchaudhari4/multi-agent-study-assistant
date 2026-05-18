import { useEffect, useRef, useState } from 'react'
import { SendIcon } from './Icons'

export default function InputBar({ onSend, loading, placeholder }) {
  const [text, setText] = useState('')
  const [focused, setFocused] = useState(false)
  const textareaRef = useRef(null)

  useEffect(() => {
    if (!textareaRef.current) return
    textareaRef.current.style.height = 'auto'
    textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 128)}px`
  }, [text])

  const handleSend = () => {
    const message = text.trim()
    if (!message || loading) return
    onSend(message)
    setText('')
  }

  return (
    <footer className="composer">
      <div className={`composer__box ${focused ? 'is-focused' : ''}`}>
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(event) => setText(event.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.preventDefault()
              handleSend()
            }
          }}
          placeholder={placeholder || 'Type a message...'}
          rows={1}
        />
        <button
          type="button"
          className="send-button"
          onClick={handleSend}
          disabled={loading || !text.trim()}
          aria-label="Send message"
          title="Send"
        >
          {loading ? <span className="button-spinner" /> : <SendIcon />}
        </button>
      </div>
    </footer>
  )
}
