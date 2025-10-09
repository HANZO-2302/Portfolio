import { Outfit } from 'next/font/google';
import Sidebar from '@/components/Sidebar';
import Animate from '@/components/AnimatePage';
import Footer from '@/components/Footer';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${outfit.className} flex min-h-screen flex-col text-gray-800 antialiased transition-all dark:text-gray-200`}
    >
      <main className="grow overflow-x-hidden">{children}</main>
      {/* <Animate /> */}
      <Sidebar />
      <Footer />
    </div>
  );
}
