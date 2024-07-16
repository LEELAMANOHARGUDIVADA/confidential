import { useEffect, useState } from "react";

export default function ResultPage() {
    const [studentData , setStudentData] = useState();
    const handlePrint = () => {
        window.print();
    }

    useEffect(() => {
    ResultData();
    },[]);
    
    const ResultData = async () => {
       const hallticketNumber = localStorage.getItem('UserId');
        const response = await fetch(`https://confidential.onrender.com/api/student/${hallticketNumber}`);
        const data = await response.json();
        console.log(data);
        setStudentData(data.resultDetails);
        console.log(studentData);
    }
    
    return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-10">
      {
        studentData && <><div className="md:w-2/3 w-full mt-[800px] lg:mt-72">
        <div className="w-full bg h-32 flex items-center justify-center rounded-t-2xl">
          <h2 className="text-white text-xl font-bold">Exam Results</h2>
        </div>
        <div className="w-full h-auto py-10 md:px-20  flex flex-col items-center justify-center border rounded-b-2xl gap-10">
          <div className="w-full flex items-center justify-around">
            <div>
              <h3 className="text-sm text-slate-500">Hall Ticket Number</h3>
              <h3 className="font-bold mt-2 text-sm">
              {studentData.hallticketNumber}
              </h3>
            </div>
            <div>
              <h3 className="text-sm text-slate-500">Student Name</h3>
              <h3 className="font-bold mt-2 text-sm">
                {studentData.studentName}
              </h3>
            </div>
            <div>
              <h3 className="text-sm text-slate-500">Program</h3>
              <h3 className="font-bold mt-2 text-sm">B.TECH in CSE</h3>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Semester {studentData.semester}</h3>
          </div>
          
          <table className=" border-collapse w-full">
            <thead>
              <tr>
                <th className="border border-black  px-4 bg-customBlue text-white text-sm font-medium py-1">S.No</th>
                <th className="border border-black px-4 bg-customBlue font-medium text-white text-sm py-1">Course Code</th>
                <th className="border border-black px-4 bg-customBlue font-medium text-white text-sm py-1">Course Name</th>
                <th className="border border-black px-4 bg-customBlue font-medium text-white text-sm py-1">Grade</th>
                <th className="border border-black px-4 bg-customBlue font-medium text-white text-sm py-1">Credits</th>
                <th className="border border-black px-4 bg-customBlue font-medium text-white text-sm py-1">Status</th>
              </tr>
            </thead>
            <tbody>
             {
              studentData.subjects.map((result, index) => (
                <tr key={index} >
                <td className="border border-black text-sm text-center py-1">
                    {result.serialNumber}
                </td>
                <td className="border border-black text-sm text-center py-1">
                    {result.courseCode}
                </td>
                <td className="border border-black text-sm py-1 px-2">
                    {result.courseName}
                </td>
                <td className="border border-black text-sm text-center py-1 px-0">
                    {result.grade}
                </td>
                <td className="border border-black text-sm text-center py-1 px-2">
                    {result.credits}
                </td>
                <td className={`border border-black text-sm text-center py-1 px-2 font-semibold ${result.status === 'P' || 'SATISFACTORY' ? "text-green-600": "text-red-500"} `}>
                    {result.status}
                </td>
              </tr>
               ))
             } 
             
            </tbody>
          </table>

          <div className="w-full flex items-center justify-evenly">
            <div className="bg-gray-100 px-4 py-4 rounded-lg font-semibold text-center text-xs">
              <h3>SGPA: 7.45</h3>
            </div>
            <div className="bg-gray-100 px-4 py-4 rounded-lg font-semibold text-center text-xs">
              <h3>CGPA: 7.45</h3>
            </div>
            <div className="bg-gray-100 px-4 py-4 rounded-lg font-semibold text-center text-xs">
              <h3>Total Secured Credits:: 21.5/21.5 <span></span></h3>
            </div>
          </div>


        </div>
      </div>
      <div className="mb-40">
        <button onClick={handlePrint} className="bg-customBlue px-10 py-4 rounded-xl text-white text-sm">Print</button>
      </div></>
      }
    </div>
    )
}
