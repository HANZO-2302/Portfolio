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
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
export default function Home() {
  return (
    <div className="">
      <BeforeAfterGallery />
      <Animate />
    </div>
  );
}
