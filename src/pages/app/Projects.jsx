import { motion } from 'framer-motion'
import { useTaskContext } from '../../context/TaskContext'
import AppLayout from '../../components/AppLayout'
import './Projects.css'

const Projects = () => {
  const { projects } = useTaskContext()

  return (
    <AppLayout>
      <motion.div
        className="projects-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="page-header">
          <div>
            <h1>Projects</h1>
            <p>Manage and track all your projects in one place</p>
          </div>
          <button className="btn btn-primary">+ New Project</button>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="project-card-header">
                <div
                  className="project-color-badge"
                  style={{ background: project.color }}
                ></div>
                <button className="project-menu">⋯</button>
              </div>
              
              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <div className="project-stats">
                <div className="stat-item">
                  <span className="stat-label">Progress</span>
                  <span className="stat-value">{project.progress}%</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Team</span>
                  <span className="stat-value">{project.team.length}</span>
                </div>
              </div>

              <div className="project-progress-bar">
                <div
                  className="project-progress-fill"
                  style={{ width: `${project.progress}%`, background: project.color }}
                ></div>
              </div>

              <div className="project-card-footer">
                <div className="project-team-avatars">
                  {project.team.slice(0, 3).map((member, i) => (
                    <span key={i} className="avatar-small" title={member}>
                      {member.charAt(0)}
                    </span>
                  ))}
                  {project.team.length > 3 && (
                    <span className="avatar-more">+{project.team.length - 3}</span>
                  )}
                </div>
                <span className="project-due">📅 {project.deadline}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AppLayout>
  )
}

export default Projects
