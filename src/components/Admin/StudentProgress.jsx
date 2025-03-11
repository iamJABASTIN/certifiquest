
import React from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';
import Card from '../UI/Card';

const StudentProgress = () => {
  const data = [
    { name: 'Week 1', Computer: 50, Electrical: 40, Mechanical: 35, Civil: 30, Chemical: 25 },
    { name: 'Week 2', Computer: 55, Electrical: 45, Mechanical: 38, Civil: 32, Chemical: 28 },
    { name: 'Week 3', Computer: 70, Electrical: 55, Mechanical: 45, Civil: 40, Chemical: 35 },
    { name: 'Week 4', Computer: 80, Electrical: 65, Mechanical: 50, Civil: 48, Chemical: 40 },
    { name: 'Week 5', Computer: 85, Electrical: 70, Mechanical: 58, Civil: 55, Chemical: 48 },
    { name: 'Week 6', Computer: 95, Electrical: 78, Mechanical: 65, Civil: 60, Chemical: 55 },
    { name: 'Week 7', Computer: 100, Electrical: 85, Mechanical: 70, Civil: 65, Chemical: 60 },
    { name: 'Week 8', Computer: 110, Electrical: 90, Mechanical: 75, Civil: 70, Chemical: 65 },
  ];

  return (
    <Card className="col-span-3">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Department Average Scores (Weekly)</h3>
        <div className="flex items-center gap-4">
          <select className="h-8 rounded-md border border-input bg-background px-2 text-xs">
            <option value="current">Current Quarter</option>
            <option value="previous">Previous Quarter</option>
          </select>
        </div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                borderRadius: '8px',
                border: '1px solid rgba(0, 0, 0, 0.1)', 
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="Computer" 
              stroke="#0088FE" 
              strokeWidth={2} 
              dot={{ strokeWidth: 2 }} 
              activeDot={{ r: 6 }} 
              animationDuration={1500}
            />
            <Line 
              type="monotone" 
              dataKey="Electrical" 
              stroke="#00C49F" 
              strokeWidth={2} 
              dot={{ strokeWidth: 2 }} 
              activeDot={{ r: 6 }} 
              animationDuration={1500}
            />
            <Line 
              type="monotone" 
              dataKey="Mechanical" 
              stroke="#FFBB28" 
              strokeWidth={2} 
              dot={{ strokeWidth: 2 }} 
              activeDot={{ r: 6 }} 
              animationDuration={1500}
            />
            <Line 
              type="monotone" 
              dataKey="Civil" 
              stroke="#FF8042" 
              strokeWidth={2} 
              dot={{ strokeWidth: 2 }} 
              activeDot={{ r: 6 }} 
              animationDuration={1500}
            />
            <Line 
              type="monotone" 
              dataKey="Chemical" 
              stroke="#8884d8" 
              strokeWidth={2} 
              dot={{ strokeWidth: 2 }} 
              activeDot={{ r: 6 }} 
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default StudentProgress;
