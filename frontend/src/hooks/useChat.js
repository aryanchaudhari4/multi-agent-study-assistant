import { useState } from 'react'
import axios from 'axios'
import useChatStore from '../store/chatStore'
import useUserStore from '../store/userStore'

const API = 'http://127.0.0.1:8000'

export function useChat(agent) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { histories, addMessage } = useChatStore()
  const { token } = useUserStore()

  const messages = histories[agent] || []

  const sendMessage = async (text) => {
    if (!text.trim()) return

    addMessage(agent, 'user', text)
    setLoading(true)
    setError(null)

    try {
      const history = messages.map(m => ({
        role: m.role,
        content: m.content
      }))

      const res = await axios.post(
        `${API}/chat/`,
        { message: text, agent, history },
        { headers: { Authorization: `Bearer ${token}` } }
      )

      addMessage(agent, 'assistant', res.data.reply)
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return { messages, sendMessage, loading, error }
}