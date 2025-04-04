
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const Category: React.FC = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate('/login');
  };
  
  const categories = [
    { id: 1, name: "Civil Engineering Diploma", subjects: 2 },
    { id: 2, name: "IT Diploma", subjects: 3 },
    { id: 3, name: "Computer Application", subjects: 1 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header userName="Wilson Doloy" onLogout={handleLogout} />
      
      <div className="flex flex-1">
        <Sidebar userName="Wilson Doloy" userRole="VIT Faculty" />
        
        <main className="flex-1 bg-[#e5f2f8] p-6">
          <h1 className="text-3xl font-bold mb-6">Category</h1>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Manage Categories</h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add Category
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="py-3 px-4 border-b">ID</th>
                    <th className="py-3 px-4 border-b">Category Name</th>
                    <th className="py-3 px-4 border-b">Number of Subjects</th>
                    <th className="py-3 px-4 border-b">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map(category => (
                    <tr key={category.id} className="hover:bg-gray-50">
                      <td className="py-3 px-4 border-b">{category.id}</td>
                      <td className="py-3 px-4 border-b">{category.name}</td>
                      <td className="py-3 px-4 border-b">{category.subjects}</td>
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
              <div>Showing 1 to 3 of 3 entries</div>
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

export default Category;
