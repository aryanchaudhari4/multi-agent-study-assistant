import { agentProfiles } from '../../config/agents'

export default function Sidebar({ active, onChange }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__label">Workspace</div>

      <nav className="sidebar__nav" aria-label="Agents">
        {agentProfiles.map((agent) => {
          const Icon = agent.icon
          const isActive = active === agent.key

          return (
            <button
              key={agent.key}
              type="button"
              className={`sidebar-link ${isActive ? 'is-active' : ''}`}
              style={{ '--agent': agent.color, '--agent-rgb': agent.rgb }}
              onClick={() => onChange(agent.key)}
            >
              <span className="sidebar-link__icon">
                <Icon />
              </span>
              <span className="sidebar-link__copy">
                <strong>{agent.label}</strong>
                <small>{agent.description}</small>
              </span>
              {isActive && <span className="sidebar-link__dot" />}
            </button>
          )
        })}
      </nav>

      <div className="sidebar__footer">
        <span className="sidebar__footer-dot" />
        Ready for study session
      </div>
    </aside>
  )
}
