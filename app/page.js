"use client";
import React, { useState, useEffect } from "react"; // <-- import useState here
import { useRouter } from "next/navigation"; // Note: in app router use this for navigation

export default function Home() {
  const [busId, setBusId] = useState("");
  const [buses, setBuses] = useState([]);
  const router = useRouter();

  const handleBook = () => {
    if (busId.trim() !== "") {
      router.push(`/bus/${busId}`);
    } else if (busId.trim() === "") {
      //router.push(`/bus`);
      alert("Please enter a bus number");
    }
  };

  useEffect(() => {
    fetch("/api/buses")
      .then((res) => res.json())
      .then((data) => setBuses(data));
  }, []);

  return (
    <div className="align-center flex flex-col justify-center items-center h-screen bg-gray-100 text-xl">
      <h1>Welcome to GoBus.lk</h1>
      <br />

      <input
        type="text"
        placeholder="Enter Bus No"
        className="items-center"
        onChange={(e) => setBusId(e.target.value)}
        required
      />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleBook}
      >
        searchBus
      </button>

      <div>
        <h1>Available Buses</h1>
        <table className="border-separate border border-gray-400">
          <tbody>
            <tr>
              <th>Bus Name</th>
              <th>Route</th>
              <th>Cost</th>
              <th>Type</th>
              <th>Bus ID</th>
            </tr>
            {buses.map((bus) => (
              <tr key={bus._id}>
                <td className="border border-gray-300">
                  <strong>{bus.name}</strong>
                </td>
                <td className="border border-gray-300">
                  {bus.from} → {bus.to}
                </td>
                <td className="border border-gray-300">Rs. {bus.fare}</td>
                <td className="border border-gray-300">{bus.type}</td>
                <td className="border border-gray-300">{bus.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
