
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, FileText, Users, BookOpen, HelpCircle, FolderOpen, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  userName: string;
  userRole: string;
}

const Sidebar: React.FC<SidebarProps> = ({ userName, userRole }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const menuItems = [
    { name: 'Dashboard', icon: Home, path: '/' },
    { name: 'Department', icon: FolderOpen, path: '/department' },
    { name: 'Category', icon: Tag, path: '/category' },
    { name: 'Students', icon: Users, path: '/students' },
    { name: 'Subjects', icon: FileText, path: '/subjects' },
    { name: 'Examination', icon: BookOpen, path: '/examination' },
  ];

  return (
    <div className="bg-[#465882] w-[220px] h-full flex flex-col">
      <div className="flex flex-col items-center py-5">
        <div className="w-24 h-24 rounded-full bg-[#5471b4] flex items-center justify-center overflow-hidden mb-2">
          <img 
            src="/lovable-uploads/0a2a33e2-911f-4c87-98a1-dba01747ae6e.png" 
            alt="Profile"
            className="w-16 h-16"
          />
        </div>
        <h3 className="text-white font-medium">{userName}</h3>
        <p className="text-white text-sm">{userRole}</p>
      </div>
      
      <div className="flex-1 mt-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.name}
              className={cn(
                "flex items-center w-full py-4 px-6 text-white",
                isActive && "bg-[#2e3e5e]"
              )}
              onClick={() => navigate(item.path)}
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <item.icon size={20} />
              </div>
              <span className="ml-2 text-sm">{item.name}</span>
            </button>
          );
        })}
      </div>
      
      <button className="flex items-center w-full py-4 px-6 text-white">
        <div className="w-8 h-8 flex items-center justify-center">
          <HelpCircle size={20} />
        </div>
        <span className="ml-2 text-sm">Help</span>
      </button>
    </div>
  );
};

export default Sidebar;
