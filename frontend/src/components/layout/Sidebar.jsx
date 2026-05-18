const tabs = [
  { key: 'notes', label: 'Notes Agent', emoji: '📝', desc: 'Organize & summarize', color: '#22c55e', activeBg: 'rgba(34,197,94,0.1)', activeBorder: 'rgba(34,197,94,0.25)', iconBg: 'rgba(34,197,94,0.12)' },
  { key: 'quiz', label: 'Quiz Agent', emoji: '❓', desc: 'Practice & test', color: '#3b82f6', activeBg: 'rgba(59,130,246,0.1)', activeBorder: 'rgba(59,130,246,0.25)', iconBg: 'rgba(59,130,246,0.12)' },
  { key: 'doubt', label: 'Doubt Solver', emoji: '💡', desc: 'Explain concepts', color: '#f97316', activeBg: 'rgba(249,115,22,0.1)', activeBorder: 'rgba(249,115,22,0.25)', iconBg: 'rgba(249,115,22,0.12)' },
  { key: 'planner', label: 'Planner Agent', emoji: '📅', desc: 'Schedule & track', color: '#a855f7', activeBg: 'rgba(168,85,247,0.1)', activeBorder: 'rgba(168,85,247,0.25)', iconBg: 'rgba(168,85,247,0.12)' },
]

export default function Sidebar({ active, onChange, dark }) {
  return (
    <div style={{
      width: 224, flexShrink: 0,
      borderRight: dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid #ebebeb',
      background: dark ? '#0a0a0f' : '#fafafa',
      display: 'flex', flexDirection: 'column',
      padding: '12px 10px 16px',
    }}>

      {/* Section label */}
      <div style={{
        fontSize: 10, fontWeight: 700, letterSpacing: '0.1em',
        color: dark ? 'rgba(255,255,255,0.2)' : '#ccc',
        textTransform: 'uppercase', padding: '4px 10px 10px',
      }}>
        Agents
      </div>

      {/* Agent buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {tabs.map(tab => (
          <button key={tab.key} onClick={() => onChange(tab.key)}
            style={{
              display: 'flex', alignItems: 'center', gap: 11,
              padding: '9px 10px', borderRadius: 11, cursor: 'pointer',
              border: active === tab.key
                ? `1px solid ${tab.activeBorder}`
                : '1px solid transparent',
              background: active === tab.key ? tab.activeBg : 'transparent',
              transition: 'all 0.15s', textAlign: 'left', width: '100%',
            }}
            onMouseEnter={e => {
              if (active !== tab.key)
                e.currentTarget.style.background = dark ? 'rgba(255,255,255,0.04)' : '#f0f0f0'
            }}
            onMouseLeave={e => {
              if (active !== tab.key)
                e.currentTarget.style.background = 'transparent'
            }}>

            {/* Icon */}
            <div style={{
              width: 34, height: 34, borderRadius: 9, flexShrink: 0,
              background: active === tab.key ? tab.iconBg : dark ? 'rgba(255,255,255,0.06)' : '#efefef',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 16, transition: 'all 0.15s',
            }}>
              {tab.emoji}
            </div>

            {/* Text */}
            <div style={{ minWidth: 0 }}>
              <div style={{
                fontSize: 13, fontWeight: 700, letterSpacing: '-0.02em',
                color: active === tab.key ? tab.color : dark ? 'rgba(255,255,255,0.75)' : '#333',
                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
              }}>
                {tab.label}
              </div>
              <div style={{
                fontSize: 11, marginTop: 1,
                color: dark ? 'rgba(255,255,255,0.28)' : '#aaa',
              }}>
                {tab.desc}
              </div>
            </div>

            {/* Active dot */}
            {active === tab.key && (
              <div style={{
                width: 6, height: 6, borderRadius: '50%',
                background: tab.color, marginLeft: 'auto', flexShrink: 0,
                boxShadow: `0 0 6px ${tab.color}`,
              }} />
            )}
          </button>
        ))}
      </div>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Bottom info card */}
      <div style={{
        padding: '12px 14px', borderRadius: 12,
        background: dark ? 'rgba(99,102,241,0.07)' : '#f0f0ff',
        border: dark ? '1px solid rgba(99,102,241,0.13)' : '1px solid #e0e0ff',
      }}>
        <div style={{ fontSize: 11, fontWeight: 800, color: dark ? '#818cf8' : '#6366f1', marginBottom: 5 }}>
          💡 Pro tip
        </div>
        <div style={{ fontSize: 11, color: dark ? 'rgba(255,255,255,0.32)' : '#888', lineHeight: 1.55 }}>
          Press{' '}
          <kbd style={{
            background: dark ? 'rgba(255,255,255,0.1)' : '#e5e5e5',
            border: dark ? '1px solid rgba(255,255,255,0.12)' : '1px solid #d5d5d5',
            padding: '1px 6px', borderRadius: 5, fontSize: 10, fontFamily: 'monospace',
          }}>Enter</kbd>
          {' '}to send a message
        </div>
      </div>
    </div>
  )
}