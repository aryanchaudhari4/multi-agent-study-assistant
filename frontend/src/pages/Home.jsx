import { useState } from 'react'
import Header from '../components/layout/Header'
import Sidebar from '../components/layout/Sidebar'
import AgentTabs from '../components/layout/AgentTabs'
import NotesAgent from '../components/agents/NotesAgent'
import QuizAgent from '../components/agents/QuizAgent'
import DoubtAgent from '../components/agents/DoubtAgent'
import PlannerAgent from '../components/agents/PlannerAgent'

export default function Home({ dark, setDark }) {
  const [activeAgent, setActiveAgent] = useState('notes')

  const AGENTS = {
    notes: <NotesAgent dark={dark} />,
    quiz: <QuizAgent dark={dark} />,
    doubt: <DoubtAgent dark={dark} />,
    planner: <PlannerAgent dark={dark} />,
  }

  return (
    <div className={`flex flex-col h-screen transition-colors duration-300 ${dark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <Header dark={dark} setDark={setDark} />
      <AgentTabs active={activeAgent} onChange={setActiveAgent} dark={dark} />
      <div className="flex flex-1 min-h-0">
        <Sidebar active={activeAgent} onChange={setActiveAgent} dark={dark} />
        <main className={`flex-1 min-h-0 overflow-hidden transition-colors duration-300 ${dark ? 'bg-gray-950' : 'bg-white'}`}>
          {AGENTS[activeAgent]}
        </main>
      </div>
    </div>
  )
}