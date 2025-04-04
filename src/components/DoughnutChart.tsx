
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

interface ChartProps {
  title: string;
  data: { name: string; value: number; color: string }[];
}

const DoughnutChart: React.FC<ChartProps> = ({ title, data }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-center text-lg font-medium mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend layout="vertical" verticalAlign="middle" align="right" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DoughnutChart;
