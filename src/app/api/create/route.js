// src/app/api/create/route.js
export async function GET(req) {
  // Simular retraso y devolver JSON
  await new Promise((r) => setTimeout(r, 1200));
  return new Response(JSON.stringify({ ok: true, message: 'ID: abc123' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
