import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { IconCheckmark, IconChart, IconMessage, IconLink } from '../components/Icons'
import './Home.css'

const Home = () => {
  const features = [
    {
      icon: IconCheckmark,
      title: 'Task Management',
      description: 'Simple task creation, deadlines, priority settings, and tagging.',
      link: '/features'
    },
    {
      icon: IconChart,
      title: 'Project Tracking',
      description: 'Track project progress with boards, lists, and timelines.',
      link: '/features'
    },
    {
      icon: IconMessage,
      title: 'Collaboration',
      description: 'Real-time commenting, file sharing, and notifications for team discussions.',
      link: '/features'
    },
    {
      icon: IconLink,
      title: 'Integrations',
      description: 'Seamlessly integrates with Slack, Google Drive, and more.',
      link: '/features'
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      avatar: '👩‍💼',
      quote: 'TaskMate transformed how our team collaborates. Productivity increased by 40%!',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Project Manager, Innovate Co',
      avatar: '👨‍💼',
      quote: 'The best task management tool we\'ve used. Clean interface and powerful features.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Freelance Designer',
      avatar: '👩‍🎨',
      quote: 'Perfect for managing multiple client projects. Highly recommended!',
      rating: 5
    }
  ]

  const companies = ['Google', 'Microsoft', 'Apple', 'Amazon', 'Meta', 'Netflix']

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <motion.div
      className="home"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>

        <div className="container">
          <motion.div className="hero-content" variants={containerVariants}>
            <motion.div className="hero-text" variants={itemVariants}>
              <span className="hero-badge">✨ Free 30 Days Trial</span>
              <h1 className="hero-title">
                Effortlessly Organize Your Team's
                <span className="gradient-text"> Tasks & Projects</span>
              </h1>
              <p className="hero-description">
                Manage tasks, collaborate seamlessly, and boost your team's productivity 
                with the most intuitive project management tool.
              </p>
              <div className="hero-buttons">
                <Link to="/signup" className="btn btn-primary">
                  Start Free Trial
                </Link>
                <Link to="/features" className="btn btn-secondary">
                  See How It Works
                </Link>
              </div>
            </motion.div>

            <motion.div className="hero-visual" variants={itemVariants}>
              <div className="visual-container">
                <div className="floating-card card-1">
                  <div className="task-preview">
                    <div className="task-header">
                      <span className="task-icon">📋</span>
                      <span className="task-title">Website Redesign</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: '65%' }}></div>
                    </div>
                    <span className="progress-text">65% Complete</span>
                  </div>
                </div>

                <div className="floating-card card-2">
                  <div className="user-avatars">
                    <span className="avatar">👨‍💻</span>
                    <span className="avatar">👩‍🎨</span>
                    <span className="avatar">👨‍💼</span>
                    <span className="avatar-more">+5</span>
                  </div>
                </div>

                <div className="floating-card card-3">
                  <div className="notification">
                    <span className="notif-icon">✅</span>
                    <div>
                      <p className="notif-title">Task Completed</p>
                      <p className="notif-desc">Design mockup approved</p>
                    </div>
                  </div>
                </div>

                <div className="center-graphic">
                  <div className="graphic-circle circle-1"></div>
                  <div className="graphic-circle circle-2"></div>
                  <div className="graphic-circle circle-3"></div>
                  
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Trusted By Companies */}
          <motion.div className="trusted-section" variants={itemVariants}>
            <p className="trusted-text">
              Trusted by individuals and teams at the world's best companies
            </p>
            <div className="company-logos">
              {companies.map((company, index) => (
                <div key={index} className="company-logo">
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Everything You Need to Stay on Track</h2>
            <p>Powerful features to help your team work better together</p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="feature-icon">
                  <feature.icon size={32} color="#6366f1" />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <Link to={feature.link} className="feature-link">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>What Our Users Say</h2>
            <p>Join 10,000+ teams who have transformed their productivity</p>
          </motion.div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <span className="author-avatar">{testimonial.avatar}</span>
                  <div>
                    <p className="author-name">{testimonial.name}</p>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Get Started with TaskMate Today</h2>
            <p>Join thousands of teams who have transformed their productivity</p>
            <div className="cta-buttons">
              <Link to="/signup" className="btn btn-primary">
                Start Free Trial
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Request a Demo
              </Link>
            </div>
            <p className="cta-note">✓ No credit card required • ✓ 30-day free trial • ✓ Cancel anytime</p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home
