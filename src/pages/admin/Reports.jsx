
import React from 'react';
import AdminLayout from '../../components/Layout/AdminLayout';
import Card from '../../components/UI/Card';
import { FileText, Download, Share2, Calendar, Filter } from 'lucide-react';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';

const Reports = () => {
  const monthlyProgressData = [
    { name: 'Jan', certifications: 65, projects: 28 },
    { name: 'Feb', certifications: 59, projects: 32 },
    { name: 'Mar', certifications: 80, projects: 37 },
    { name: 'Apr', certifications: 81, projects: 39 },
    { name: 'May', certifications: 56, projects: 42 },
    { name: 'Jun', certifications: 55, projects: 35 },
    { name: 'Jul', certifications: 40, projects: 30 },
  ];

  const departmentPerformanceData = [
    { name: 'Computer Science', score: 85 },
    { name: 'Information Technology', score: 78 },
    { name: 'Data Science', score: 92 },
    { name: 'Cybersecurity', score: 90 },
    { name: 'Artificial Intelligence', score: 88 },
  ];

  const categoryDistributionData = [
    { name: 'Course Certifications', value: 45 },
    { name: 'Event Certifications', value: 20 },
    { name: 'Workshop Certifications', value: 15 },
    { name: 'Online Platform', value: 20 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const reports = [
    { id: 1, name: 'Monthly Progress Report', date: '2023-07-01', type: 'PDF', size: '2.4 MB' },
    { id: 2, name: 'Department Performance Analysis', date: '2023-07-01', type: 'XLSX', size: '1.8 MB' },
    { id: 3, name: 'Certification Completion Rates', date: '2023-06-15', type: 'PDF', size: '3.2 MB' },
    { id: 4, name: 'Student Engagement Metrics', date: '2023-06-01', type: 'PDF', size: '2.9 MB' },
    { id: 5, name: 'Project Success Analysis', date: '2023-05-15', type: 'XLSX', size: '4.1 MB' },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Reports</h2>
            <p className="text-muted-foreground">View and generate analytics reports.</p>
          </div>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4">
            Generate New Report
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Monthly Progress</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={monthlyProgressData}
                  margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="certifications" stroke="#0088FE" name="Certifications" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="projects" stroke="#00C49F" name="Projects" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Department Performance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={departmentPerformanceData}
                  margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fontSize: 10 }}/>
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="score" fill="#8884d8" name="Performance Score" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-1">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Certification Categories</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryDistributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="md:col-span-2">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Available Reports</h3>
                <div className="flex items-center gap-2">
                  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-9 px-3">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </button>
                  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-9 px-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    Date Range
                  </button>
                </div>
              </div>

              <div className="rounded-md border">
                <div className="overflow-hidden">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="[&_tr]:border-b">
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <th className="h-12 px-4 text-left align-middle font-medium">Report Name</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Date</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Type</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Size</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="[&_tr:last-child]:border-0">
                      {reports.map((report) => (
                        <tr key={report.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                          <td className="p-4 align-middle">
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4 text-primary" />
                              <span>{report.name}</span>
                            </div>
                          </td>
                          <td className="p-4 align-middle">{report.date}</td>
                          <td className="p-4 align-middle">
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {report.type}
                            </span>
                          </td>
                          <td className="p-4 align-middle">{report.size}</td>
                          <td className="p-4 align-middle">
                            <div className="flex items-center gap-2">
                              <button className="inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent" title="Download">
                                <Download className="h-4 w-4" />
                              </button>
                              <button className="inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent" title="Share">
                                <Share2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Reports;
