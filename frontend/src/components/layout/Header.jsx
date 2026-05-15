import useUserStore from '../../store/userStore'
import { useAuth } from '../../hooks/useAuth'

export default function Header({ dark, setDark }) {
  const { user } = useUserStore()
  const { logoutUser } = useAuth()

  return (
    <div className={`h-14 border-b flex items-center justify-between px-6 transition-colors duration-300 ${dark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
      
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-500/30">
          S
        </div>
        <div>
          <span className={`font-bold text-sm ${dark ? 'text-white' : 'text-gray-900'}`}>StudyMind</span>
          <span className={`text-xs ml-2 ${dark ? 'text-gray-500' : 'text-gray-400'}`}>AI Study Assistant</span>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Agent status */}
        <div className="hidden md:flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <span className={`text-xs ${dark ? 'text-gray-400' : 'text-gray-500'}`}>4 agents online</span>
        </div>

        {/* User */}
        {user && (
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm ${dark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
            <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-bold">
              {user.name?.charAt(0).toUpperCase()}
            </div>
            <span className="hidden md:block">{user.name}</span>
          </div>
        )}

        {/* Dark mode toggle */}
        <button
          onClick={() => setDark(!dark)}
          className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm transition ${dark ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          {dark ? '☀️' : '🌙'}
        </button>

        {/* Logout */}
        <button
          onClick={logoutUser}
          className={`text-xs px-3 py-1.5 rounded-lg transition ${dark ? 'text-gray-400 hover:text-red-400 hover:bg-gray-800' : 'text-gray-500 hover:text-red-500 hover:bg-red-50'}`}
        >
          Logout
        </button>
      </div>
    </div>
  )
}