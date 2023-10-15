import { getProjects } from "../../../sanity/sanity.utils";
import ProjectCard from "../components/ProjectCard";

async function ProjectsSection() {
  const projects = await getProjects();
  return (
    <section>
      <h2>My projects go here</h2>

      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </section>
  );
}

export default ProjectsSection;
