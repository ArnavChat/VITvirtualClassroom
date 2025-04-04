
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const Department: React.FC = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate('/login');
  };
  
  const departments = [
    { id: 1, name: "Computer Science", courses: 5, faculty: 12 },
    { id: 2, name: "Civil Engineering", courses: 3, faculty: 8 },
    { id: 3, name: "Electrical Engineering", courses: 4, faculty: 9 },
    { id: 4, name: "Mechanical Engineering", courses: 4, faculty: 10 },
    { id: 5, name: "Information Technology", courses: 5, faculty: 11 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header userName="Wilson Doloy" onLogout={handleLogout} />
      
      <div className="flex flex-1">
        <Sidebar userName="Wilson Doloy" userRole="VIT Faculty" />
        
        <main className="flex-1 bg-[#e5f2f8] p-6">
          <h1 className="text-3xl font-bold mb-6">Department</h1>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Manage Departments</h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add Department
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="py-3 px-4 border-b">ID</th>
                    <th className="py-3 px-4 border-b">Department Name</th>
                    <th className="py-3 px-4 border-b">Courses</th>
                    <th className="py-3 px-4 border-b">Faculty Members</th>
                    <th className="py-3 px-4 border-b">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {departments.map(dept => (
                    <tr key={dept.id} className="hover:bg-gray-50">
                      <td className="py-3 px-4 border-b">{dept.id}</td>
                      <td className="py-3 px-4 border-b">{dept.name}</td>
                      <td className="py-3 px-4 border-b">{dept.courses}</td>
                      <td className="py-3 px-4 border-b">{dept.faculty}</td>
                      <td className="py-3 px-4 border-b">
                        <button className="text-blue-500 hover:text-blue-700 mr-3">Edit</button>
                        <button className="text-red-500 hover:text-red-700">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <div>Showing 1 to 5 of 5 entries</div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 border rounded bg-gray-100">Previous</button>
                <button className="px-3 py-1 border rounded bg-blue-500 text-white">1</button>
                <button className="px-3 py-1 border rounded bg-gray-100">Next</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Department;
