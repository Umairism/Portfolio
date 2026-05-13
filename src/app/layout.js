import '../index.css';
import '../styles.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Portfolio',
  description: 'Personal Portfolio Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/x-icon" href="/logo.png" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
