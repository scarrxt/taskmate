import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTaskContext } from '../context/TaskContext'
import { IconClipboard } from '../components/Icons'
import './Login.css'

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const { login } = useTaskContext()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Mock signup - in real app, would call API
    login({
      name: formData.name,
      email: formData.email,
      avatar: '👤'
    })
    navigate('/app/dashboard')
  }

  const handleDemoSignup = () => {
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
            <h2>Create Your Account</h2>
            <p>Start your 30-day free trial today</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                required
              />
            </div>

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
                placeholder="Create a password"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                placeholder="Confirm your password"
                required
              />
            </div>

            <label className="checkbox-label">
              <input type="checkbox" required />
              <span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
            </label>

            <button type="submit" className="btn btn-primary">
              Create Account
            </button>

            <div className="divider">
              <span>OR</span>
            </div>

            <button type="button" className="btn btn-demo" onClick={handleDemoSignup}>
              ✨ Try Demo Account
            </button>

            <div className="auth-footer">
              <p>Already have an account? <Link to="/login">Log in</Link></p>
            </div>
          </form>
        </motion.div>

        <motion.div
          className="auth-side-panel"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Why Choose TaskMate?</h3>
          <p>The most intuitive project management tool for modern teams.</p>
          <div className="features-list">
            <div className="feature-item">✓ 30-day free trial</div>
            <div className="feature-item">✓ No credit card required</div>
            <div className="feature-item">✓ Cancel anytime</div>
            <div className="feature-item">✓ 24/7 customer support</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Signup
