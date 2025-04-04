
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const Examination: React.FC = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate('/login');
  };
  
  const exams = [
    { id: 1, date: "27-01-2024", subject: "Software Engineering", slot: "A1", timing: "9:30 - 11:00", students: 70 },
    { id: 2, date: "27-01-2024", subject: "Software Engineering", slot: "A2", timing: "2:00 - 3:30", students: 65 },
    { id: 3, date: "29-01-2024", subject: "Discrete Mathematics", slot: "C1", timing: "9:30 - 11:00", students: 68 },
    { id: 4, date: "31-01-2024", subject: "Discrete Mathematics", slot: "E1", timing: "9:30 - 11:00", students: 69 },
    { id: 5, date: "31-01-2024", subject: "Software Engineering", slot: "E2", timing: "2:00 - 3:30", students: 70 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header userName="Wilson Doloy" onLogout={handleLogout} />
      
      <div className="flex flex-1">
        <Sidebar userName="Wilson Doloy" userRole="VIT Faculty" />
        
        <main className="flex-1 bg-[#e5f2f8] p-6">
          <h1 className="text-3xl font-bold mb-6">Examination</h1>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="py-3 px-4 border-b">Date</th>
                    <th className="py-3 px-4 border-b">Subject</th>
                    <th className="py-3 px-4 border-b">Slot</th>
                    <th className="py-3 px-4 border-b">Timing</th>
                    <th className="py-3 px-4 border-b">Number of Students</th>
                  </tr>
                </thead>
                <tbody>
                  {exams.map(exam => (
                    <tr key={exam.id} className="hover:bg-gray-50">
                      <td className="py-3 px-4 border-b">{exam.date}</td>
                      <td className="py-3 px-4 border-b">{exam.subject}</td>
                      <td className="py-3 px-4 border-b">{exam.slot}</td>
                      <td className="py-3 px-4 border-b">{exam.timing}</td>
                      <td className="py-3 px-4 border-b">{exam.students}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-6 bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Add Questions</h2>
            
            <div className="mb-6">
              <div className="flex border-b">
                <button className="bg-white px-4 py-2 border-b-2 border-blue-500">Multiple Choice</button>
                <button className="bg-white px-4 py-2">Filling Blanks</button>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block mb-2">Exam Name</label>
                <select className="w-full border rounded px-3 py-2">
                  <option>-Select exam</option>
                </select>
              </div>
              
              <div>
                <label className="block mb-2">Questions</label>
                <input type="text" placeholder="Enter Questions" className="w-full border rounded px-3 py-2" />
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 border-b border-r">Option No.</th>
                      <th className="py-3 px-4 border-b border-r">Option</th>
                      <th className="py-3 px-4 border-b">Answers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-4 border-b border-r">1.</td>
                      <td className="py-3 px-4 border-b border-r">
                        <div>Option 1</div>
                        <input type="text" placeholder="Enter option 1" className="w-full border rounded px-3 py-2 mt-1" />
                      </td>
                      <td className="py-3 px-4 border-b text-center">
                        <input type="radio" name="answer" />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b border-r">2.</td>
                      <td className="py-3 px-4 border-b border-r">
                        <div>Option 2</div>
                        <input type="text" placeholder="Enter option 2" className="w-full border rounded px-3 py-2 mt-1" />
                      </td>
                      <td className="py-3 px-4 border-b text-center">
                        <input type="radio" name="answer" />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b border-r">3.</td>
                      <td className="py-3 px-4 border-b border-r">
                        <div>Option 3</div>
                        <input type="text" placeholder="Enter option 3" className="w-full border rounded px-3 py-2 mt-1" />
                      </td>
                      <td className="py-3 px-4 border-b text-center">
                        <input type="radio" name="answer" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Examination;
