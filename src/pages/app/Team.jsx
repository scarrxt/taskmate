import { motion } from 'framer-motion'
import { useTaskContext } from '../../context/TaskContext'
import AppLayout from '../../components/AppLayout'
import { IconMessage } from '../../components/Icons'
import './Team.css'

const Team = () => {
  const { team } = useTaskContext()

  return (
    <AppLayout>
      <motion.div
        className="team-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="page-header">
          <div>
            <h1>Team Members</h1>
            <p>Collaborate with your team members</p>
          </div>
          <button className="btn btn-primary">+ Invite Member</button>
        </div>

        <div className="team-grid">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              className="team-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="team-card-header">
                <div className="member-avatar-large">{member.avatar}</div>
                <button className="member-menu">⋯</button>
              </div>

              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-email">{member.email}</p>

              <div className="member-stats">
                <div className="member-stat">
                  <span className="stat-number">{member.tasksCompleted}</span>
                  <span className="stat-label">Tasks Completed</span>
                </div>
                <div className="member-stat">
                  <span className="stat-number">{member.activeProjects}</span>
                  <span className="stat-label">Active Projects</span>
                </div>
              </div>

              <button className="btn-message">
                <IconMessage size={18} color="currentColor" /> Message
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AppLayout>
  )
}

export default Team
