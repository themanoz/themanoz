import { CardBody, CardContainer } from "@/components/Card";
import MotionDiv from "@/components/motion-div";
import photo from "@/assets/photo.jpg";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="mx-auto my-12 flex flex-col items-center justify-center gap-4 px-4 lg:px-32 md:my-56 lg:pt-4  md:max-w-full lg:flex-row lg:items-start lg:gap-16"
      >
        <div className="order-2 lg:order-1 lg:w-2/3">
          <MotionDiv delayOffset={0.2}>
            <h2 className="mb-3 w-full text-center md:mb-14 text-xl lg:pt-24">
              About Me
            </h2>
          </MotionDiv>
          <div className="flex gap-20 flex-col lg:flex-row pt-0 mt-0">
            <div className="lg:order-2 lg:w-1/3 lg:pr-40 lg:pt-0">
              <MotionDiv delayOffset={0.4}>
                <CardContainer>
                  <CardBody className="pl-6 lg:block flex justify-center items-center pt-44 lg:pt-0 pr-6">
                    <img
                      src={photo}
                      alt="photo"
                      className="w-[350px] min-w-[300px] rounded-xl transition-all"
                    />
                  </CardBody>
                </CardContainer>
              </MotionDiv>
            </div>
            <article className="flex flex-col gap-4 pt-28 lg:pt-12">
              <MotionDiv delayOffset={0.5}>
                <p className="pl-4 w-[320px] lg:w-full">
                  Hello, I'm Manoj Kumar. I'm an independent{" "}
                  <b>TypeScript Full-Stack</b> developer based in India.
                </p>
              </MotionDiv>
              <MotionDiv delayOffset={0.6}>
                <p className="pl-4 w-[320px] lg:w-full">
                  As a technologies enthusiast, I am highly passionate about
                  building full-stack web applications. And I love learning new
                  technologies, especially elegant code architectures and design
                  patterns. I hope to leverage my technical skills to build
                  valuable apps that can make a difference in people's lives.
                </p>
              </MotionDiv>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
