import { useState } from 'react'

export default function InputBar({ onSend, loading, placeholder }) {
  const [text, setText] = useState('')

  const handleSend = () => {
    if (!text.trim() || loading) return
    onSend(text)
    setText('')
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex gap-2 p-4 border-t border-gray-200">
      <textarea
        className="flex-1 resize-none border border-gray-300 rounded-xl px-4 py-2 text-sm outline-none focus:border-indigo-400 min-h-[42px] max-h-32"
        placeholder={placeholder || 'Type your message...'}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKey}
        rows={1}
      />
      <button
        onClick={handleSend}
        disabled={loading || !text.trim()}
        className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        {loading ? (
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>
        )}
      </button>
    </div>
  )
}