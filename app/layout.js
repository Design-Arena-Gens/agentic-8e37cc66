import './globals.css';

export const metadata = {
  title: 'Agentic Test',
  description: 'Deployed by autonomous agent',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
