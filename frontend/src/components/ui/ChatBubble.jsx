import ReactMarkdown from 'react-markdown'

export default function ChatBubble({ role, content, agentColor, dark }) {
  const isUser = role === 'user'

  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Avatar */}
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
        isUser
          ? dark ? 'bg-indigo-600 text-white' : 'bg-indigo-500 text-white'
          : dark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
      }`}>
        {isUser ? 'You' : 'AI'}
      </div>

      {/* Bubble */}
      <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
        isUser
          ? 'bg-indigo-600 text-white rounded-tr-sm shadow-lg shadow-indigo-500/20'
          : dark
            ? 'bg-gray-800 text-gray-200 rounded-tl-sm border border-gray-700'
            : 'bg-gray-100 text-gray-800 rounded-tl-sm'
      }`}>
        {isUser ? (
          content
        ) : (
          <ReactMarkdown
            components={{
              h2: ({ node, ...props }) => <h2 className={`font-bold text-base mt-2 mb-1 ${dark ? 'text-white' : 'text-gray-900'}`} {...props} />,
              h3: ({ node, ...props }) => <h3 className="font-semibold mt-2 mb-1" {...props} />,
              ul: ({ node, ...props }) => <ul className="list-disc ml-4 mt-1 space-y-1" {...props} />,
              ol: ({ node, ...props }) => <ol className="list-decimal ml-4 mt-1 space-y-1" {...props} />,
              li: ({ node, ...props }) => <li className="mt-0.5" {...props} />,
              strong: ({ node, ...props }) => <strong className={`font-semibold ${dark ? 'text-white' : 'text-gray-900'}`} {...props} />,
              p: ({ node, ...props }) => <p className="mt-1 first:mt-0" {...props} />,
              code: ({ node, ...props }) => <code className={`px-1.5 py-0.5 rounded text-xs font-mono ${dark ? 'bg-gray-700 text-green-400' : 'bg-gray-200 text-gray-800'}`} {...props} />,
            }}
          >
            {content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  )
}