// import Animate from '@/components/AnimatePage';
// import Carousel from '@/components/Carousel/Carousel';
// // import Image from "next/image";
// // import BackgroundDots from '@/components/folderBackgroundDots/BackgroundDots';
// import SubmitButton from '@/components/SubmitButton/SubmitButton';
// // import { usePathname } from "next/navigation";
// // import { AnimatePresence, motion } from "motion/react";

// import ZoomGallery from '@/components/ZoomGallery/ExpandingCardsWithModal';

// export default function Home() {
//   // const pathname = usePathname();
//   return (
//     <div id="app">
//       <Carousel />
//       <Animate />
//       {/* <SubmitButton /> */}
//     </div>
//   );
// }
import Animate from '@/components/AnimatePage';
// import Cosmos from '@/components/cosmos/cosmos';
// import BackgroundDots from '@/components/folderBackgroundDots/BackgroundDots';
// import Footer from '@/components/Footer';
// import Silk from '@/components/Silk';
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
      {/* <Cosmos /> */}
      {/* <BackgroundDots /> */}
      {/* <Silk speed={3} scale={1} color="#2C3546" noiseIntensity={0.9} rotation={0.3} /> */}
      <SmoothScrollPage />
    </div>
  );
}
