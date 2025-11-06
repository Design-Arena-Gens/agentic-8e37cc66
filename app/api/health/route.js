export async function GET() {
  const body = { ok: true, service: 'agentic-8e37cc66', time: new Date().toISOString() };
  return new Response(JSON.stringify(body), { status: 200, headers: { 'content-type': 'application/json' } });
}
