import ProjectCard from "@/components/ProjectCard";


export default function Projects() {
  return (
    <section id="projects">
      <h1 className="text-center text-3xl">Projects</h1>
      <div className="grid grid-cols-1">
        <ProjectCard />
      </div>
    </section>
  );
}
