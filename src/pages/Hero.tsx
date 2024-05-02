import MotionDiv from "@/components/motion-div";
import { HoverBorderGradient } from "@/components/ui/hover-background";

export default function Hero() {
  return (
    <section>
      <div className="pt-44 flex justify-center text-center">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <a href="https://twitter.com/the_manoz" target="_blank">
            <span>Follow along on Twitter</span>
          </a>
        </HoverBorderGradient>
      </div>
      <h1 className="pt-8 text-center text-2xl lg:text-4xl font-semibold">
        <MotionDiv delayOffset={0}>I'm Manoj Kumar Bonala 👋</MotionDiv>
      </h1>
      <h1 className="pt-4 text-xl font-medium ">
        <MotionDiv delayOffset={0.2}>CS Graduate 👨🏻‍💻</MotionDiv>
      </h1>

      <div className="py-6 flex w-full flex-col gap-2 text-center text-lg">
        <MotionDiv delayOffset={0.4}>
          <p>Welcome to my personal page!</p>
        </MotionDiv>
        <MotionDiv delayOffset={0.5}>
          <p>
            <b>TypeScript Full-Stack </b>developer who loves to
            build something cool.
          </p>
        </MotionDiv>
      </div>
    </section>
  );
}
