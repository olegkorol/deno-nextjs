const kv = await Deno.openKv();

export function GET() {
  return Response.json("Hello from Deno Deploy!")
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name } = body;
  await kv.set(["name"], name);
  return Response.json("Hello from Deno Deploy!")
}
