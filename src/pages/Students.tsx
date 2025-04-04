
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const Students: React.FC = () => {
  const navigate = useNavigate();
  const [showBanned, setShowBanned] = useState(false);
  
  const handleLogout = () => {
    navigate('/login');
  };
  
  const students = [
    { id: 1, name: "Siddhant Shinde", regNumber: "22BCE2458", branch: "CSE Core", subject: "Software Engineering", dateRegistered: "17-12-2024" },
    { id: 2, name: "Rishabh Raushan", regNumber: "22BCT0301", branch: "CSE IOT", subject: "Software Engineering", dateRegistered: "17-12-2024" },
    { id: 3, name: "Jeel Patel", regNumber: "22BDS0160", branch: "CSE DS", subject: "Software Engineering", dateRegistered: "17-12-2024" },
    { id: 4, name: "Shashwat Chaudhary", regNumber: "22BCE2438", branch: "CSE Core", subject: "Software Engineering", dateRegistered: "17-12-2024" },
    { id: 5, name: "Arnav Chaturvedi", regNumber: "22BCE2110", branch: "CSE Core", subject: "Software Engineering", dateRegistered: "17-12-2024" },
    { id: 6, name: "Yashwant Sai", regNumber: "22BCI0215", branch: "CSE IS", subject: "Software Engineering", dateRegistered: "17-12-2024" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header userName="Wilson Doloy" onLogout={handleLogout} />
      
      <div className="flex flex-1">
        <Sidebar userName="Wilson Doloy" userRole="VIT Faculty" />
        
        <main className="flex-1 bg-[#e5f2f8] p-6">
          <h1 className="text-3xl font-bold mb-6">{showBanned ? "Banned Students" : "Students"}</h1>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <span className="mr-2">Show</span>
                <select className="border rounded px-2 py-1">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                  <option>100</option>
                </select>
                <span className="ml-2">entries</span>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="py-3 px-4 border-b">Name</th>
                    <th className="py-3 px-4 border-b">Registration Number</th>
                    <th className="py-3 px-4 border-b">Branch</th>
                    <th className="py-3 px-4 border-b">Subject</th>
                    <th className="py-3 px-4 border-b">Date Registered</th>
                    <th className="py-3 px-4 border-b">More Info</th>
                  </tr>
                </thead>
                <tbody>
                  {showBanned ? (
                    <tr>
                      <td colSpan={6} className="py-4 px-4 text-center border-b">
                        There are no Banned students
                      </td>
                    </tr>
                  ) : (
                    students.map(student => (
                      <tr key={student.id} className="hover:bg-gray-50">
                        <td className="py-3 px-4 border-b">{student.name}</td>
                        <td className="py-3 px-4 border-b">{student.regNumber}</td>
                        <td className="py-3 px-4 border-b">{student.branch}</td>
                        <td className="py-3 px-4 border-b">{student.subject}</td>
                        <td className="py-3 px-4 border-b">{student.dateRegistered}</td>
                        <td className="py-3 px-4 border-b">
                          <button className="text-blue-500 hover:text-blue-700">View</button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <button 
                className="px-4 py-2 border rounded bg-gray-100"
                onClick={() => setShowBanned(!showBanned)}
              >
                {showBanned ? "Show not banned Students" : "Show Banned Students"}
              </button>
              
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

export default Students;
