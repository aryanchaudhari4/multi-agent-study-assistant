import { useEffect, useRef } from 'react'
import { getAgentProfile } from '../../config/agents'
import { LogoMark } from '../ui/Icons'
import { useChat } from '../../hooks/useChat'
import ChatBubble from '../ui/ChatBubble'
import InputBar from '../ui/InputBar'

function TypingIndicator({ profile }) {
  return (
    <div className="chat-row">
      <div className="chat-avatar chat-avatar--agent">
        <LogoMark size={18} />
      </div>
      <div className="typing-bubble" style={{ '--agent-rgb': profile.rgb }}>
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}

export default function AgentPanel({ agentKey, dark }) {
  const profile = getAgentProfile(agentKey)
  const Icon = profile.icon
  const { messages, sendMessage, loading, error } = useChat(agentKey)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  return (
    <section
      className="agent-view"
      style={{ '--agent': profile.color, '--agent-rgb': profile.rgb }}
    >
      <header className="agent-header">
        <div className="agent-icon">
          <Icon />
        </div>
        <div className="agent-header__copy">
          <h1>{profile.label}</h1>
          <p>{profile.headerDescription}</p>
        </div>
        <div className="agent-status">
          <span />
          Active
        </div>
      </header>

      <div className="chat-scroll">
        {messages.length === 0 && (
          <div className="empty-state-wrap">
            <div className="empty-state">
              <div className="empty-state__icon">
                <Icon />
              </div>
              <p className="empty-state__eyebrow">{profile.label}</p>
              <h2>{profile.emptyTitle}</h2>
              <p>{profile.emptyDescription}</p>
              <div className="quick-chip-grid">
                {profile.chips.map((chip) => (
                  <button
                    key={chip}
                    className="quick-chip"
                    type="button"
                    onClick={() => sendMessage(profile.buildPrompt(chip))}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {messages.map((msg, index) => (
          <ChatBubble
            key={`${msg.role}-${index}`}
            role={msg.role}
            content={msg.content}
            dark={dark}
            userName={msg.userName}
          />
        ))}

        {loading && <TypingIndicator profile={profile} />}

        {error && (
          <div className="error-banner" role="alert">
            {error}
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <InputBar
        onSend={sendMessage}
        loading={loading}
        placeholder={profile.placeholder}
        dark={dark}
      />
    </section>
  )
}
