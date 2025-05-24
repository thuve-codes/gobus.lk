"use client";

import { useState } from "react";
import Viewbookings from "./viewbookings";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    seatCount: "",
    seatNumbers: "",
    travelDate: "",
    travelTime: "",
    pickup: "",
    drop: "",
    paymentMethod: "",
  });

  const [bookingId, setBookingId] = useState(null);
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, //nOT nESSERRY
      body: JSON.stringify(form),
    })
      .then((res) =>
        res
          .json()
          .then((data) => ({ status: res.status, ok: res.ok, body: data }))
      )
      .then(({ status, ok, body }) => {
        if (ok) {
          alert("Booking successful!");
          setBookingId(body.bookingId);
          setEmail(form.email);
          setName(form.name);
          setForm({
            name: "",
            email: "",
            phone: "",
            seatCount: "",
            seatNumbers: "",
            travelDate: "",
            travelTime: "",
            pickup: "",
            drop: "",
            paymentMethod: "",
          });
        } else {
          alert(body.error || `Booking failed with status ${status}`);
        }
      });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-xl px-4">
      <h2 className="text-2xl font-bold mb-4">Book your bus ticket here</h2>

      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-3 w-full max-w-md "
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          type="text"
          placeholder="Name"
          required
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
          required
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          type="text"
          placeholder="Phone Number"
          required
        />
        <input
          name="seatCount"
          value={form.seatCount}
          onChange={handleChange}
          type="number"
          placeholder="Seat Count"
          required
        />
        <input
          name="seatNumbers"
          value={form.seatNumbers}
          onChange={handleChange}
          type="text"
          placeholder="Seat Numbers"
          required
        />
        <input
          name="travelDate"
          value={form.travelDate}
          onChange={handleChange}
          type="date"
          required
        />
        <input
          name="travelTime"
          value={form.travelTime}
          onChange={handleChange}
          type="time"
          required
        />
        <input
          name="pickup"
          value={form.pickup}
          onChange={handleChange}
          type="text"
          placeholder="Pickup Point"
          required
        />
        <input
          name="drop"
          value={form.drop}
          onChange={handleChange}
          type="text"
          placeholder="Drop Point"
          required
        />
        <input
          name="paymentMethod"
          value={form.paymentMethod}
          onChange={handleChange}
          type="text"
          placeholder="Payment Method"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mt-2"
        >
          Confirm Booking!
        </button>
      </form>

      {bookingId && <Viewbookings name={name} email={email} />}
    </div>
  );
}
