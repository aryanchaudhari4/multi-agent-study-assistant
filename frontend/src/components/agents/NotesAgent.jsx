import { useChat } from '../../hooks/useChat'
import ChatBubble from '../ui/ChatBubble'
import InputBar from '../ui/InputBar'

const chips = ['Newton\'s Laws', 'Krebs Cycle', 'Quadratic Equations', 'French Revolution']

export default function NotesAgent() {
  const { messages, sendMessage, loading, error } = useChat('notes')

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="font-semibold text-gray-800">📝 Notes Agent</h2>
        <p className="text-xs text-gray-400 mt-0.5">Organizes and summarizes study content</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-400 text-sm mt-10">
            <p className="text-2xl mb-2">📝</p>
            <p>Tell me a topic and I'll create structured notes for you!</p>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              {chips.map(chip => (
                <button
                  key={chip}
                  onClick={() => sendMessage(`Create notes on ${chip}`)}
                  className="px-3 py-1.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-xs hover:bg-green-100 transition"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>
        )}
        {messages.map((msg, i) => (
          <ChatBubble
            key={i}
            role={msg.role}
            content={msg.content}
            agentColor="bg-green-100 text-green-700"
          />
        ))}
        {loading && (
          <div className="flex gap-2 items-center text-gray-400 text-sm">
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-100" />
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-200" />
          </div>
        )}
        {error && <p className="text-red-400 text-sm">{error}</p>}
      </div>

      <InputBar
        onSend={sendMessage}
        loading={loading}
        placeholder="Ask me to take notes on any topic..."
      />
    </div>
  )
}