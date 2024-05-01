import { projectsContent } from "@/components/projects/Project-Content";
import ProjectCard from "@/components/projects/ProjectCard";
import { Separator } from "@/components/ui/separator";


export default function Projects() {
  return (
    <section id="projects">
      <h1 className="text-center text-3xl">Projects</h1>
      {/* <div className="grid grid-cols-1">
        <ProjectCard />
      </div> */}
      <ul className="flex flex-col items-center justify-center w-full">
          {projectsContent.map((card, idx) => {
            return (
              <div key={idx}>
                <ProjectCard
                  image={card.image}
                  title={card.title}
                  header={card.header}
                  description={card.description}
                  tags={card.tags}
                  link={card.link}
                />

                <Separator className="my-4" />
              </div>
            );
          })}
        </ul>
    </section>
  );
}
