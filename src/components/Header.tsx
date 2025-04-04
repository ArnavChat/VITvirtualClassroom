
import React from 'react';
import { Search, LogOut, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

interface HeaderProps {
  userName: string;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ userName, onLogout }) => {
  const navigate = useNavigate();
  
  return (
    <header className="flex items-center justify-between bg-white py-2 px-4 shadow-sm">
      <Logo />
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        
        <div className="flex items-center">
          <span className="mr-2">{userName}</span>
          <ChevronDown size={16} />
        </div>
        
        <div className="flex items-center">
          <button 
            onClick={onLogout} 
            className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
          >
            <span>Log out</span>
            <LogOut size={18} />
          </button>
        </div>
        
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden">
          <img 
            src="/lovable-uploads/0a2a33e2-911f-4c87-98a1-dba01747ae6e.png" 
            alt="Profile"
            className="w-8 h-8"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
