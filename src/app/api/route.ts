import { kv } from "../../../denoDeploy.ts";

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
