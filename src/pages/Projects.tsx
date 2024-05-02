import { projectsContent } from "@/components/projects/Project-Content";
import ProjectCard from "@/components/projects/ProjectCard";

export default function Projects() {
  return (
    <section id="projects">
      <h1 className="text-center text-3xl">Projects</h1>
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
                <hr className="w-10/12 lg:w-9/12 my-4 mx-8 lg:mx-32" />
                
              </div>
            );
          })}
        </ul>
    </section>
  );
}
