"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import React, { useState, useEffect } from "react";

export default function BusDetail() {
  const params = useParams();
  const { id } = params;

  const [bus, setBus] = useState(); // Changed to null

  useEffect(() => {
    if (id) {
      fetch(`/api/bus?id=${id}`)
        .then((res) => res.json())
        .then((data) => setBus(data));
    } else {
    }
  }, [id]); // Added id as dependency

  if (!bus) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-xl">
        <h1 className="text-2xl font-bold mb-4">Bus not Found</h1>
        <Link
          href="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-xl px-4">
      <h1 className="text-2xl font-bold mb-4">Bus Detail</h1>
      <h2>ID: {bus.id}</h2>
      <h2>Bus Name: {bus.name}</h2>
      <h2>From: {bus.from}</h2>
      <h2>To: {bus.to}</h2>
      <h2>Fare: Rs {bus.fare}</h2>
      <h2>Total Seats: {bus.totalSeats}</h2>
      <h2>Departure Time: {bus.departureTime}</h2>
      <h2>Arrival Time: {bus.arrivalTime}</h2>
      <h2>Available Seats: {bus.availableSeats}</h2>

      {/*<Booking />*/}

      <Link
        href="/book"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Book Now
      </Link>

      <Link
        href="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Go Back
      </Link>
    </div>
  );
}
