const tabs = [
  { key: 'notes', label: 'Notes Agent', emoji: '📝', desc: 'Organize & summarize', color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/30' },
  { key: 'quiz', label: 'Quiz Agent', emoji: '❓', desc: 'Practice & test', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/30' },
  { key: 'doubt', label: 'Doubt Solver', emoji: '💡', desc: 'Explain concepts', color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/30' },
  { key: 'planner', label: 'Planner Agent', emoji: '📅', desc: 'Schedule & track', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/30' },
]

export default function Sidebar({ active, onChange, dark }) {
  return (
    <div className={`w-56 border-r flex flex-col py-4 gap-1 transition-colors duration-300 ${dark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
      <p className={`text-xs font-semibold uppercase tracking-wider px-4 mb-2 ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
        Agents
      </p>
      {tabs.map(tab => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`flex items-start gap-3 px-4 py-3 text-left transition mx-2 rounded-xl ${
            active === tab.key
              ? `${tab.bg} border`
              : dark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
          }`}
        >
          <span className="text-lg mt-0.5">{tab.emoji}</span>
          <div>
            <p className={`text-sm font-medium ${active === tab.key ? tab.color : dark ? 'text-gray-300' : 'text-gray-700'}`}>
              {tab.label}
            </p>
            <p className={`text-xs ${dark ? 'text-gray-500' : 'text-gray-400'}`}>{tab.desc}</p>
          </div>
        </button>
      ))}

      {/* Bottom stats */}
      <div className={`mx-2 mt-auto p-3 rounded-xl ${dark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <p className={`text-xs font-medium mb-2 ${dark ? 'text-gray-300' : 'text-gray-600'}`}>Quick Tips</p>
        <p className={`text-xs ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
          Press <kbd className={`px-1 py-0.5 rounded text-xs ${dark ? 'bg-gray-700' : 'bg-gray-200'}`}>Enter</kbd> to send messages
        </p>
      </div>
    </div>
  )
}