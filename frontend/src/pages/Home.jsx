import { useState } from 'react'
import Header from '../components/layout/Header'
import Sidebar from '../components/layout/Sidebar'
import AgentTabs from '../components/layout/AgentTabs'
import NotesAgent from '../components/agents/NotesAgent'
import QuizAgent from '../components/agents/QuizAgent'
import DoubtAgent from '../components/agents/DoubtAgent'
import PlannerAgent from '../components/agents/PlannerAgent'

const AGENTS = {
  notes: <NotesAgent />,
  quiz: <QuizAgent />,
  doubt: <DoubtAgent />,
  planner: <PlannerAgent />,
}

export default function Home() {
  const [activeAgent, setActiveAgent] = useState('notes')

  return (
    <div className="flex flex-col h-screen bg-white">
      <Header />
      <AgentTabs active={activeAgent} onChange={setActiveAgent} />
      <div className="flex flex-1 min-h-0">
        <Sidebar active={activeAgent} onChange={setActiveAgent} />
        <main className="flex-1 min-h-0 overflow-hidden">
          {AGENTS[activeAgent]}
        </main>
      </div>
    </div>
  )
}