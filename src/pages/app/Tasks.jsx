import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTaskContext } from '../../context/TaskContext'
import AppLayout from '../../components/AppLayout'
import './Tasks.css'

const Tasks = () => {
  const { tasks, updateTask } = useTaskContext()
  const [filter, setFilter] = useState('all')

  const filteredTasks = filter === 'all' 
    ? tasks 
    : tasks.filter(t => t.status === filter)

  const handleStatusChange = (taskId, newStatus) => {
    updateTask(taskId, { status: newStatus })
  }

  return (
    <AppLayout>
      <motion.div
        className="tasks-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="page-header">
          <div>
            <h1>Tasks</h1>
            <p>Manage and track all your tasks</p>
          </div>
          <button className="btn btn-primary">+ New Task</button>
        </div>

        {/* Filters */}
        <div className="task-filters">
          {['all', 'todo', 'in-progress', 'completed'].map((status) => (
            <button
              key={status}
              className={`filter-btn ${filter === status ? 'active' : ''}`}
              onClick={() => setFilter(status)}
            >
              {status === 'all' ? 'All Tasks' : status.replace('-', ' ')}
              <span className="filter-count">
                {status === 'all' ? tasks.length : tasks.filter(t => t.status === status).length}
              </span>
            </button>
          ))}
        </div>

        {/* Tasks List */}
        <div className="tasks-list">
          {filteredTasks.map((task, index) => (
            <motion.div
              key={task.id}
              className="task-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="task-main">
                <input
                  type="checkbox"
                  checked={task.status === 'completed'}
                  onChange={(e) => handleStatusChange(task.id, e.target.checked ? 'completed' : 'todo')}
                  className="task-check"
                />
                <div className="task-details">
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                  <div className="task-meta">
                    <span className={`priority priority-${task.priority}`}>
                      {task.priority}
                    </span>
                    {task.tags && task.tags.map(tag => (
                      <span key={tag} className="task-tag">#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="task-info">
                <div className="task-assignee-info">
                  <span className="assignee-avatar">{task.assignee.charAt(0)}</span>
                  <span className="assignee-name">{task.assignee}</span>
                </div>
                <span className="task-deadline-info">📅 {task.deadline}</span>
                <select
                  value={task.status}
                  onChange={(e) => handleStatusChange(task.id, e.target.value)}
                  className={`status-select status-${task.status}`}
                >
                  <option value="todo">To Do</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AppLayout>
  )
}

export default Tasks
