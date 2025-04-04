
import React, { ReactNode } from 'react';

interface StatCardProps {
  value: number | string;
  title: string;
  icon: ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ value, title, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex items-start justify-between">
      <div>
        <div className="bg-white text-3xl font-bold">{value}</div>
        <div className="bg-white text-sm text-gray-600 uppercase mt-1">{title}</div>
      </div>
      <div className="bg-white text-gray-500">
        {icon}
      </div>
    </div>
  );
};

export default StatCard;
