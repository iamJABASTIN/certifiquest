
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import Card from '../UI/Card';

const CertificateMetrics = () => {
  const data = [
    { name: 'Jan', count: 40 },
    { name: 'Feb', count: 55 },
    { name: 'Mar', count: 75 },
    { name: 'Apr', count: 65 },
    { name: 'May', count: 90 },
    { name: 'Jun', count: 110 },
    { name: 'Jul', count: 85 },
    { name: 'Aug', count: 120 },
    { name: 'Sep', count: 140 },
    { name: 'Oct', count: 100 },
    { name: 'Nov', count: 130 },
    { name: 'Dec', count: 155 }
  ];

  return (
    <Card className="col-span-3">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Certificate Submissions (Monthly)</h3>
        <div className="flex items-center gap-4">
          <select className="h-8 rounded-md border border-input bg-background px-2 text-xs">
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
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
            <Bar 
              dataKey="count" 
              fill="hsl(var(--primary))" 
              radius={[4, 4, 0, 0]} 
              animationDuration={1500} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default CertificateMetrics;
