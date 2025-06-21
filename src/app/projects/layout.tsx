import { Outfit } from 'next/font/google';
import Sidebar from '@/components/Sidebar';
import Animate from '@/components/AnimatePage';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${outfit.className} text-gray-800 antialiased transition-all duration-500 dark:text-gray-200 dark:duration-500`}
    >
      <main>{children}</main>
      <Animate />
      <Sidebar />
    </div>
  );
}
