const tabs = [
  { key: 'notes', label: 'Notes', emoji: '📝', activeClass: 'bg-green-500/20 text-green-400 border border-green-500/30' },
  { key: 'quiz', label: 'Quiz', emoji: '❓', activeClass: 'bg-blue-500/20 text-blue-400 border border-blue-500/30' },
  { key: 'doubt', label: 'Doubt Solver', emoji: '💡', activeClass: 'bg-orange-500/20 text-orange-400 border border-orange-500/30' },
  { key: 'planner', label: 'Planner', emoji: '📅', activeClass: 'bg-purple-500/20 text-purple-400 border border-purple-500/30' },
]

export default function AgentTabs({ active, onChange, dark }) {
  return (
    <div className={`flex gap-2 px-4 py-2 border-b overflow-x-auto scrollbar-hide transition-colors duration-300 ${dark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
      {tabs.map(tab => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition border ${
            active === tab.key
              ? tab.activeClass
              : dark
                ? 'text-gray-400 border-gray-700 hover:bg-gray-800 hover:text-gray-200'
                : 'text-gray-500 border-gray-200 hover:bg-gray-50 hover:text-gray-700'
          }`}
        >
          <span>{tab.emoji}</span>
          {tab.label}
        </button>
      ))}
    </div>
  )
}