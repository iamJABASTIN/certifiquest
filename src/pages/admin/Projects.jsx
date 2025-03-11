
import React from 'react';
import AdminLayout from '../../components/Layout/AdminLayout';
import Card from '../../components/UI/Card';
import { Search, Filter, Briefcase, ArrowUpDown, Calendar, MoreHorizontal, ChevronDown, Users } from 'lucide-react';

const projects = [
  { id: 1, name: 'Smart Campus Security System', category: 'IoT', difficulty: 'Advanced', students: 4, startDate: '2023-02-10', endDate: '2023-05-15', status: 'Completed' },
  { id: 2, name: 'Educational Learning Platform', category: 'Web Development', difficulty: 'Intermediate', students: 3, startDate: '2023-03-20', endDate: '2023-06-30', status: 'In Progress' },
  { id: 3, name: 'Facial Recognition Attendance', category: 'Machine Learning', difficulty: 'Advanced', students: 5, startDate: '2023-01-15', endDate: '2023-04-20', status: 'Completed' },
  { id: 4, name: 'Mobile Payment System', category: 'Mobile App', difficulty: 'Intermediate', students: 2, startDate: '2023-04-05', endDate: '2023-07-10', status: 'In Progress' },
  { id: 5, name: 'Weather Prediction System', category: 'Data Science', difficulty: 'Intermediate', students: 3, startDate: '2023-03-01', endDate: '2023-05-30', status: 'Completed' },
  { id: 6, name: 'E-commerce Recommendation Engine', category: 'Machine Learning', difficulty: 'Advanced', students: 4, startDate: '2023-05-01', endDate: '2023-08-15', status: 'In Progress' },
];

const Projects = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
            <p className="text-muted-foreground">Manage student projects and track progress.</p>
          </div>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4">
            Add Project
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-blue-50 border-blue-200">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Total Projects</h3>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold">24</p>
                  <p className="text-sm text-muted-foreground">+3 this month</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Completed</h3>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold">16</p>
                  <p className="text-sm text-muted-foreground">67% completion rate</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-yellow-50 border-yellow-200">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">In Progress</h3>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold">8</p>
                  <p className="text-sm text-muted-foreground">33% ongoing</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-purple-50 border-purple-200">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Students Involved</h3>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold">68</p>
                  <p className="text-sm text-muted-foreground">~2.8 per project</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card>
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div className="relative w-full md:w-72">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search projects..."
                  className="h-10 w-full rounded-md border border-input bg-background pl-8 pr-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="flex items-center gap-2">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 gap-1">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </button>
                
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 gap-1">
                  <ArrowUpDown className="h-4 w-4" />
                  <span>Sort</span>
                </button>
              </div>
            </div>

            <div className="rounded-md border">
              <div className="overflow-x-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead className="[&_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <th className="h-12 px-4 text-left align-middle font-medium">
                        <div className="flex items-center gap-1">
                          ID <ChevronDown className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium">
                        <div className="flex items-center gap-1">
                          Project Name <ChevronDown className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium">
                        <div className="flex items-center gap-1">
                          Category <ChevronDown className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium">
                        <div className="flex items-center gap-1">
                          Difficulty <ChevronDown className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium">
                        <div className="flex items-center gap-1">
                          Students <ChevronDown className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium">
                        <div className="flex items-center gap-1">
                          Timeline <ChevronDown className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium">
                        <div className="flex items-center gap-1">
                          Status <ChevronDown className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="[&_tr:last-child]:border-0">
                    {projects.map((project) => (
                      <tr key={project.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle">{project.id}</td>
                        <td className="p-4 align-middle">
                          <div className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4 text-primary" />
                            <span>{project.name}</span>
                          </div>
                        </td>
                        <td className="p-4 align-middle">{project.category}</td>
                        <td className="p-4 align-middle">{project.difficulty}</td>
                        <td className="p-4 align-middle">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>{project.students}</span>
                          </div>
                        </td>
                        <td className="p-4 align-middle">
                          <div className="text-xs">
                            <div>Start: {project.startDate}</div>
                            <div>End: {project.endDate}</div>
                          </div>
                        </td>
                        <td className="p-4 align-middle">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            project.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {project.status}
                          </span>
                        </td>
                        <td className="p-4 align-middle">
                          <button className="inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent">
                            <MoreHorizontal className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-between px-4 py-4 border-t">
                <div className="text-sm text-muted-foreground">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of <span className="font-medium">24</span> results
                </div>
                <div className="flex items-center gap-2">
                  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4">
                    Previous
                  </button>
                  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Projects;
