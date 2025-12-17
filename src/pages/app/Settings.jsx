import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTaskContext } from '../../context/TaskContext'
import AppLayout from '../../components/AppLayout'
import { IconSettings as SettingsIcon, IconMail, IconLock, IconClock } from '../../components/Icons'
import './Settings.css'

const Settings = () => {
  const { user } = useTaskContext()
  const [activeTab, setActiveTab] = useState('profile')

  const tabs = [
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'notifications', label: 'Notifications', icon: IconMail },
    { id: 'security', label: 'Security', icon: IconLock },
    { id: 'preferences', label: 'Preferences', icon: SettingsIcon }
  ]

  return (
    <AppLayout>
      <motion.div
        className="settings-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="page-header">
          <div>
            <h1>Settings</h1>
            <p>Manage your account settings and preferences</p>
          </div>
        </div>

        <div className="settings-content">
          <div className="settings-sidebar">
            {tabs.map((tab) => {
              const IconComponent = typeof tab.icon === 'function' ? tab.icon : null
              return (
                <button
                  key={tab.id}
                  className={`settings-tab ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="tab-icon">
                    {IconComponent ? (
                      <IconComponent size={20} color="currentColor" />
                    ) : (
                      tab.icon
                    )}
                  </span>
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>

          <div className="settings-main">
            {activeTab === 'profile' && (
              <motion.div
                className="settings-section"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2>Profile Settings</h2>
                <div className="settings-card">
                  <div className="profile-avatar-section">
                    <div className="profile-avatar-large">{user?.avatar || '👤'}</div>
                    <button className="btn btn-secondary">Change Avatar</button>
                  </div>

                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" defaultValue={user?.name || ''} />
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" defaultValue={user?.email || ''} />
                  </div>

                  <div className="form-group">
                    <label>Job Title</label>
                    <input type="text" placeholder="e.g. Project Manager" />
                  </div>

                  <div className="form-group">
                    <label>Bio</label>
                    <textarea rows="4" placeholder="Tell us about yourself..."></textarea>
                  </div>

                  <button className="btn btn-primary">Save Changes</button>
                </div>
              </motion.div>
            )}

            {activeTab === 'notifications' && (
              <motion.div
                className="settings-section"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2>Notification Preferences</h2>
                <div className="settings-card">
                  <div className="setting-item">
                    <div>
                      <h4>Email Notifications</h4>
                      <p>Receive email updates about your tasks and projects</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" defaultChecked />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="setting-item">
                    <div>
                      <h4>Task Reminders</h4>
                      <p>Get reminders for upcoming task deadlines</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" defaultChecked />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="setting-item">
                    <div>
                      <h4>Team Updates</h4>
                      <p>Notifications when team members comment or update tasks</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" defaultChecked />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="setting-item">
                    <div>
                      <h4>Weekly Summary</h4>
                      <p>Receive a weekly summary of your productivity</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'security' && (
              <motion.div
                className="settings-section"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2>Security Settings</h2>
                <div className="settings-card">
                  <div className="form-group">
                    <label>Current Password</label>
                    <input type="password" placeholder="Enter current password" />
                  </div>

                  <div className="form-group">
                    <label>New Password</label>
                    <input type="password" placeholder="Enter new password" />
                  </div>

                  <div className="form-group">
                    <label>Confirm New Password</label>
                    <input type="password" placeholder="Confirm new password" />
                  </div>

                  <button className="btn btn-primary">Update Password</button>

                  <div className="divider-settings"></div>

                  <div className="setting-item">
                    <div>
                      <h4>Two-Factor Authentication</h4>
                      <p>Add an extra layer of security to your account</p>
                    </div>
                    <button className="btn btn-secondary">Enable</button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'preferences' && (
              <motion.div
                className="settings-section"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2>Preferences</h2>
                <div className="settings-card">
                  <div className="form-group">
                    <label>Language</label>
                    <select>
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Timezone</label>
                    <select>
                      <option>UTC-8 (Pacific Time)</option>
                      <option>UTC-5 (Eastern Time)</option>
                      <option>UTC+0 (London)</option>
                      <option>UTC+1 (Paris)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Date Format</label>
                    <select>
                      <option>MM/DD/YYYY</option>
                      <option>DD/MM/YYYY</option>
                      <option>YYYY-MM-DD</option>
                    </select>
                  </div>

                  <div className="setting-item">
                    <div>
                      <h4>Dark Mode</h4>
                      <p>Use dark theme across the application</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <button className="btn btn-primary">Save Preferences</button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </AppLayout>
  )
}

export default Settings
