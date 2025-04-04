
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { User, Lock } from 'lucide-react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For demo purposes, accept any login
    if (username && password) {
      toast.success('Login successful');
      navigate('/');
    } else {
      toast.error('Please enter both username and password');
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Side - Login Form */}
      <div className="bg-[#465882] flex items-center justify-center p-8">
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-8">Faculty Login</h2>
          
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label className="block mb-2">Username:</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded"
                  placeholder="Enter your username"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block mb-2">Password:</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-[#465882] text-white py-2 px-4 rounded hover:bg-[#374569] transition-colors"
            >
              Login
            </button>
          </form>
          
          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-blue-500 hover:underline">Student Login</a>
            <span className="mx-2">|</span>
            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
          </div>
        </div>
      </div>
      
      {/* Right Side - Welcome */}
      <div className="hidden md:flex bg-[#e5f2f8] flex-col items-center justify-center p-8 relative">
        <div className="absolute top-4 right-4">
          <img 
            src="/lovable-uploads/5cfc12be-7d72-4c7e-a83e-66aa41eaa381.png" 
            alt="VIT Logo" 
            className="h-16"
          />
        </div>
        
        <div className="text-center max-w-lg">
          <h1 className="text-5xl font-cursive text-[#2d7ea3] mb-4">Welcome to</h1>
          <div className="text-8xl font-bold text-[#2d7ea3] mb-4">VIT</div>
          <div className="text-2xl text-[#2d7ea3] uppercase tracking-wider">VIRTUAL CLASSROOM</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
