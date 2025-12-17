import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/app/Dashboard'
import Projects from './pages/app/Projects'
import Tasks from './pages/app/Tasks'
import Team from './pages/app/Team'
import Settings from './pages/app/Settings'

function App() {
  const location = useLocation()
  const isAppRoute = location.pathname.startsWith('/app')
  const isAuthRoute = location.pathname === '/login' || location.pathname === '/signup'

  return (
    <div className="app">
      <ScrollToTop />
      {!isAuthRoute && !isAppRoute && <Navbar />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* App Routes */}
          <Route path="/app/dashboard" element={<Dashboard />} />
          <Route path="/app/projects" element={<Projects />} />
          <Route path="/app/tasks" element={<Tasks />} />
          <Route path="/app/team" element={<Team />} />
          <Route path="/app/settings" element={<Settings />} />
        </Routes>
      </AnimatePresence>
      {!isAppRoute && !isAuthRoute && <Footer />}
    </div>
  )
}

export default App
