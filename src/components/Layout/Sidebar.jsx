
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BarChart, 
  Award, 
  Users, 
  FileText, 
  Settings, 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  Briefcase,
  BookOpen
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { 
    label: 'Dashboard', 
    icon: Home, 
    href: '/admin' 
  },
  { 
    label: 'Analytics', 
    icon: BarChart, 
    href: '/admin/analytics' 
  },
  { 
    label: 'Certifications', 
    icon: Award, 
    href: '/admin/certifications' 
  },
  { 
    label: 'Students', 
    icon: Users, 
    href: '/admin/students' 
  },
  { 
    label: 'Projects', 
    icon: Briefcase, 
    href: '/admin/projects' 
  },
  { 
    label: 'Courses', 
    icon: BookOpen, 
    href: '/admin/courses' 
  },
  { 
    label: 'Reports', 
    icon: FileText, 
    href: '/admin/reports' 
  },
  { 
    label: 'Settings', 
    icon: Settings, 
    href: '/admin/settings',
    divider: true
  }
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div
      className={cn(
        'fixed inset-y-0 left-0 z-20 flex flex-col border-r bg-card transition-all duration-300',
        collapsed ? 'w-[70px]' : 'w-[240px]'
      )}
    >
      <div className="flex h-16 items-center border-b px-4 justify-between">
        {!collapsed && (
          <Link to="/" className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <Award className="h-5 w-5 text-white" />
            </span>
            <span className="font-bold tracking-tight">CertiQuest</span>
          </Link>
        )}
        {collapsed && (
          <Link to="/" className="flex items-center mx-auto">
            <span className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <Award className="h-5 w-5 text-white" />
            </span>
          </Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-md p-1.5 hover:bg-accent hidden md:flex"
        >
          {collapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </button>
      </div>

      <div className="flex-1 overflow-auto py-4">
        <nav className="grid gap-1 px-2">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.href;
            
            return (
              <React.Fragment key={item.href}>
                {item.divider && <div className="my-2 border-t border-border mx-2" />}
                <Link
                  to={item.href}
                  className={cn(
                    'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              </React.Fragment>
            );
          })}
        </nav>
      </div>

      <div className="border-t p-4">
        <div className={cn('flex items-center gap-3', collapsed && 'justify-center')}>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
            <span className="text-sm font-semibold text-primary-foreground">A</span>
          </div>
          {!collapsed && (
            <div>
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-muted-foreground">admin@certiquest.com</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
