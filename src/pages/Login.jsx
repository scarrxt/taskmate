import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTaskContext } from '../context/TaskContext'
import { IconClipboard } from '../components/Icons'
import './Login.css'

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const { login } = useTaskContext()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Mock login - in real app, would call API
    login({
      name: 'Demo User',
      email: formData.email,
      avatar: '👤'
    })
    navigate('/app/dashboard')
  }

  const handleDemoLogin = () => {
    login({
      name: 'Demo User',
      email: 'demo@taskmate.com',
      avatar: '👤'
    })
    navigate('/app/dashboard')
  }

  return (
    <div className="auth-page">
      <div className="auth-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <div className="auth-container">
        <motion.div
          className="auth-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="auth-header">
            <Link to="/" className="auth-logo">
              <span className="logo-icon">
                <IconClipboard size={24} color="black" />
              </span>
              <span className="logo-text">TaskMate</span>
            </Link>
            <h2>Welcome Back</h2>
            <p>Log in to your account to continue</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-primary">
              Log In
            </button>

            <div className="divider">
              <span>OR</span>
            </div>

            <button type="button" className="btn btn-demo" onClick={handleDemoLogin}>
              ✨ Try Demo Account
            </button>

            <div className="auth-footer">
              <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </div>
          </form>
        </motion.div>

        <motion.div
          className="auth-side-panel"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Join 10,000+ Teams</h3>
          <p>Organize tasks, collaborate seamlessly, and boost your team's productivity.</p>
          <div className="features-list">
            <div className="feature-item">✓ Unlimited projects & tasks</div>
            <div className="feature-item">✓ Real-time collaboration</div>
            <div className="feature-item">✓ Advanced analytics</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Login
