export function GET() {
  return Response.json("Hello from Deno Deploy!")
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name } = body;
  return Response.json(`Hello from Deno Deploy, ${name ?? "stranger"}!`)
}
