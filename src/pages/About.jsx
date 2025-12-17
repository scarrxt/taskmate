import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IconTarget, IconLightbulb } from '../components/Icons'
import './About.css'

const About = () => {
  const team = [
    { name: 'Sarah Johnson', role: 'CEO & Founder', avatar: '👩‍💼', bio: '15+ years in productivity software' },
    { name: 'Michael Chen', role: 'CTO', avatar: '👨‍💻', bio: 'Former tech lead at Google' },
    { name: 'Emily Rodriguez', role: 'Head of Design', avatar: '👩‍🎨', bio: 'Award-winning UX designer' },
    { name: 'David Kim', role: 'Head of Product', avatar: '👨‍💼', bio: 'Product strategy expert' }
  ]

  const values = [
    { icon: IconTarget, title: 'Mission-Driven', description: 'We believe in empowering teams to achieve more together' },
    { icon: IconLightbulb, title: 'Innovation First', description: 'Constantly pushing boundaries to deliver the best tools' },
    { icon: '🤝', title: 'Customer Focused', description: 'Your success is our success. We listen and adapt' },
    { icon: '🌍', title: 'Global Impact', description: 'Helping teams worldwide collaborate seamlessly' }
  ]

  const stats = [
    { number: '10,000+', label: 'Active Teams' },
    { number: '500K+', label: 'Tasks Completed' },
    { number: '99.9%', label: 'Uptime' },
    { number: '50+', label: 'Countries' }
  ]

  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Building the Future of Team Collaboration</h1>
            <p>
              TaskMate was born from a simple idea: work should be organized, collaborative, and enjoyable.
              We're on a mission to help teams worldwide achieve more together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <motion.div
              className="story-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Our Story</h2>
              <p>
                Founded in 2020, TaskMate started as a side project by a team of frustrated project managers
                who couldn't find the perfect tool to manage their work. What began as a simple task tracker
                has evolved into a comprehensive collaboration platform used by teams worldwide.
              </p>
              <p>
                Today, we're a team of passionate individuals dedicated to building the best productivity
                software on the market. We believe that great tools shouldn't just help you work—they should
                inspire you to achieve more.
              </p>
            </motion.div>
            <motion.div
              className="story-visual"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="visual-placeholder">
                <span>🚀</span>
                <p>Innovation in Action</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="value-icon">
                  {typeof value.icon === 'function' ? (
                    <value.icon size={32} color="#6366f1" />
                  ) : (
                    value.icon
                  )}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Meet Our Team</h2>
            <p>The talented people behind TaskMate</p>
          </motion.div>

          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="team-member"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="member-avatar">{member.avatar}</div>
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-bio">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <motion.div
            className="about-cta-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Join Us on Our Mission</h2>
            <p>Experience the future of team collaboration today</p>
            <Link to="/signup" className="btn btn-primary">
              Start Free Trial
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default About
