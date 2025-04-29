import { Outfit } from 'next/font/google';
import Sidebar from '@/components/Sidebar';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${outfit.className} bg-gray-300 text-gray-800 antialiased transition-all duration-500 dark:bg-gray-900 dark:text-gray-200 dark:duration-500`}
    >
      <main className="">{children}</main>
      <Sidebar />
    </div>
  );
}
