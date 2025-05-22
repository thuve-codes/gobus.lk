'use client'; // If you want client features, or omit if server component

import { useParams } from 'next/navigation';

export default function BusDetail() {
  const params = useParams();
  const { id } = params;

  return (
    <div>
      <h1>Bus Detail for: {id}</h1>
      {/* fetch data using id */}
    </div>
  );
}
