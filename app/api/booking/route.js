import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  const client = await clientPromise;
  const db = client.db("GoBus");

  const data = await req.json();
  console.log("Received booking data:", data);

  const result = await db.collection("bookings").insertOne(data);

  return Response.json({
    message: "Bus booked successfully",
    bookingId: result.insertedId,
  });
}
