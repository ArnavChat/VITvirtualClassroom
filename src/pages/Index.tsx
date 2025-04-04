
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FolderOpen, Users, BookOpen, FileText, Tag, MessageSquare, Lock } from 'lucide-react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import StatCard from '@/components/StatCard';
import DoughnutChart from '@/components/DoughnutChart';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate('/login');
  };
  
  // Sample data for charts
  const performanceData = [
    { name: 'Pass', value: 85, color: '#7CFC00' },
    { name: 'Fail', value: 15, color: '#FF4545' },
  ];
  
  const attendanceData = [
    { name: 'Attended', value: 90, color: '#8884d8' },
    { name: 'Missed', value: 10, color: '#FFD700' },
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header userName="Wilson Doloy" onLogout={handleLogout} />
      
      <div className="flex flex-1">
        <Sidebar userName="Wilson Doloy" userRole="VIT Faculty" />
        
        <main className="flex-1 bg-[#e5f2f8] p-6">
          <h1 className="text-3xl font-bold mb-6">Faculty Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard 
              value={10} 
              title="DEPARTMENT" 
              icon={<FolderOpen size={32} />} 
            />
            
            <StatCard 
              value={10} 
              title="STUDENTS" 
              icon={<Users size={32} />} 
            />
            
            <StatCard 
              value={2} 
              title="EXAMINATIONS" 
              icon={<BookOpen size={32} />} 
            />
            
            <StatCard 
              value={5} 
              title="SUBJECTS" 
              icon={<FileText size={32} />} 
            />
            
            <StatCard 
              value={3} 
              title="CATEGORY" 
              icon={<Tag size={32} />} 
            />
            
            <StatCard 
              value={1} 
              title="NOTICE" 
              icon={<MessageSquare size={32} />} 
            />
            
            <StatCard 
              value={21} 
              title="QUESTIONS" 
              icon={<HelpCircle size={32} />} 
            />
            
            <StatCard 
              value={0} 
              title="BANNED STUDENTS" 
              icon={<Lock size={32} />} 
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DoughnutChart
              title="Presentation of Students Performance"
              data={performanceData}
            />
            
            <DoughnutChart
              title="Students Attendance"
              data={attendanceData}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

// Import this to fix the build
import { HelpCircle } from 'lucide-react';
