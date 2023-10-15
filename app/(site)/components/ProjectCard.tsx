import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../../../types/Project";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link key={project._id} href={`/projects/${project.slug}`}>
      <h3>{project.name}</h3>
      {project.image && (
        <Image
          src={project.image.url}
          alt={project.image.alt}
          width={350}
          height={300}
        />
      )}
      <PortableText value={project.description} />
    </Link>
  );
}

export default ProjectCard;
