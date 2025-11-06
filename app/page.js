export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Test App</h1>
      <p style={{ color: '#555' }}>Status: OK</p>
      <p><a href="/api/health">Check API health</a></p>
    </main>
  );
}
