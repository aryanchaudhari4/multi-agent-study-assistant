import { LogOutIcon, LogoMark, MoonIcon, SunIcon } from '../ui/Icons'
import { useAuth } from '../../hooks/useAuth'
import useUserStore from '../../store/userStore'

export default function Header({ dark, setDark }) {
  const { user } = useUserStore()
  const { logoutUser } = useAuth()
  const displayName = user?.name || 'Student'

  return (
    <header className="top-header">
      <div className="brand-lockup" aria-label="StudyMind">
        <LogoMark size={34} />
        <div>
          <div className="brand-lockup__name">StudyMind</div>
          <div className="brand-lockup__meta">AI Study Assistant</div>
        </div>
      </div>

      <div className="top-header__actions">
        <div className="status-pill">
          <span />
          <strong>4</strong> agents online
        </div>

        <div className="user-chip">
          <div className="user-chip__avatar">{displayName.charAt(0).toUpperCase()}</div>
          <span>{displayName}</span>
        </div>

        <button
          type="button"
          className="icon-button"
          onClick={() => setDark(!dark)}
          aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          title={dark ? 'Light mode' : 'Dark mode'}
        >
          {dark ? <SunIcon /> : <MoonIcon />}
        </button>

        <button
          type="button"
          className="icon-button icon-button--danger"
          onClick={logoutUser}
          aria-label="Log out"
          title="Log out"
        >
          <LogOutIcon />
        </button>
      </div>
    </header>
  )
}
