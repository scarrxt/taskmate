import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Blog.css'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Productivity Tips for Remote Teams',
      excerpt: 'Learn how to maximize your team\'s productivity while working remotely with these proven strategies.',
      category: 'Productivity',
      author: 'Sarah Johnson',
      date: 'Dec 15, 2025',
      readTime: '5 min read',
      image: '📚 Productivity'
    },
    {
      id: 2,
      title: 'The Ultimate Guide to Project Management',
      excerpt: 'Everything you need to know about managing projects effectively, from planning to execution.',
      category: 'Project Management',
      author: 'Michael Chen',
      date: 'Dec 12, 2025',
      readTime: '8 min read',
      image: '📊 Management'
    },
    {
      id: 3,
      title: 'How to Build a High-Performing Team',
      excerpt: 'Discover the secrets to building and maintaining a team that consistently delivers results.',
      category: 'Team Building',
      author: 'Emily Rodriguez',
      date: 'Dec 10, 2025',
      readTime: '6 min read',
      image: '👥 Teamwork'
    },
    {
      id: 4,
      title: 'Mastering Task Prioritization',
      excerpt: 'Learn effective techniques to prioritize tasks and focus on what truly matters.',
      category: 'Productivity',
      author: 'David Kim',
      date: 'Dec 8, 2025',
      readTime: '4 min read',
      image: '🎯 Prioritize'
    },
    {
      id: 5,
      title: 'The Future of Work: Hybrid Teams',
      excerpt: 'Exploring the trends and best practices for managing hybrid work environments.',
      category: 'Future of Work',
      author: 'Sarah Johnson',
      date: 'Dec 5, 2025',
      readTime: '7 min read',
      image: '🚀 Future'
    },
    {
      id: 6,
      title: 'Effective Communication in Remote Teams',
      excerpt: 'Tips and tools for maintaining clear communication when your team is distributed.',
      category: 'Communication',
      author: 'Michael Chen',
      date: 'Dec 3, 2025',
      readTime: '5 min read',
      image: '💬 Communication'
    }
  ]

  const categories = ['All', 'Productivity', 'Project Management', 'Team Building', 'Future of Work', 'Communication']

  return (
    <motion.div
      className="blog-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <motion.div
            className="blog-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>TaskMate Blog</h1>
            <p>Insights, tips, and stories about productivity, teamwork, and project management.</p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="blog-categories">
        <div className="container">
          <div className="categories-list">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className={`category-btn ${index === 0 ? 'active' : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="blog-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="blog-image">
                  <span>{post.image}</span>
                </div>
                <div className="blog-content">
                  <span className="blog-category">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-meta">
                    <div className="author-info">
                      <span className="author-avatar">👤</span>
                      <span className="author-name">{post.author}</span>
                    </div>
                    <div className="blog-info">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <a href="#" className="read-more">Read More →</a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="newsletter-section">
        <div className="container">
          <motion.div
            className="newsletter-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Stay Updated</h2>
            <p>Get the latest productivity tips and product updates delivered to your inbox.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
            <p className="newsletter-note">No spam, unsubscribe anytime.</p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Blog
