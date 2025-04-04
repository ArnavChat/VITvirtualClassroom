
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const Subjects: React.FC = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate('/login');
  };
  
  const subjects = [
    { id: 1, name: "Auto CAD", category: "Civil Engineering Diploma 1", department: "Civil Engineering", status: "ACTIVE", dateRegistered: "17-12-2024" },
    { id: 2, name: "Database Principles", category: "IT Diploma 1", department: "Computer Science", status: "ACTIVE", dateRegistered: "17-12-2024" },
    { id: 3, name: "Office Automation 1", category: "Computer Application 1", department: "Computer Science", status: "ACTIVE", dateRegistered: "17-12-2024" },
    { id: 4, name: "Routing and Switching", category: "IT Diploma 1", department: "Computer Science", status: "ACTIVE", dateRegistered: "17-12-2024" },
    { id: 5, name: "Web Design", category: "IT Diploma 1", department: "Computer Science", status: "ACTIVE", dateRegistered: "17-12-2024" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header userName="Wilson Doloy" onLogout={handleLogout} />
      
      <div className="flex flex-1">
        <Sidebar userName="Wilson Doloy" userRole="VIT Faculty" />
        
        <main className="flex-1 bg-[#e5f2f8] p-6">
          <h1 className="text-3xl font-bold mb-6">Manage Subjects</h1>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex mb-6">
              <button className="bg-gray-200 px-4 py-2 rounded-l border-r">Subjects</button>
              <button className="bg-white px-4 py-2 rounded-r">Add Subjects</button>
            </div>
            
            <div className="flex items-center mb-6">
              <span className="mr-2">Show</span>
              <select className="border rounded px-2 py-1">
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              <span className="ml-2">entries</span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="py-3 px-4 border-b">Name</th>
                    <th className="py-3 px-4 border-b">Category</th>
                    <th className="py-3 px-4 border-b">Department</th>
                    <th className="py-3 px-4 border-b">Status</th>
                    <th className="py-3 px-4 border-b">Date Registered</th>
                    <th className="py-3 px-4 border-b">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map(subject => (
                    <tr key={subject.id} className="hover:bg-gray-50">
                      <td className="py-3 px-4 border-b">{subject.name}</td>
                      <td className="py-3 px-4 border-b">{subject.category}</td>
                      <td className="py-3 px-4 border-b">{subject.department}</td>
                      <td className="py-3 px-4 border-b">
                        <span className="text-green-500">{subject.status}</span>
                      </td>
                      <td className="py-3 px-4 border-b">{subject.dateRegistered}</td>
                      <td className="py-3 px-4 border-b">
                        <select className="border rounded px-2 py-1">
                          <option>Select Action</option>
                          <option>Edit</option>
                          <option>Delete</option>
                          <option>Disable</option>
                        </select>
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

export default Subjects;
