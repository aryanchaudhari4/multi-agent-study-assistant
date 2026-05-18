import { agentProfiles } from '../../config/agents'

export default function AgentTabs({ active, onChange }) {
  return (
    <div className="agent-tabs" role="tablist" aria-label="Agent switcher">
      {agentProfiles.map((agent) => {
        const Icon = agent.icon
        const isActive = active === agent.key

        return (
          <button
            key={agent.key}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={`agent-tab ${isActive ? 'is-active' : ''}`}
            style={{ '--agent': agent.color, '--agent-rgb': agent.rgb }}
            onClick={() => onChange(agent.key)}
          >
            <Icon />
            <span>{agent.shortLabel}</span>
          </button>
        )
      })}
    </div>
  )
}
