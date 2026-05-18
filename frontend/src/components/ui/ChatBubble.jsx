import ReactMarkdown from 'react-markdown'

const AgentAvatar = ({ dark }) => (
  <div style={{
    width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
    background: 'linear-gradient(135deg, #1e1b4b, #312e81)',
    border: '1px solid rgba(99,102,241,0.4)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: '0 0 12px rgba(99,102,241,0.3)',
  }}>
    <svg width="16" height="16" viewBox="0 0 40 40" fill="none">
      <path d="M12 20C12 15.6 15.6 12 20 12C22.4 12 24.6 13 26.2 14.6L23.4 17.4C22.6 16.5 21.4 16 20 16C17.8 16 16 17.8 16 20C16 22.2 17.8 24 20 24C21.4 24 22.6 23.5 23.4 22.6L26.2 25.4C24.6 27 22.4 28 20 28C15.6 28 12 24.4 12 20Z" fill="white"/>
      <path d="M24 20H28M28 20L26 18M28 20L26 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
)

const UserAvatar = ({ name }) => (
  <div style={{
    width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: 'white', fontSize: 12, fontWeight: 900,
    boxShadow: '0 4px 12px rgba(99,102,241,0.4)',
    letterSpacing: '-0.02em',
  }}>
    {name?.charAt(0).toUpperCase() || 'U'}
  </div>
)

export default function ChatBubble({ role, content, dark, userName }) {
  const isUser = role === 'user'

  return (
    <div style={{
      display: 'flex', gap: 10,
      flexDirection: isUser ? 'row-reverse' : 'row',
      alignItems: 'flex-start',
    }}>
      {isUser ? <UserAvatar name={userName || 'U'} /> : <AgentAvatar dark={dark} />}

      <div style={{
        maxWidth: '78%',
        padding: '12px 16px',
        borderRadius: isUser ? '18px 4px 18px 18px' : '4px 18px 18px 18px',
        background: isUser
          ? 'linear-gradient(135deg, #6366f1, #7c3aed)'
          : dark ? 'rgba(255,255,255,0.05)' : '#f4f4f5',
        color: isUser ? 'white' : dark ? 'rgba(255,255,255,0.88)' : '#18181b',
        fontSize: 14, lineHeight: 1.65, fontWeight: 400,
        boxShadow: isUser
          ? '0 4px 20px rgba(99,102,241,0.3)'
          : dark ? '0 2px 12px rgba(0,0,0,0.3)' : '0 2px 8px rgba(0,0,0,0.06)',
        border: isUser
          ? 'none'
          : dark ? '1px solid rgba(255,255,255,0.07)' : '1px solid #e4e4e7',
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}>
        {isUser ? content : (
          <ReactMarkdown components={{
            h1: ({node,...p}) => <h1 style={{fontWeight:900,fontSize:18,margin:'8px 0 6px',color:dark?'white':'#111',letterSpacing:'-0.03em'}} {...p}/>,
            h2: ({node,...p}) => <h2 style={{fontWeight:800,fontSize:15,margin:'10px 0 5px',color:dark?'white':'#111',letterSpacing:'-0.02em'}} {...p}/>,
            h3: ({node,...p}) => <h3 style={{fontWeight:700,fontSize:14,margin:'8px 0 4px',color:dark?'rgba(255,255,255,0.9)':'#222'}} {...p}/>,
            ul: ({node,...p}) => <ul style={{paddingLeft:18,margin:'6px 0',display:'flex',flexDirection:'column',gap:3}} {...p}/>,
            ol: ({node,...p}) => <ol style={{paddingLeft:18,margin:'6px 0',display:'flex',flexDirection:'column',gap:3}} {...p}/>,
            li: ({node,...p}) => <li style={{lineHeight:1.6}} {...p}/>,
            strong: ({node,...p}) => <strong style={{fontWeight:700,color:dark?'white':'#111'}} {...p}/>,
            p: ({node,...p}) => <p style={{margin:'4px 0',lineHeight:1.65}} {...p}/>,
            code: ({node,inline,...p}) => inline
              ? <code style={{background:dark?'rgba(255,255,255,0.12)':'rgba(0,0,0,0.07)',padding:'2px 7px',borderRadius:5,fontSize:12.5,fontFamily:'monospace',color:dark?'#a5f3fc':'#0f172a'}} {...p}/>
              : <pre style={{background:dark?'rgba(0,0,0,0.4)':'#f1f5f9',border:dark?'1px solid rgba(255,255,255,0.1)':'1px solid #e2e8f0',borderRadius:10,padding:'12px 16px',margin:'8px 0',overflow:'auto'}}><code style={{fontSize:13,fontFamily:'monospace',color:dark?'#a5f3fc':'#0f172a'}} {...p}/></pre>,
            blockquote: ({node,...p}) => <blockquote style={{borderLeft:`3px solid ${dark?'rgba(99,102,241,0.5)':'#6366f1'}`,paddingLeft:12,margin:'8px 0',color:dark?'rgba(255,255,255,0.6)':'#666'}} {...p}/>,
          }}>
            {content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  )
}