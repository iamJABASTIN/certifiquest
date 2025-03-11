
import React from 'react';
import AdminLayout from '../../components/Layout/AdminLayout';
import Card from '../../components/UI/Card';
import { BarChart, PieChart, Pie, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Analytics = () => {
  // Sample data for charts
  const certificationTypeData = [
    { name: 'Course', value: 45 },
    { name: 'Event', value: 25 },
    { name: 'Workshop', value: 20 },
    { name: 'Online Platform', value: 10 },
  ];

  const monthlyData = [
    { name: 'Jan', certifications: 65, students: 42 },
    { name: 'Feb', certifications: 59, students: 35 },
    { name: 'Mar', certifications: 80, students: 55 },
    { name: 'Apr', certifications: 81, students: 60 },
    { name: 'May', certifications: 56, students: 48 },
    { name: 'Jun', certifications: 55, students: 40 },
    { name: 'Jul', certifications: 40, students: 30 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
          <p className="text-muted-foreground">Detailed analytics about certifications and student activities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Certification Types Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={certificationTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {certificationTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Monthly Activity</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={monthlyData}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="certifications" fill="#0088FE" name="Certifications" />
                <Bar dataKey="students" fill="#00C49F" name="Active Students" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Performance Analytics</h3>
          <p className="text-muted-foreground mb-4">
            Detailed insights on certification completion rates, student engagement, and platform growth metrics.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-primary/10 rounded-lg p-4">
              <h4 className="font-medium text-sm text-muted-foreground">Completion Rate</h4>
              <p className="text-2xl font-bold">78.5%</p>
              <span className="text-sm text-green-500">+2.3% from last month</span>
            </div>
            <div className="bg-primary/10 rounded-lg p-4">
              <h4 className="font-medium text-sm text-muted-foreground">Average Certifications/Student</h4>
              <p className="text-2xl font-bold">3.2</p>
              <span className="text-sm text-green-500">+0.4 from last month</span>
            </div>
            <div className="bg-primary/10 rounded-lg p-4">
              <h4 className="font-medium text-sm text-muted-foreground">New Registrations</h4>
              <p className="text-2xl font-bold">142</p>
              <span className="text-sm text-red-500">-12 from last month</span>
            </div>
          </div>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Analytics;
