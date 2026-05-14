const tabs = [
  { key: 'notes', label: 'Notes', emoji: '📝', color: 'bg-green-100 text-green-700 border-green-300' },
  { key: 'quiz', label: 'Quiz', emoji: '❓', color: 'bg-blue-100 text-blue-700 border-blue-300' },
  { key: 'doubt', label: 'Doubt Solver', emoji: '💡', color: 'bg-orange-100 text-orange-700 border-orange-300' },
  { key: 'planner', label: 'Planner', emoji: '📅', color: 'bg-purple-100 text-purple-700 border-purple-300' },
]

export default function AgentTabs({ active, onChange }) {
  return (
    <div className="flex gap-2 px-6 py-3 border-b border-gray-200 bg-white overflow-x-auto">
      {tabs.map(tab => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border transition whitespace-nowrap
            ${active === tab.key
              ? tab.color
              : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'
            }`}
        >
          <span>{tab.emoji}</span>
          {tab.label}
        </button>
      ))}
    </div>
  )
}