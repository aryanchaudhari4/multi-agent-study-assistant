import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import useUserStore from '../store/userStore'
import { API_URL } from '../lib/api'

export function useAuth() {
  const { setToken, setUser, logout, token } = useUserStore()
  const navigate = useNavigate()

  const register = async (name, email, password) => {
    const res = await axios.post(`${API_URL}/auth/register`, {
      name,
      email,
      password
    })
    return res.data
  }

  const login = async (email, password) => {
    const form = new FormData()
    form.append('username', email)
    form.append('password', password)
    const res = await axios.post(`${API_URL}/auth/login`, form)
    setToken(res.data.access_token)
    setUser({ name: res.data.user_name, email })
    navigate('/app')
  }

  const logoutUser = () => {
    logout()
    navigate('/login')
  }

  return { register, login, logoutUser, token }
}
