export function GET() {
  return Response.json("Hello from Deno Deploy!")
}

export function POST(request: Request) {
  console.log(request.body)
  return Response.json("Hello from Deno Deploy!")
}
