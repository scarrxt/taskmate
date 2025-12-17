import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTaskContext } from '../../context/TaskContext'
import AppLayout from '../../components/AppLayout'
import { IconFolder, IconCheckmark, IconClock, IconPeople } from '../../components/Icons'
import './Dashboard.css'

const Dashboard = () => {
  const { projects, tasks, user } = useTaskContext()

  const stats = [
    {
      icon: IconFolder,
      label: 'Total Projects',
      value: projects.length,
      change: '+2 this month',
      color: '#4F46E5'
    },
    {
      icon: IconCheckmark,
      label: 'Completed Tasks',
      value: tasks.filter(t => t.status === 'completed').length,
      change: '+12 this week',
      color: '#10B981'
    },
    {
      icon: IconClock,
      label: 'In Progress',
      value: tasks.filter(t => t.status === 'in-progress').length,
      change: '5 active',
      color: '#F59E0B'
    },
    {
      icon: IconPeople,
      label: 'Team Members',
      value: 5,
      change: 'All active',
      color: '#8B5CF6'
    }
  ]

  const recentTasks = tasks.slice(0, 5)
  const activeProjects = projects.slice(0, 3)

  return (
    <AppLayout>
      <motion.div
        className="dashboard"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="dashboard-header">
          <div>
            <h1>Welcome back, {user?.name || 'User'}! 👋</h1>
            <p>Here's what's happening with your projects today.</p>
          </div>
          <Link to="/app/tasks" className="btn btn-primary">
            + New Task
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="stat-icon" style={{ background: `${stat.color}20`, color: stat.color }}>
                  <IconComponent size={28} color={stat.color} />
                </div>
                <div className="stat-content">
                  <p className="stat-label">{stat.label}</p>
                  <h3 className="stat-value">{stat.value}</h3>
                <span className="stat-change">{stat.change}</span>
              </div>
            </motion.div>
            )
          })}
        </div>

        <div className="dashboard-content">
          {/* Active Projects */}
          <motion.section
            className="dashboard-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <div className="section-header">
              <h2>Active Projects</h2>
              <Link to="/app/projects" className="view-all">View All →</Link>
            </div>
            <div className="projects-list">
              {activeProjects.map((project) => (
                <div key={project.id} className="project-card-dash">
                  <div className="project-header-dash">
                    <div
                      className="project-color"
                      style={{ background: project.color }}
                    ></div>
                    <div className="project-info-dash">
                      <h4>{project.name}</h4>
                      <p>{project.description}</p>
                    </div>
                  </div>
                  <div className="project-progress">
                    <div className="progress-info">
                      <span>Progress</span>
                      <span className="progress-percentage">{project.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${project.progress}%`, background: project.color }}
                      ></div>
                    </div>
                  </div>
                  <div className="project-footer-dash">
                    <div className="project-team">
                      {project.team.slice(0, 3).map((member, i) => (
                        <span key={i} className="team-avatar" title={member}>
                          {member.charAt(0)}
                        </span>
                      ))}
                      {project.team.length > 3 && (
                        <span className="team-avatar-more">+{project.team.length - 3}</span>
                      )}
                    </div>
                    <span className="project-deadline">📅 {project.deadline}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Recent Tasks */}
          <motion.section
            className="dashboard-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <div className="section-header">
              <h2>Recent Tasks</h2>
              <Link to="/app/tasks" className="view-all">View All →</Link>
            </div>
            <div className="tasks-list-dash">
              {recentTasks.map((task) => (
                <div key={task.id} className="task-item-dash">
                  <div className="task-checkbox">
                    <input
                      type="checkbox"
                      checked={task.status === 'completed'}
                      readOnly
                    />
                  </div>
                  <div className="task-content-dash">
                    <h4>{task.title}</h4>
                    <div className="task-meta-dash">
                      <span className={`task-priority priority-${task.priority}`}>
                        {task.priority}
                      </span>
                      <span className="task-assignee">👤 {task.assignee}</span>
                      <span className="task-deadline-dash">📅 {task.deadline}</span>
                    </div>
                  </div>
                  <span className={`task-status status-${task.status}`}>
                    {task.status.replace('-', ' ')}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </motion.div>
    </AppLayout>
  )
}

export default Dashboard
