
import React from 'react';
import AdminLayout from '../../components/Layout/AdminLayout';
import Card from '../../components/UI/Card';
import { Search, Filter, BookOpen, ArrowUpDown, MoreHorizontal, ChevronDown, Users, Star } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const courses = [
  { id: 1, name: 'Introduction to Machine Learning', category: 'Data Science', instructor: 'Dr. Sarah Wilson', students: 124, difficulty: 'Intermediate', rating: 4.8, status: 'Active' },
  { id: 2, name: 'Advanced Web Development', category: 'Web Development', instructor: 'Prof. Michael Chen', students: 98, difficulty: 'Advanced', rating: 4.6, status: 'Active' },
  { id: 3, name: 'Cybersecurity Fundamentals', category: 'Security', instructor: 'Dr. Robert Brown', students: 115, difficulty: 'Beginner', rating: 4.9, status: 'Active' },
  { id: 4, name: 'Cloud Computing with AWS', category: 'Cloud', instructor: 'Ms. Jennifer Lopez', students: 86, difficulty: 'Intermediate', rating: 4.7, status: 'Active' },
  { id: 5, name: 'Mobile App Development', category: 'Mobile', instructor: 'Dr. David Kim', students: 75, difficulty: 'Intermediate', rating: 4.5, status: 'Inactive' },
  { id: 6, name: 'Blockchain Fundamentals', category: 'Blockchain', instructor: 'Prof. Lisa Johnson', students: 62, difficulty: 'Advanced', rating: 4.4, status: 'Active' },
];

const enrollmentData = [
  { name: 'Data Science', students: 345 },
  { name: 'Web Development', students: 290 },
  { name: 'Security', students: 240 },
  { name: 'Cloud', students: 185 },
  { name: 'Mobile', students: 170 },
  { name: 'Blockchain', students: 120 },
];

const Courses = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Courses</h2>
            <p className="text-muted-foreground">Manage courses, enrollments, and certifications.</p>
          </div>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4">
            Add Course
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Course Enrollment by Category</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={enrollmentData}
                  margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="students" name="Students Enrolled" fill="#0088FE" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Course Overview</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-md bg-blue-100 flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Total Courses</p>
                      <p className="text-2xl font-bold">64</p>
                    </div>
                  </div>
                  <span className="text-sm text-green-600">+4 new</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-md bg-green-100 flex items-center justify-center">
                      <Users className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Total Enrollments</p>
                      <p className="text-2xl font-bold">1,350</p>
                    </div>
                  </div>
                  <span className="text-sm text-green-600">+120 this month</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-md bg-yellow-100 flex items-center justify-center">
                      <Star className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Average Rating</p>
                      <p className="text-2xl font-bold">4.7</p>
                    </div>
                  </div>
                  <span className="text-sm text-green-600">+0.2 increase</span>
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
                  placeholder="Search courses..."
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
                          Course Name <ChevronDown className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium">
                        <div className="flex items-center gap-1">
                          Category <ChevronDown className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium">
                        <div className="flex items-center gap-1">
                          Instructor <ChevronDown className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium">
                        <div className="flex items-center gap-1">
                          Students <ChevronDown className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium">
                        <div className="flex items-center gap-1">
                          Rating <ChevronDown className="h-4 w-4" />
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
                    {courses.map((course) => (
                      <tr key={course.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle">{course.id}</td>
                        <td className="p-4 align-middle">
                          <div className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-primary" />
                            <span>{course.name}</span>
                          </div>
                        </td>
                        <td className="p-4 align-middle">{course.category}</td>
                        <td className="p-4 align-middle">{course.instructor}</td>
                        <td className="p-4 align-middle">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>{course.students}</span>
                          </div>
                        </td>
                        <td className="p-4 align-middle">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span>{course.rating}</span>
                          </div>
                        </td>
                        <td className="p-4 align-middle">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            course.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {course.status}
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
                  Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of <span className="font-medium">64</span> results
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

export default Courses;
