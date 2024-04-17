import MotionDiv from "@/components/motion-div";
import { HoverBorderGradient } from "@/components/ui/hover-background";

export default function Hero() {
  return (
    <section>
      <div className="pt-32 flex justify-center text-center">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <a href=""><span>Follow along on Twitter</span></a>
        </HoverBorderGradient>
      </div>
      <div className="pt-8 text-center text-4xl font-semibold">
        <MotionDiv>I'm Manoj Kumar 👋</MotionDiv>
      </div>
    </section>
  );
}
