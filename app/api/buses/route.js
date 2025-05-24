import clientPromise from '@/lib/mongodb';

export async function GET() {
    const client = await clientPromise;
    const db = client.db('GoBus');
    const buses = await db.collection('lk.Buses').find({}).toArray();

    return Response.json(buses);
  
}

