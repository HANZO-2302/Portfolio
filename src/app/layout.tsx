import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
// import Animate from '@/components/AnimatePage';
// import Footer from '@/components/Footer';

const outFit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Igor Meniailov',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //className="scrollbar-hide"
    <html lang="en" suppressHydrationWarning className="scrollbar-hide">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      (function() {
        try {
          const theme = localStorage.theme;

          if (theme === 'light') {
            document.documentElement.classList.remove('dark');
          } else {
            document.documentElement.classList.add('dark');
          }
        } catch (_) {}
      })();
    `,
          }}
        />
      </head>

      <body
        className={`${outFit.className} overflow-x-hidden bg-zinc-500 text-gray-800 antialiased transition-colors duration-300 dark:bg-zinc-700 dark:text-gray-200`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          {/* <Animate /> */}
          <main className="grow overflow-x-hidden">{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
