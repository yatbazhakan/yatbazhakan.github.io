import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'Dr. Hakan Yekta Yatbaz | Autonomous Systems',
  description: 'Academic portfolio of Dr. Hakan Yekta Yatbaz, Lecturer in AI and Autonomous Systems at Queen\'s University Belfast. Researching run-time monitoring and safe perception.',
  keywords: ['Hakan Yekta Yatbaz', 'Queen\'s University Belfast', 'Autonomous Systems', 'AI Safety', 'Run-time Monitoring', 'Machine Learning', 'Computer Vision'],
  openGraph: {
    title: 'Dr. Hakan Yekta Yatbaz | Autonomous Systems',
    description: 'Lecturer in AI and Autonomous Systems at Queen\'s University Belfast.',
    url: 'https://yatbazhakan.github.io',
    siteName: 'Hakan Yekta Yatbaz Portfolio',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable}`} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div style={{ padding: '70px 0 0 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
