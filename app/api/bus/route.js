import clientPromise from '@/lib/mongodb';

export async function GET(request , { params }) {

    const client = await clientPromise;
    const db = client.db('GoBus');

    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (id) {
        const bus = await db.collection('lk.Buses').findOne({ id: id });
        if (!bus) {
            return new Response('Bus not found', { status: 404 });
        }
        return Response.json(bus);
    }
}

