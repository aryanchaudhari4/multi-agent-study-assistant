import ReactMarkdown from 'react-markdown'
import { LogoMark } from './Icons'

function UserAvatar({ name }) {
  return <div className="chat-avatar chat-avatar--user">{name?.charAt(0).toUpperCase() || 'U'}</div>
}

export default function ChatBubble({ role, content, userName }) {
  const isUser = role === 'user'

  return (
    <div className={`chat-row ${isUser ? 'chat-row--user' : ''}`}>
      {isUser ? (
        <UserAvatar name={userName || 'User'} />
      ) : (
        <div className="chat-avatar chat-avatar--agent">
          <LogoMark size={18} />
        </div>
      )}

      <div className={`chat-bubble ${isUser ? 'chat-bubble--user' : 'chat-bubble--assistant'}`}>
        {isUser ? (
          content
        ) : (
          <div className="assistant-markdown">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  )
}
