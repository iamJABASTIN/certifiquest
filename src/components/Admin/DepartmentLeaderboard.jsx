
import React from 'react';
import Card from '../UI/Card';

const departments = [
  { name: 'Computer Science', score: 8750, change: 12.3, students: 125 },
  { name: 'Electrical Engineering', score: 7820, change: 8.7, students: 98 },
  { name: 'Mechanical Engineering', score: 6940, change: 5.2, students: 112 },
  { name: 'Civil Engineering', score: 6210, change: 3.1, students: 87 },
  { name: 'Chemical Engineering', score: 5980, change: -1.3, students: 76 },
];

const DepartmentLeaderboard = () => {
  return (
    <Card className="col-span-3 lg:col-span-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Department Leaderboard</h3>
        <div className="flex items-center gap-2">
          <select className="h-8 rounded-md border border-input bg-background px-2 text-xs">
            <option value="all">All Time</option>
            <option value="year">This Year</option>
            <option value="quarter">This Quarter</option>
            <option value="month">This Month</option>
          </select>
        </div>
      </div>
      <div className="space-y-4">
        {departments.map((department, index) => (
          <div 
            key={department.name} 
            className="flex items-center justify-between p-3 rounded-lg bg-accent/50 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                <span className="text-sm font-semibold text-primary-foreground">{index + 1}</span>
              </div>
              <div>
                <p className="font-medium">{department.name}</p>
                <p className="text-xs text-muted-foreground">{department.students} Students</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold">{department.score.toLocaleString()}</p>
              <p className={`text-xs ${department.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {department.change >= 0 ? '+' : ''}{department.change}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default DepartmentLeaderboard;
