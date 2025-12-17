import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Pricing.css'

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: 'Free',
      price: { monthly: 0, annual: 0 },
      description: 'Perfect for individuals and small teams getting started',
      features: [
        'Up to 5 team members',
        '10 projects',
        'Basic task management',
        'Mobile apps',
        'Email support',
        '1GB storage'
      ],
      cta: 'Start Free',
      popular: false
    },
    {
      name: 'Pro',
      price: { monthly: 12, annual: 10 },
      description: 'For growing teams that need advanced features',
      features: [
        'Unlimited team members',
        'Unlimited projects',
        'Advanced task management',
        'Priority support',
        'Integrations',
        '100GB storage',
        'Custom fields',
        'Analytics & reports'
      ],
      cta: 'Start Pro Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: { monthly: 'Custom', annual: 'Custom' },
      description: 'For large organizations with specific needs',
      features: [
        'Everything in Pro',
        'Dedicated account manager',
        'Custom integrations',
        'SSO & advanced security',
        'Unlimited storage',
        'SLA guarantee',
        'On-premise option',
        'Custom training'
      ],
      cta: 'Contact Us',
      popular: false
    }
  ]

  const faqs = [
    {
      question: 'Can I change plans at any time?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and wire transfer for Enterprise plans.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! Pro and Enterprise plans come with a 30-day free trial. No credit card required.'
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'You can export all your data at any time. After cancellation, data is retained for 90 days.'
    },
    {
      question: 'Do you offer discounts for nonprofits?',
      answer: 'Yes! We offer a 50% discount for registered nonprofit organizations and educational institutions.'
    }
  ]

  const [openFaq, setOpenFaq] = useState(null)

  return (
    <motion.div
      className="pricing-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="container">
          <motion.div
            className="pricing-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Flexible Plans to Fit Your Needs</h1>
            <p>Choose the perfect plan for your team. Start free, upgrade when you're ready.</p>

            {/* Billing Toggle */}
            <div className="billing-toggle">
              <span className={!isAnnual ? 'active' : ''}>Monthly</span>
              <button
                className="toggle-switch"
                onClick={() => setIsAnnual(!isAnnual)}
                aria-label="Toggle billing"
              >
                <span className={`toggle-slider ${isAnnual ? 'annual' : ''}`}></span>
              </button>
              <span className={isAnnual ? 'active' : ''}>
                Annual <span className="save-badge">Save 20%</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pricing-cards-section">
        <div className="container">
          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                
                <div className="plan-header">
                  <h3>{plan.name}</h3>
                  <div className="plan-price">
                    {typeof plan.price.monthly === 'number' ? (
                      <>
                        <span className="currency">$</span>
                        <span className="amount">
                          {isAnnual ? plan.price.annual : plan.price.monthly}
                        </span>
                        <span className="period">/month</span>
                      </>
                    ) : (
                      <span className="custom-price">{plan.price.monthly}</span>
                    )}
                  </div>
                  {isAnnual && typeof plan.price.monthly === 'number' && plan.price.monthly > 0 && (
                    <p className="annual-note">Billed annually at ${plan.price.annual * 12}</p>
                  )}
                  <p className="plan-description">{plan.description}</p>
                </div>

                <ul className="plan-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.cta === 'Contact Us' ? '/contact' : '/signup'}
                  className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="pricing-note"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p>✓ All plans include 30-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Frequently Asked Questions</h2>
            <p>Got questions? We've got answers.</p>
          </motion.div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={`faq-item ${openFaq === index ? 'open' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
                </button>
                <motion.div
                  className="faq-answer"
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pricing-cta">
        <div className="container">
          <motion.div
            className="pricing-cta-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Still Have Questions?</h2>
            <p>Our team is here to help you choose the right plan for your needs.</p>
            <Link to="/contact" className="btn btn-primary">
              Contact Sales
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Pricing
