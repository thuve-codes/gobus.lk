import React from "react";

export default function Viewbookings({ name, email }) {
  return (
    <div className="mt-6 text-green-700 font-medium">
      ✅ Your booking was successful.
      <br />
      {name} check your email {email} for confirmation.
      <br />
    </div>
  );
}
