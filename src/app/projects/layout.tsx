import { Outfit } from 'next/font/google';
import Sidebar from '@/components/Sidebar';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${outfit.className} antialiased`}>
      <main className="">{children}</main>
      <Sidebar />
    </div>
  );
}
