import GoogleAnalytics from "../components/GoogleAnalytics";
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ background: '#fff', color: '#888', fontFamily: 'sans-serif', display:'flex', flexDirection:'column', minHeight:'100vh', justifyContent:'center', alignItems:'center' }}>
        <GoogleAnalytics measurementId="G-E92KBZ51RN" />
        {children}
      </body>
    </html>
  );
}
