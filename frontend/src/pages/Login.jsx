import { useState, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'

export default function Login() {
  const { login, register } = useAuth()
  const [isLogin, setIsLogin] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const handleSubmit = async () => {
    setError('')
    setLoading(true)
    try {
      if (isLogin) {
        await login(email, password)
      } else {
        await register(name, email, password)
        await login(email, password)
      }
    } catch (err) {
      setError(err.response?.data?.detail || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-300 ${dark ? 'bg-gray-950' : 'bg-gradient-to-br from-indigo-50 via-white to-purple-50'}`}>

      {/* Dark mode toggle */}
      <button
        onClick={() => setDark(!dark)}
        className={`fixed top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-lg transition ${dark ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-white text-gray-700 shadow hover:bg-gray-100'}`}
      >
        {dark ? '☀️' : '🌙'}
      </button>

      <div className={`w-full max-w-md rounded-2xl p-8 transition-colors duration-300 ${dark ? 'bg-gray-900 border border-gray-800' : 'bg-white shadow-xl'}`}>

        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/30">
            S
          </div>
          <div>
            <h1 className={`font-bold text-xl ${dark ? 'text-white' : 'text-gray-900'}`}>StudyMind</h1>
            <p className={`text-xs ${dark ? 'text-gray-400' : 'text-gray-500'}`}>Multi-Agent AI Study Assistant</p>
          </div>
        </div>

        {/* Heading */}
        <h2 className={`text-2xl font-bold mb-1 ${dark ? 'text-white' : 'text-gray-900'}`}>
          {isLogin ? 'Welcome back 👋' : 'Create account 🚀'}
        </h2>
        <p className={`text-sm mb-6 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
          {isLogin ? 'Login to continue studying' : 'Join and start learning with AI'}
        </p>

        {/* Toggle */}
        <div className={`flex rounded-xl p-1 mb-6 ${dark ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${
              isLogin
                ? 'bg-indigo-600 text-white shadow'
                : dark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${
              !isLogin
                ? 'bg-indigo-600 text-white shadow'
                : dark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-3">
          {!isLogin && (
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`px-4 py-3 rounded-xl text-sm outline-none transition ${dark ? 'bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:border-indigo-500' : 'bg-gray-50 text-gray-900 border border-gray-200 focus:border-indigo-400'}`}
            />
          )}
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`px-4 py-3 rounded-xl text-sm outline-none transition ${dark ? 'bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:border-indigo-500' : 'bg-gray-50 text-gray-900 border border-gray-200 focus:border-indigo-400'}`}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            className={`px-4 py-3 rounded-xl text-sm outline-none transition ${dark ? 'bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:border-indigo-500' : 'bg-gray-50 text-gray-900 border border-gray-200 focus:border-indigo-400'}`}
          />

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl text-sm font-semibold disabled:opacity-50 transition shadow-lg shadow-indigo-500/20 mt-1"
          >
            {loading ? 'Please wait...' : isLogin ? '→ Login' : '→ Create Account'}
          </button>
        </div>

        {/* Agent pills */}
        <div className="flex flex-wrap gap-2 mt-6 justify-center">
          {['📝 Notes', '❓ Quiz', '💡 Doubt Solver', '📅 Planner'].map(a => (
            <span key={a} className={`text-xs px-3 py-1 rounded-full ${dark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-500'}`}>
              {a}
            </span>
          ))}
        </div>

        <p className={`text-center text-xs mt-4 ${dark ? 'text-gray-600' : 'text-gray-400'}`}>
          Final Year Project — Multi-Agent AI Study Assistant
        </p>
      </div>
    </div>
  )
}