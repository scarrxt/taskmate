import { createContext, useContext, useState, useEffect } from 'react'

const TaskContext = createContext()

export const useTaskContext = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTaskContext must be used within TaskProvider')
  }
  return context
}

// Mock Data
const initialProjects = [
  {
    id: 1,
    name: 'Website Redesign',
    description: 'Redesign company website with modern UI',
    color: '#4F46E5',
    progress: 65,
    team: ['John Doe', 'Jane Smith', 'Mike Johnson'],
    deadline: '2025-01-15'
  },
  {
    id: 2,
    name: 'Mobile App Development',
    description: 'Build iOS and Android mobile application',
    color: '#10B981',
    progress: 40,
    team: ['Sarah Williams', 'Tom Brown'],
    deadline: '2025-02-20'
  },
  {
    id: 3,
    name: 'Marketing Campaign',
    description: 'Q1 2025 marketing campaign planning',
    color: '#F59E0B',
    progress: 80,
    team: ['Emily Davis', 'Chris Wilson'],
    deadline: '2025-01-10'
  }
]

const initialTasks = [
  {
    id: 1,
    title: 'Design homepage mockup',
    description: 'Create wireframes and high-fidelity mockups',
    projectId: 1,
    status: 'in-progress',
    priority: 'high',
    assignee: 'Jane Smith',
    deadline: '2025-12-20',
    tags: ['design', 'ui/ux']
  },
  {
    id: 2,
    title: 'Implement authentication',
    description: 'Set up user login and registration',
    projectId: 2,
    status: 'todo',
    priority: 'high',
    assignee: 'John Doe',
    deadline: '2025-12-25',
    tags: ['backend', 'security']
  },
  {
    id: 3,
    title: 'Create social media content',
    description: 'Design posts for Instagram and Twitter',
    projectId: 3,
    status: 'completed',
    priority: 'medium',
    assignee: 'Emily Davis',
    deadline: '2025-12-18',
    tags: ['marketing', 'social']
  },
  {
    id: 4,
    title: 'Write API documentation',
    description: 'Document all API endpoints',
    projectId: 2,
    status: 'in-progress',
    priority: 'medium',
    assignee: 'Tom Brown',
    deadline: '2025-12-22',
    tags: ['documentation', 'backend']
  },
  {
    id: 5,
    title: 'User testing feedback',
    description: 'Collect and analyze user feedback',
    projectId: 1,
    status: 'todo',
    priority: 'low',
    assignee: 'Mike Johnson',
    deadline: '2025-12-30',
    tags: ['testing', 'research']
  }
]

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Full Stack Developer',
    email: 'john@taskmate.com',
    avatar: '👨‍💻',
    tasksCompleted: 45,
    activeProjects: 2
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'UI/UX Designer',
    email: 'jane@taskmate.com',
    avatar: '👩‍🎨',
    tasksCompleted: 38,
    activeProjects: 3
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Project Manager',
    email: 'mike@taskmate.com',
    avatar: '👨‍💼',
    tasksCompleted: 52,
    activeProjects: 3
  },
  {
    id: 4,
    name: 'Emily Davis',
    role: 'Marketing Specialist',
    email: 'emily@taskmate.com',
    avatar: '👩‍💼',
    tasksCompleted: 41,
    activeProjects: 1
  },
  {
    id: 5,
    name: 'Sarah Williams',
    role: 'Frontend Developer',
    email: 'sarah@taskmate.com',
    avatar: '👩‍💻',
    tasksCompleted: 36,
    activeProjects: 2
  }
]

export const TaskProvider = ({ children }) => {
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('taskmate-projects')
    return saved ? JSON.parse(saved) : initialProjects
  })

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('taskmate-tasks')
    return saved ? JSON.parse(saved) : initialTasks
  })

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('taskmate-user')
    return saved ? JSON.parse(saved) : null
  })

  const [team] = useState(teamMembers)

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('taskmate-projects', JSON.stringify(projects))
  }, [projects])

  useEffect(() => {
    localStorage.setItem('taskmate-tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    if (user) {
      localStorage.setItem('taskmate-user', JSON.stringify(user))
    } else {
      localStorage.removeItem('taskmate-user')
    }
  }, [user])

  // Task operations
  const addTask = (task) => {
    const newTask = {
      ...task,
      id: Date.now(),
      status: task.status || 'todo'
    }
    setTasks([...tasks, newTask])
  }

  const updateTask = (taskId, updates) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, ...updates } : task
    ))
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  // Project operations
  const addProject = (project) => {
    const newProject = {
      ...project,
      id: Date.now(),
      progress: 0,
      team: []
    }
    setProjects([...projects, newProject])
  }

  const updateProject = (projectId, updates) => {
    setProjects(projects.map(project =>
      project.id === projectId ? { ...project, ...updates } : project
    ))
  }

  const deleteProject = (projectId) => {
    setProjects(projects.filter(project => project.id !== projectId))
    setTasks(tasks.filter(task => task.projectId !== projectId))
  }

  // Auth operations
  const login = (userData) => {
    setUser(userData)
  }

  const logout = () => {
    setUser(null)
  }

  const value = {
    projects,
    tasks,
    user,
    team,
    addTask,
    updateTask,
    deleteTask,
    addProject,
    updateProject,
    deleteProject,
    login,
    logout
  }

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}
