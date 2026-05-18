import { BulbIcon, CalendarIcon, NoteIcon, QuizIcon } from '../components/ui/Icons'

export const agentProfiles = [
  {
    key: 'notes',
    label: 'Notes Agent',
    shortLabel: 'Notes',
    description: 'Organize and summarize',
    headerDescription: 'Structured study notes, definitions, and takeaways',
    emptyTitle: 'Create focused study notes',
    emptyDescription:
      'Choose a topic or paste rough material. The notes agent will turn it into clean sections, key points, and quick revision cues.',
    placeholder: 'Ask for notes on any topic...',
    icon: NoteIcon,
    color: '#16a34a',
    rgb: '22 163 74',
    chips: ["Newton's Laws", 'Krebs Cycle', 'Quadratic Equations', 'French Revolution', 'Photosynthesis'],
    buildPrompt: (chip) => `Create notes on ${chip}`,
  },
  {
    key: 'quiz',
    label: 'Quiz Agent',
    shortLabel: 'Quiz',
    description: 'Practice and test',
    headerDescription: 'MCQs, practice tests, and answer checks',
    emptyTitle: 'Generate a practice quiz',
    emptyDescription:
      'Pick a subject and difficulty. The quiz agent will create questions that help you test recall before exams.',
    placeholder: 'Ask for a quiz on any topic...',
    icon: QuizIcon,
    color: '#2563eb',
    rgb: '37 99 235',
    chips: ['Physics MCQs', 'Chemistry Quiz', 'Math Problems', 'Biology Test', 'History Questions'],
    buildPrompt: (chip) => `Give me 3 MCQs on ${chip}`,
  },
  {
    key: 'doubt',
    label: 'Doubt Solver',
    shortLabel: 'Doubts',
    description: 'Explain concepts',
    headerDescription: 'Step-by-step explanations with examples',
    emptyTitle: 'Clear a difficult concept',
    emptyDescription:
      'Ask the exact part that feels confusing. The doubt solver will break it down in plain language and build up from basics.',
    placeholder: 'Type your doubt or question...',
    icon: BulbIcon,
    color: '#d97706',
    rgb: '217 119 6',
    chips: ["Why does ice float?", "Newton's 2nd Law", 'Photosynthesis', 'DNA vs RNA', 'Integration by parts'],
    buildPrompt: (chip) => chip,
  },
  {
    key: 'planner',
    label: 'Planner Agent',
    shortLabel: 'Planner',
    description: 'Schedule and track',
    headerDescription: 'Study routines, exam plans, and revision blocks',
    emptyTitle: 'Build a realistic study plan',
    emptyDescription:
      'Share your subjects, deadlines, and daily availability. The planner agent will shape it into an achievable schedule.',
    placeholder: 'Describe your study goals...',
    icon: CalendarIcon,
    color: '#7c3aed',
    rgb: '124 58 237',
    chips: ['7-day Physics plan', 'What to study today?', 'Exam in 2 weeks', 'Revision schedule', 'Daily study routine'],
    buildPrompt: (chip) => chip,
  },
]

export const agentMap = Object.fromEntries(agentProfiles.map((agent) => [agent.key, agent]))

export function getAgentProfile(key) {
  return agentMap[key] || agentProfiles[0]
}
