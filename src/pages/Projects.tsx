import MotionDiv from "@/components/motion-div";
import photo from "@/assets/photo.jpg";
import { CardContainer } from "@/components/Card";
import { Github, Link } from "lucide-react";

export default function Projects() {
  return (
    <>
      <section>
        <h1 className="text-4xl font-semibold">
          <MotionDiv delayOffset={0.8}>Projects</MotionDiv>
        </h1>
        <div className="pt-12 flex flex-row justify-center items-center">
          <div>
            <MotionDiv>
              <CardContainer>
                <img
                  src={photo}
                  alt="photo"
                  className="w-[500px] h-[250px] rounded-sm"
                />
              </CardContainer>
            </MotionDiv>
          </div>
          <div className="w-2/5 px-14 space-y-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold">
                Maroon Marketing Agency
              </h1>
              <div className="flex gap-2 cursor-pointer">
                <Github />
                <Link />
              </div>
            </div>
            <p className="text-slate-200">
              Maroon Marketing Agency is a digital marketing agency that offers
              a suite of marketing services to help brands grow their business.
            </p>
            <p>
              Maroon Marketing Agency is a digital marketing agency that offers
              a suite of marketing services to help brands grow their business.
            </p>
          </div>
        </div>
        <div className=" flex flex-row justify-center items-center">
          <div>
            <MotionDiv>
              <CardContainer>
                <img
                  src={photo}
                  alt="photo"
                  className="w-[500px] h-[250px] rounded-sm"
                />
              </CardContainer>
            </MotionDiv>
          </div>
          <div className="w-2/5 px-14 space-y-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold">
                PayTM
              </h1>
              <div className="flex gap-2 cursor-pointer">
                <Github />
                <Link />
              </div>
            </div>
            <p className="text-slate-200">
              Maroon Marketing Agency is a digital marketing agency that offers
              a suite of marketing services to help brands grow their business.
            </p>
            <p>
              Maroon Marketing Agency is a digital marketing agency that offers
              a suite of marketing services to help brands grow their business.
            </p>
          </div>
        </div>
        <div className="pt-12 flex flex-row justify-center items-center">
          <div>
            <MotionDiv>
              <CardContainer>
                <img
                  src={photo}
                  alt="photo"
                  className="w-[500px] h-[250px] rounded-sm"
                />
              </CardContainer>
            </MotionDiv>
          </div>
          <div className="w-2/5 px-14 space-y-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold">
                
              </h1>
              <div className="flex gap-2 cursor-pointer">
                <Github />
                <Link />
              </div>
            </div>
            <p className="text-slate-200">
              Maroon Marketing Agency is a digital marketing agency that offers
              a suite of marketing services to help brands grow their business.
            </p>
            <p>
              Maroon Marketing Agency is a digital marketing agency that offers
              a suite of marketing services to help brands grow their business.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
