
import React from 'react';
import AdminLayout from '../../components/Layout/AdminLayout';
import Card from '../../components/UI/Card';
import { Award, Search, Filter, ArrowUpDown, MoreHorizontal, ChevronDown } from 'lucide-react';

const certifications = [
  { id: 1, name: 'AWS Certified Solutions Architect', type: 'Course', level: 'Advanced', points: 300, issueDate: '2023-05-15', status: 'Verified' },
  { id: 2, name: 'Google Cloud Associate Engineer', type: 'Course', level: 'Intermediate', points: 250, issueDate: '2023-04-22', status: 'Verified' },
  { id: 3, name: 'Hackathon Winner', type: 'Event', level: 'Intermediate', points: 200, issueDate: '2023-06-10', status: 'Pending' },
  { id: 4, name: 'React Workshop', type: 'Workshop', level: 'Beginner', points: 100, issueDate: '2023-03-18', status: 'Verified' },
  { id: 5, name: 'LeetCode 100 Problems', type: 'Online Platform', level: 'Intermediate', points: 150, issueDate: '2023-05-30', status: 'Verified' },
  { id: 6, name: 'Docker Fundamentals', type: 'Course', level: 'Beginner', points: 120, issueDate: '2023-06-05', status: 'Pending' },
];

const Certifications = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
            <p className="text-muted-foreground">Manage all certifications and their point values.</p>
          </div>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4">
            Add Certification
          </button>
        </div>

        <Card>
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div className="relative w-full md:w-72">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search certifications..."
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
                          Name <ChevronDown className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium">
                        <div className="flex items-center gap-1">
                          Type <ChevronDown className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium">
                        <div className="flex items-center gap-1">
                          Level <ChevronDown className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium">
                        <div className="flex items-center gap-1">
                          Points <ChevronDown className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium">
                        <div className="flex items-center gap-1">
                          Issue Date <ChevronDown className="h-4 w-4" />
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
                    {certifications.map((cert) => (
                      <tr key={cert.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle">{cert.id}</td>
                        <td className="p-4 align-middle">
                          <div className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-primary" />
                            <span>{cert.name}</span>
                          </div>
                        </td>
                        <td className="p-4 align-middle">{cert.type}</td>
                        <td className="p-4 align-middle">{cert.level}</td>
                        <td className="p-4 align-middle">{cert.points}</td>
                        <td className="p-4 align-middle">{cert.issueDate}</td>
                        <td className="p-4 align-middle">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            cert.status === 'Verified' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {cert.status}
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
                  Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of <span className="font-medium">36</span> results
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

export default Certifications;
