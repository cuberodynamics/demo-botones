import GoogleAnalytics from "../components/GoogleAnalytics";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ background: '#0A0E17', color: '#FFFFFF', fontFamily: 'sans-serif' }}>
        <GoogleAnalytics measurementId="G-E92KBZ51RN" />
        {children}
      </body>
    </html>
  );
}
