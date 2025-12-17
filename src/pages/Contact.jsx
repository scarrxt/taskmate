import { useState } from 'react'
import { motion } from 'framer-motion'
import { IconMail, IconPhone, IconMapPin, IconClock, IconTwitter, IconLinkedIn, IconFacebook } from '../components/Icons'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    { icon: IconMail, title: 'Email', value: 'hello@taskmate.com' },
    { icon: IconPhone, title: 'Phone', value: '+234 701 319 2933' },
    { icon: IconMapPin, title: 'Address', value: 'Lagos, NG 100001' },
    { icon: IconClock, title: 'Hours', value: 'Mon-Fri: 9AM-6PM GMT' }
  ]

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Get in Touch</h1>
            <p>Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <motion.div
              className="contact-form-container"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  {submitted ? '✓ Message Sent!' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="contact-info-container"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3>Contact Information</h3>
              <p className="contact-info-description">
                Reach out to us through any of these channels and we'll get back to you promptly.
              </p>

              <div className="contact-info-list">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <div key={index} className="contact-info-item">
                      <div className="info-icon">
                        <IconComponent size={24} color="#6366f1" />
                      </div>
                      <div className="info-content">
                        <h4>{info.title}</h4>
                        <p>{info.value}</p>
                      </div>
                    </div>
                  )
                })}
                
              </div>

              <div className="social-section">
                <h4>Follow Us</h4>
                <div className="social-links-contact">
                  <a href="#" className="social-link">
                    <IconTwitter size={20} color="#000000ff" />
                    Twitter
                  </a>
                  <a href="#" className="social-link">
                    <IconLinkedIn size={20} color="#0A66C2" />
                    LinkedIn
                  </a>
                  <a href="#" className="social-link">
                    <IconFacebook size={20} color="#1877F2" />
                    Facebook
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact
