import { Link } from 'react-router-dom'
import { IconClipboard, IconHeart, IconTwitter, IconLinkedIn, IconFacebook, IconInstagram } from './Icons'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">
                <IconClipboard size={24} color="black" />
              </span>
              <span className="logo-text">TaskMate</span>
            </div>
            <p className="footer-description">
              Effortlessly organize your team's tasks & projects. 
              Boost productivity and streamline collaboration.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Twitter">
                <IconTwitter size={20} color="#ff6b6b" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <IconLinkedIn size={20} color="#0A66C2" />
              </a>
              <a href="#" aria-label="Facebook">
                <IconFacebook size={20} color="#1877F2" />
              </a>
              <a href="#" aria-label="Instagram">
                <IconInstagram size={20} color="#E1306C" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><a href="#">Careers</a></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">API Reference</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">GDPR</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} TaskMate. All rights reserved.</p>
          <p>Made with <IconHeart size={16} color="#ff6b6b" style={{display: 'inline-block', marginRight: '4px'}} /> for productive teams</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
