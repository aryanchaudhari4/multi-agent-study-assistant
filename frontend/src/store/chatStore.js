import { create } from 'zustand'

const useChatStore = create((set, get) => ({
  histories: {
    notes: [],
    quiz: [],
    doubt: [],
    planner: [],
  },

  addMessage: (agent, role, content) => {
    const current = get().histories[agent] || []
    set({
      histories: {
        ...get().histories,
        [agent]: [...current, { role, content }],
      }
    })
  },

  clearHistory: (agent) => {
    set({
      histories: {
        ...get().histories,
        [agent]: [],
      }
    })
  },
}))

export default useChatStore