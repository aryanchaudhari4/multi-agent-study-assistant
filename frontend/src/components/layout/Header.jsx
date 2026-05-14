import useUserStore from '../../store/userStore'
import { useAuth } from '../../hooks/useAuth'

export default function Header() {
  const { user } = useUserStore()
  const { logoutUser } = useAuth()

  return (
    <div className="h-14 border-b border-gray-200 flex items-center justify-between px-6 bg-white">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-sm font-bold">
          S
        </div>
        <span className="font-semibold text-gray-800">StudyMind</span>
        <span className="text-xs text-gray-400 ml-1">AI Study Assistant</span>
      </div>

      <div className="flex items-center gap-4">
        {user && (
          <span className="text-sm text-gray-600">
            Hi, <span className="font-medium">{user.name}</span>
          </span>
        )}
        <button
          onClick={logoutUser}
          className="text-sm text-gray-500 hover:text-red-500 transition"
        >
          Logout
        </button>
      </div>
    </div>
  )
}