import { useChat } from '../../hooks/useChat'
import ChatBubble from '../ui/ChatBubble'
import InputBar from '../ui/InputBar'
import { useRef, useEffect } from 'react'

const chips = ['Newton\'s Laws of Motion', 'Krebs Cycle', 'Quadratic Equations', 'French Revolution', 'Photosynthesis']

export default function NotesAgent({ dark }) {
  const { messages, sendMessage, loading, error } = useChat('notes')
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className={`px-6 py-4 border-b ${dark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center text-lg">📝</div>
          <div>
            <h2 className={`font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>Notes Agent</h2>
            <p className={`text-xs ${dark ? 'text-gray-500' : 'text-gray-400'}`}>Organizes and summarizes study content</p>
          </div>
          <span className="ml-auto text-xs px-2.5 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">active</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
        {messages.length === 0 && (
          <div className="text-center mt-10">
            <div className="text-4xl mb-3">📝</div>
            <p className={`text-sm font-medium mb-1 ${dark ? 'text-gray-300' : 'text-gray-700'}`}>Notes Agent ready!</p>
            <p className={`text-xs mb-4 ${dark ? 'text-gray-500' : 'text-gray-400'}`}>Tell me a topic and I'll create structured notes</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {chips.map(chip => (
                <button key={chip} onClick={() => sendMessage(`Create notes on ${chip}`)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition border ${dark ? 'bg-green-500/10 text-green-400 border-green-500/30 hover:bg-green-500/20' : 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100'}`}>
                  {chip}
                </button>
              ))}
            </div>
          </div>
        )}
        {messages.map((msg, i) => (
          <ChatBubble key={i} role={msg.role} content={msg.content} dark={dark} />
        ))}
        {loading && (
          <div className="flex gap-2 items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${dark ? 'bg-gray-700' : 'bg-gray-100'}`}>AI</div>
            <div className={`px-4 py-3 rounded-2xl rounded-tl-sm ${dark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-100'}`}>
              <div className="flex gap-1">
                {[0,1,2].map(i => <div key={i} className={`w-2 h-2 rounded-full animate-bounce ${dark ? 'bg-gray-500' : 'bg-gray-400'}`} style={{animationDelay: `${i*0.15}s`}} />)}
              </div>
            </div>
          </div>
        )}
        {error && <p className="text-red-400 text-sm text-center">{error}</p>}
        <div ref={bottomRef} />
      </div>

      <InputBar onSend={sendMessage} loading={loading} placeholder="Ask me to take notes on any topic..." dark={dark} />
    </div>
  )
}