'use client';
import React, { useState } from 'react'; // <-- import useState here
import { useRouter } from 'next/navigation'; // Note: in app router use this for navigation


export default function Home() {

  const [busId, setBusId] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (busId.trim() !== '') {
      router.push(`/bus/${busId}`);
    }else if (busId.trim() === '') {
      router.push(`/bus`);
      //alert("Please enter a bus number");
    }
  };

  return (
    <div className="align-center flex flex-col justify-center items-center h-screen bg-gray-100 text-xl">
      <h1>Welcome to GoBus.lk</h1><br/>

      <input type="text" placeholder="Enter Bus No" className="items-center"
              onChange={(e) => setBusId(e.target.value)} 
              required />

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" 
                onClick={handleSearch}>
          Search
        </button>


      
    </div>
  );
}
