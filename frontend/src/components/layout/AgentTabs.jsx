const tabs = [
  { key: 'notes', label: 'Notes', emoji: '📝', color: '#22c55e', activeBg: 'rgba(34,197,94,0.1)', activeBorder: 'rgba(34,197,94,0.28)' },
  { key: 'quiz', label: 'Quiz', emoji: '❓', color: '#3b82f6', activeBg: 'rgba(59,130,246,0.1)', activeBorder: 'rgba(59,130,246,0.28)' },
  { key: 'doubt', label: 'Doubt Solver', emoji: '💡', color: '#f97316', activeBg: 'rgba(249,115,22,0.1)', activeBorder: 'rgba(249,115,22,0.28)' },
  { key: 'planner', label: 'Planner', emoji: '📅', color: '#a855f7', activeBg: 'rgba(168,85,247,0.1)', activeBorder: 'rgba(168,85,247,0.28)' },
]

export default function AgentTabs({ active, onChange, dark }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 6,
      padding: '8px 20px',
      borderBottom: dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid #ebebeb',
      background: dark ? '#0a0a0f' : 'white',
      overflowX: 'auto', flexShrink: 0,
    }}>
      {tabs.map(tab => (
        <button key={tab.key} onClick={() => onChange(tab.key)}
          style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '6px 16px', borderRadius: 100, cursor: 'pointer',
            border: active === tab.key
              ? `1px solid ${tab.activeBorder}`
              : dark ? '1px solid rgba(255,255,255,0.07)' : '1px solid #ebebeb',
            background: active === tab.key ? tab.activeBg : 'transparent',
            color: active === tab.key ? tab.color : dark ? 'rgba(255,255,255,0.38)' : '#aaa',
            fontSize: 13, fontWeight: active === tab.key ? 700 : 500,
            whiteSpace: 'nowrap', transition: 'all 0.15s', letterSpacing: '-0.01em',
          }}>
          <span style={{ fontSize: 13 }}>{tab.emoji}</span>
          {tab.label}
          {active === tab.key && (
            <span style={{
              width: 5, height: 5, borderRadius: '50%',
              background: tab.color, display: 'inline-block',
              boxShadow: `0 0 5px ${tab.color}`,
            }} />
          )}
        </button>
      ))}
    </div>
  )
}