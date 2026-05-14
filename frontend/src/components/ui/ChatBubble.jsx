import ReactMarkdown from 'react-markdown'

export default function ChatBubble({ role, content, agentColor }) {
  const isUser = role === 'user'

  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Avatar */}
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 ${
          isUser ? 'bg-gray-200 text-gray-700' : agentColor
        }`}
      >
        {isUser ? 'You' : 'AI'}
      </div>

      {/* Bubble */}
      <div
        className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
          isUser
            ? 'bg-indigo-600 text-white rounded-tr-sm'
            : 'bg-gray-100 text-gray-800 rounded-tl-sm'
        }`}
      >
        {isUser ? (
          content
        ) : (
          <ReactMarkdown
            components={{
              h2: ({ node, ...props }) => <h2 className="font-bold text-base mt-2 mb-1" {...props} />,
              h3: ({ node, ...props }) => <h3 className="font-semibold mt-2 mb-1" {...props} />,
              ul: ({ node, ...props }) => <ul className="list-disc ml-4 mt-1" {...props} />,
              ol: ({ node, ...props }) => <ol className="list-decimal ml-4 mt-1" {...props} />,
              li: ({ node, ...props }) => <li className="mt-0.5" {...props} />,
              strong: ({ node, ...props }) => <strong className="font-semibold" {...props} />,
              p: ({ node, ...props }) => <p className="mt-1" {...props} />,
            }}
          >
            {content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  )
}