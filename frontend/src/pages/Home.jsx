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
    <div style={{
      display: 'flex', flexDirection: 'column', height: '100vh',
      background: dark ? '#05050a' : '#f8f8f8',
      fontFamily: "'DM Sans', system-ui, sans-serif",
    }}>
      <Header dark={dark} setDark={setDark} />
      <AgentTabs active={activeAgent} onChange={setActiveAgent} dark={dark} />
      <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
        <Sidebar active={activeAgent} onChange={setActiveAgent} dark={dark} />
        <main style={{
          flex: 1, minHeight: 0, overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
          background: dark
            ? 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.08) 0%, transparent 60%)'
            : 'white',
        }}>
          {AGENTS[activeAgent]}
        </main>
      </div>
    </div>
  )
}