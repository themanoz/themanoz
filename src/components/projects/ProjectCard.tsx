import {
  ExternalLink,
  GithubIcon,

} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { projectData } from "../projects/Project-Content";
import { CardContainer } from "../Card";

type ProjectCardProps = projectData;

const ProjectCard = ({
  image,
  title,
  header,
  description,
  tags,
  link,
}: ProjectCardProps) => {
  return (
    <Card className="md:max-w-screen-xl md:mx-auto rounded-none bg-transparent border-none shadow-none grid grid-cols-1  lg:grid-cols-10 mt-8">
      <div className="w-full h-full flex items-start  lg:col-span-4">
        <CardContainer>
        <img
          src={image.src}
          width={500}
          height={500}
          alt="Picture of the author"
          className="border border-slate-400 rounded-lg"
        />
        </CardContainer>
      </div>

      <div className="lg:col-span-6">
        <CardHeader className="flex">
          <CardTitle className="flex items-center justify-between">
            <div className="flex text-xl md:text-2xl items-center">
              {title}
            </div>

            <div className="flex gap-2">
              <a
                href={link.github}
                target="_blank"
                className="hover:text-blue-500 transition-all"
              >
                <GithubIcon className="h-6 w-6 hover:text-green-700" />
              </a>

              {link.live && (
                <a
                  href={link.live}
                  target="_blank"
                  className="hover:text-blue-500 transition-all"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
            </div>
          </CardTitle>

          <CardDescription className="">{header}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-neutral-500 font-medium">{description}</div>
        </CardContent>

        <CardFooter>
          <div className="flex gap-3 flex-wrap">
            {tags.map((tag, index) => (
              <div
                className="border rounded-full px-4 py-1 shadow-sm text-xs text-emerald-500"
                key={index}
              >
                {tag}
              </div>
            ))}
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ProjectCard;