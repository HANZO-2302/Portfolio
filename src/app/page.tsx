import Animate from '@/components/AnimatePage';
import SmoothScrollPage from '@/components/SmoothScrollPage';
import { JetBrains_Mono } from 'next/font/google';

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div>
      <Animate />
      <SmoothScrollPage />
      {/* <Footer /> */}
    </div>
  );
}
