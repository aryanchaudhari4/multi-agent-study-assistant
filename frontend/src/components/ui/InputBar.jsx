import { useState } from 'react'

export default function InputBar({ onSend, loading, placeholder, dark }) {
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
    <div className={`flex gap-3 p-4 border-t transition-colors duration-300 ${dark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
      <textarea
        className={`flex-1 resize-none rounded-xl px-4 py-3 text-sm outline-none transition min-h-[44px] max-h-32 ${
          dark
            ? 'bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:border-indigo-500'
            : 'bg-gray-50 text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-indigo-400'
        }`}
        placeholder={placeholder || 'Type your message... (Enter to send)'}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKey}
        rows={1}
      />
      <button
        onClick={handleSend}
        disabled={loading || !text.trim()}
        className="w-11 h-11 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed transition shadow-lg shadow-indigo-500/20 flex-shrink-0"
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