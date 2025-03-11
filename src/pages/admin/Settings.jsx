
import React, { useState } from 'react';
import AdminLayout from '../../components/Layout/AdminLayout';
import Card from '../../components/UI/Card';
import { 
  Save, 
  User, 
  Bell, 
  Shield, 
  Database, 
  BookOpen, 
  Award, 
  Briefcase,
  Settings as SettingsIcon,
  CheckCircle
} from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [notificationSaved, setNotificationSaved] = useState(false);

  const handleSaveNotifications = () => {
    setNotificationSaved(true);
    setTimeout(() => setNotificationSaved(false), 3000);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">Manage your account settings and preferences.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <Card className="w-full md:w-64 p-0 h-fit">
            <div className="p-4 border-b">
              <h3 className="font-medium">Settings</h3>
            </div>
            <div className="p-2">
              <nav className="flex flex-col gap-1">
                <button 
                  className={`flex items-center gap-3 p-2 text-sm rounded-md ${activeTab === 'profile' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent'}`}
                  onClick={() => setActiveTab('profile')}
                >
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </button>
                <button 
                  className={`flex items-center gap-3 p-2 text-sm rounded-md ${activeTab === 'notifications' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent'}`}
                  onClick={() => setActiveTab('notifications')}
                >
                  <Bell className="h-4 w-4" />
                  <span>Notifications</span>
                </button>
                <button 
                  className={`flex items-center gap-3 p-2 text-sm rounded-md ${activeTab === 'security' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent'}`}
                  onClick={() => setActiveTab('security')}
                >
                  <Shield className="h-4 w-4" />
                  <span>Security</span>
                </button>
                <button 
                  className={`flex items-center gap-3 p-2 text-sm rounded-md ${activeTab === 'data' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent'}`}
                  onClick={() => setActiveTab('data')}
                >
                  <Database className="h-4 w-4" />
                  <span>Data Management</span>
                </button>
                <div className="my-2 border-t" />
                <button 
                  className={`flex items-center gap-3 p-2 text-sm rounded-md ${activeTab === 'certifications' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent'}`}
                  onClick={() => setActiveTab('certifications')}
                >
                  <Award className="h-4 w-4" />
                  <span>Certification Settings</span>
                </button>
                <button 
                  className={`flex items-center gap-3 p-2 text-sm rounded-md ${activeTab === 'courses' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent'}`}
                  onClick={() => setActiveTab('courses')}
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Course Settings</span>
                </button>
                <button 
                  className={`flex items-center gap-3 p-2 text-sm rounded-md ${activeTab === 'projects' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent'}`}
                  onClick={() => setActiveTab('projects')}
                >
                  <Briefcase className="h-4 w-4" />
                  <span>Project Settings</span>
                </button>
                <button 
                  className={`flex items-center gap-3 p-2 text-sm rounded-md ${activeTab === 'system' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent'}`}
                  onClick={() => setActiveTab('system')}
                >
                  <SettingsIcon className="h-4 w-4" />
                  <span>System Settings</span>
                </button>
              </nav>
            </div>
          </Card>

          {activeTab === 'profile' && (
            <Card className="flex-1 p-6">
              <h3 className="text-lg font-semibold mb-4">Profile Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Admin User</h4>
                    <p className="text-sm text-muted-foreground">admin@certiquest.com</p>
                  </div>
                  <button className="ml-auto text-sm text-primary">Change Avatar</button>
                </div>
                
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                      defaultValue="Admin"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                      defaultValue="User"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                      defaultValue="admin@certiquest.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium mb-1">Role</label>
                    <select 
                      id="role" 
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option>Administrator</option>
                      <option>Manager</option>
                      <option>Analyst</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 gap-2">
                    <Save className="h-4 w-4" />
                    Save Changes
                  </button>
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'notifications' && (
            <Card className="flex-1 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Notification Settings</h3>
                {notificationSaved && (
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    <span>Settings saved</span>
                  </div>
                )}
              </div>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-medium mb-2">Email Notifications</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">New Student Registration</p>
                        <p className="text-xs text-muted-foreground">Receive notifications when new students register</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Certification Completion</p>
                        <p className="text-xs text-muted-foreground">Receive notifications when certifications are completed</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Project Updates</p>
                        <p className="text-xs text-muted-foreground">Receive notifications about project status changes</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="border-b pb-4">
                  <h4 className="font-medium mb-2">System Notifications</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Weekly Reports</p>
                        <p className="text-xs text-muted-foreground">Receive weekly summary reports</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">System Updates</p>
                        <p className="text-xs text-muted-foreground">Receive notifications about system updates</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <button 
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 gap-2"
                    onClick={handleSaveNotifications}
                  >
                    <Save className="h-4 w-4" />
                    Save Preferences
                  </button>
                </div>
              </div>
            </Card>
          )}

          {/* Display placeholders for other tabs */}
          {activeTab !== 'profile' && activeTab !== 'notifications' && (
            <Card className="flex-1 p-6">
              <h3 className="text-lg font-semibold mb-4">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Settings</h3>
              <p className="text-muted-foreground mb-4">
                Configure your {activeTab} settings and preferences.
              </p>
              <div className="border rounded-md p-8 text-center bg-muted/20">
                <p className="text-muted-foreground">
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} settings configuration interface will be implemented soon.
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Settings;
