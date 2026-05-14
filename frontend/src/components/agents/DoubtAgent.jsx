import { useChat } from '../../hooks/useChat'
import ChatBubble from '../ui/ChatBubble'
import InputBar from '../ui/InputBar'

const chips = ['Why does ice float?', 'What is photosynthesis?', 'Explain Newton\'s 2nd Law', 'What is DNA?']

export default function DoubtAgent() {
  const { messages, sendMessage, loading, error } = useChat('doubt')

  return (
    <div className="flex flex-col h-full">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="font-semibold text-gray-800">💡 Doubt Solver</h2>
        <p className="text-xs text-gray-400 mt-0.5">Explains concepts step by step</p>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-400 text-sm mt-10">
            <p className="text-2xl mb-2">💡</p>
            <p>Ask me anything — I'll explain it clearly!</p>
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              {chips.map(chip => (
                <button
                  key={chip}
                  onClick={() => sendMessage(chip)}
                  className="px-3 py-1.5 bg-orange-50 text-orange-700 border border-orange-200 rounded-full text-xs hover:bg-orange-100 transition"
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
            agentColor="bg-orange-100 text-orange-700"
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
        placeholder="Type your doubt or question..."
      />
    </div>
  )
}