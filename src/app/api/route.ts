import { openKv } from "@deno/kv";

// Connect to a KV instance (you'll need to store an access token in the DENO_KV_ACCESS_TOKEN environment variable to use this)
const DATABASE_ID = "9f604569-2236-4a17-9440-e5cf1d3533fd"
const kv = await openKv(`https://api.deno.com/databases/${DATABASE_ID}/connect`);

export async function GET() {
  const name = await kv.get(["name"]);  
  return Response.json(`Hello from Deno Deploy, ${name}!`)
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name } = body;
  await kv.set(["name"], name);
  return Response.json(`Saved your name, ${name}!`)
}
