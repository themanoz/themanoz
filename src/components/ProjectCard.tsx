import maroon from "@/assets/maroon.png";
import portfolio from "@/assets/portfolio.png";
import { CardContainer } from "@/components/Card";
import Link from "@/components/Link";
import Skill from "@/components/Skill";
import { IconBrandReactNative, IconBrandTailwind } from "@tabler/icons-react";

export default function ProjectCard() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center">
        <CardContainer className="border border-slate-200 rounded-lg shadow-lg dark:border-none">
          <div>
            <img
              src={maroon}
              alt="photo"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            />
          </div>
        </CardContainer>
        <div className="px-0 lg:px-12 flex justify-center pt-0 lg:pt-24">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold">Maroon Marketing Agency</h1>
              <Link
                githubUrl={"https://github.com/themanoz/themanoz"}
                Link={"https://maroonmarketing.vercel.app/"}
              />
            </div>
            <p className="w-[425px] text-slate-400">
              Maroon Marketing Agency is a digital marketing agency that offers
              a suite of marketing services to help brands grow their business.
            </p>
            <div className="flex gap-2">
              {/* <Skill icon={<IconBrandTypescript />} text={"TypeScript"} /> */}
              <Skill icon={<IconBrandReactNative />} text={"Reactjs"} />
              <Skill icon={<IconBrandTailwind />} text={"TailwindCSS"} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center">
        <CardContainer className="border border-slate-200 rounded-lg shadow-lg dark:border-none">
          <div>
            <img
              src={portfolio}
              alt="photo"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            />
          </div>
        </CardContainer>
        <div className="px-0 lg:px-12 flex justify-center pt-0 lg:pt-24">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold">Portfolio</h1>
              <Link
                githubUrl={"https://github.com/themanoz/themanoz"}
                Link={"https://themanoz.vercel.app/"}
              />
            </div>
            <p className="w-[425px] text-slate-400">
              The goal of this project is to design and develop a personal
              portfolio website that effectively highlights my skills, projects,
              and professional experience.
            </p>
            <div className="flex gap-2">
              {/* <Skill icon={<IconBrandTypescript />} text={"TypeScript"} /> */}
              <Skill icon={<IconBrandReactNative />} text={"Reactjs"} />
              <Skill icon={<IconBrandTailwind />} text={"TailwindCSS"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
