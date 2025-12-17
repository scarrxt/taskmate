import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IconCheckmark, IconChart, IconMessage, IconLink, IconTrendingUp, IconLock } from '../components/Icons'
import './Features.css'

const Features = () => {
  const mainFeatures = [
    {
      icon: IconCheckmark,
      title: 'Task Management',
      description: 'Create, organize, and prioritize tasks with ease. Set deadlines, assign team members, and track progress in real-time.',
      benefits: [
        'Drag-and-drop interface',
        'Priority levels & tags',
        'Custom task fields',
        'Recurring tasks'
      ]
    },
    {
      icon: IconChart,
      title: 'Project Tracking',
      description: 'Visualize your projects with Kanban boards, lists, or timeline views. Get a bird\'s-eye view of all your work.',
      benefits: [
        'Multiple view options',
        'Progress tracking',
        'Milestone management',
        'Project templates'
      ]
    },
    {
      icon: IconMessage,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with real-time updates, comments, and file sharing. Keep everyone on the same page.',
      benefits: [
        '@mentions & notifications',
        'Real-time comments',
        'File attachments',
        'Activity timeline'
      ]
    },
    {
      icon: IconLink,
      title: 'Integrations',
      description: 'Connect TaskMate with your favorite tools. Sync with Slack, Google Drive, Calendar, and more.',
      benefits: [
        'Slack integration',
        'Google Workspace',
        'Microsoft Teams',
        'API access'
      ]
    },
    {
      icon: IconTrendingUp,
      title: 'Analytics & Reports',
      description: 'Gain insights into team productivity with detailed analytics, charts, and customizable reports.',
      benefits: [
        'Performance metrics',
        'Custom dashboards',
        'Export reports',
        'Time tracking'
      ]
    },
    {
      icon: IconLock,
      title: 'Security & Privacy',
      description: 'Enterprise-grade security with encryption, SSO, and compliance certifications. Your data is safe with us.',
      benefits: [
        'End-to-end encryption',
        'SSO integration',
        'GDPR compliant',
        'Regular backups'
      ]
    }
  ]

  return (
    <motion.div
      className="features-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="features-hero">
        <div className="container">
          <motion.div
            className="features-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Powerful Features for Modern Teams</h1>
            <p>Everything you need to manage projects and collaborate effectively, all in one place.</p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-grid-section">
        <div className="container">
          <div className="features-detailed-grid">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-detailed-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="feature-detailed-icon">
                  <feature.icon size={36} color="#6366f1" />
                </div>
                <div className="feature-detailed-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <ul className="feature-benefits">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i}>
                        <span className="check-icon">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="features-cta">
        <div className="container">
          <motion.div
            className="features-cta-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Get Started?</h2>
            <p>Try TaskMate free for 30 days. No credit card required.</p>
            <div className="cta-buttons">
              <Link to="/signup" className="btn btn-primary">
                Start Free Trial
              </Link>
              <Link to="/pricing" className="btn btn-secondary">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Features
