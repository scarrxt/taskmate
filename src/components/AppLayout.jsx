import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTaskContext } from '../context/TaskContext'
import { IconClipboard, IconDashboard, IconFolder, IconCheckmark, IconPeople, IconSettings, IconLogout } from './Icons'
import './AppLayout.css'

const AppLayout = ({ children }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useTaskContext()

  const navItems = [
    { path: '/app/dashboard', icon: IconDashboard, label: 'Dashboard' },
    { path: '/app/projects', icon: IconFolder, label: 'Projects' },
    { path: '/app/tasks', icon: IconCheckmark, label: 'Tasks' },
    { path: '/app/team', icon: IconPeople, label: 'Team' },
    { path: '/app/settings', icon: IconSettings, label: 'Settings' }
  ]

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="app-layout">
      {/* Sidebar */}
      <aside className="app-sidebar">
        <div className="sidebar-header">
          <Link to="/" className="app-logo">
            <span className="logo-icon">
              <IconClipboard size={24} color="white" />
            </span>
            <span className="logo-text">TaskMate</span>
          </Link>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const IconComponent = item.icon
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
              >
                <span className="nav-icon">
                  <IconComponent size={20} color="currentColor" />
                </span>
                <span className="nav-label">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile">
            <span className="user-avatar">{user?.avatar || 'U'}</span>
            <div className="user-info">
              <p className="user-name">{user?.name || 'User'}</p>
              <p className="user-email">{user?.email || 'user@email.com'}</p>
            </div>
          </div>
          <button className="btn-logout" onClick={handleLogout}>
            <IconLogout size={18} color="currentColor" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="app-main">
        {children}
      </main>
    </div>
  )
}

export default AppLayout
