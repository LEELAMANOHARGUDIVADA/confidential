import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import '../App.css'

const Home = () => {
    const [number, setNumber] = useState();
    const navigate = useNavigate();
    const formHandler = (e) => {
        // e.preventDefault();
        console.log(number);
        navigate(`/results/${number}`);
    }
  return (
    <div>
        <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[420px]">
          <div className="w-full bg h-32 flex items-center justify-center rounded-t-2xl">
            <h2 className="text-white text-xl font-bold">Exam Results</h2>
          </div>
          <div className="w-full h-auto py-10 px-10 flex items-center justify-center border rounded-b-2xl">
            <form
              onSubmit={formHandler}
              className="w-full flex flex-col items-center justify-center gap-7"
            >
              <div className="w-full">
                <h3 className="text-sm text-slate-500 mb-2">
                  Hall Ticket Number <span className="text-red-500">*</span>
                </h3>

                <input
                  type="text"
                  className="w-full border outline-none focus:border-blue-700 px-4 py-3 rounded-lg"
                  required
                  onChange={(e) => setNumber(e.target.value)}
                  value={number}
                />
              </div>
              <div className="w-full">
                <h3 className="text-sm text-slate-500 mb-2">
                  Select Exam Type <span className="text-red-500">*</span>
                </h3>
                <select
                  required
                  className="w-full border outline-none focus:border-blue-700 px-4 py-3 rounded-lg cursor-pointer"
                >
                  <option value=""></option>
                  <option value="general" className="w-full">
                    General
                  </option>
                  <option value="Honors and Minors">Hinors and Minors</option>
                </select>
              </div>
              <div className="w-full">
                <button className="bg text-white w-full rounded-lg py-4 text-sm font-bold flex items-center justify-center">
                 Get Result
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home