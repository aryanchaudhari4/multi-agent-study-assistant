import { useState } from 'react'
import AgentTabs from '../components/layout/AgentTabs'
import Header from '../components/layout/Header'
import Sidebar from '../components/layout/Sidebar'
import DoubtAgent from '../components/agents/DoubtAgent'
import NotesAgent from '../components/agents/NotesAgent'
import PlannerAgent from '../components/agents/PlannerAgent'
import QuizAgent from '../components/agents/QuizAgent'

export default function Home({ dark, setDark }) {
  const [activeAgent, setActiveAgent] = useState('notes')

  const agents = {
    notes: <NotesAgent dark={dark} />,
    quiz: <QuizAgent dark={dark} />,
    doubt: <DoubtAgent dark={dark} />,
    planner: <PlannerAgent dark={dark} />,
  }

  return (
    <div className="app-shell">
      <Header dark={dark} setDark={setDark} />
      <AgentTabs active={activeAgent} onChange={setActiveAgent} />
      <div className="app-shell__body">
        <Sidebar active={activeAgent} onChange={setActiveAgent} />
        <main className="workspace-main">{agents[activeAgent]}</main>
      </div>
    </div>
  )
}
