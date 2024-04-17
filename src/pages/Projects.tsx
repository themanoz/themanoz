// import MotionDiv from "@/components/motion-div";
// import photo from "@/assets/photo.jpg";
// import { CardContainer } from "@/components/Card";
// import { Github, Link } from "lucide-react";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
//   IconArrowWaveRightUp,
//   IconBoxAlignRightFilled,
//   IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

import maroon from "@/assets/maroon.png"


export default function Projects() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}


  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
  );
  const Maroon = () => {
    return(
        <img src={maroon} alt="Maroon" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black" />
    )
  }

  const items = [
    {
      title: "Maroon Marketing Agency",
      description: "Maroon Marketing Agency is a digital marketing agency that offers a suite of marketing services to help brands grow their business.",
      header: <Maroon />,
      className: "md:col-span-2",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
  ];
