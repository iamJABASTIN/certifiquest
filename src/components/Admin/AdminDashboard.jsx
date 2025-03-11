
import React from 'react';
import StatCard from '../UI/StatCard';
import AnalyticsOverview from './AnalyticsOverview';
import CertificateMetrics from './CertificateMetrics';
import StudentProgress from './StudentProgress';
import DepartmentLeaderboard from './DepartmentLeaderboard';
import { Award, Users, BookOpen, Briefcase, BarChart } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">Welcome to the CertiQuest admin dashboard.</p>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <StatCard 
          title="Total Students" 
          value="1,248" 
          icon={Users} 
          change={8.2} 
          changeType="positive" 
        />
        <StatCard 
          title="Total Certifications" 
          value="2,845" 
          icon={Award} 
          change={12.5} 
          changeType="positive" 
        />
        <StatCard 
          title="Active Courses" 
          value="64" 
          icon={BookOpen} 
          change={3.8} 
          changeType="positive" 
        />
        <StatCard 
          title="Projects" 
          value="389" 
          icon={Briefcase} 
          change={-2.3} 
          changeType="negative" 
        />
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        <AnalyticsOverview />
        <DepartmentLeaderboard />
      </div>

      <div className="grid gap-4 grid-cols-1">
        <CertificateMetrics />
      </div>

      <div className="grid gap-4 grid-cols-1">
        <StudentProgress />
      </div>
    </div>
  );
};

export default AdminDashboard;
