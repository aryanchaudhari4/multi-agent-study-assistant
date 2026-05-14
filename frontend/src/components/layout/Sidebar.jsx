const tabs = [
  { key: 'notes', label: 'Notes Agent', emoji: '📝', desc: 'Organize & summarize' },
  { key: 'quiz', label: 'Quiz Agent', emoji: '❓', desc: 'Practice & test' },
  { key: 'doubt', label: 'Doubt Solver', emoji: '💡', desc: 'Explain concepts' },
  { key: 'planner', label: 'Planner Agent', emoji: '📅', desc: 'Schedule & track' },
]

export default function Sidebar({ active, onChange }) {
  return (
    <div className="w-56 border-r border-gray-200 bg-white flex flex-col py-4 gap-1">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 mb-2">
        Agents
      </p>
      {tabs.map(tab => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`flex items-start gap-3 px-4 py-2.5 text-left transition
            ${active === tab.key
              ? 'bg-indigo-50 border-r-2 border-indigo-600'
              : 'hover:bg-gray-50'
            }`}
        >
          <span className="text-lg mt-0.5">{tab.emoji}</span>
          <div>
            <p className={`text-sm font-medium ${active === tab.key ? 'text-indigo-700' : 'text-gray-700'}`}>
              {tab.label}
            </p>
            <p className="text-xs text-gray-400">{tab.desc}</p>
          </div>
        </button>
      ))}
    </div>
  )
}