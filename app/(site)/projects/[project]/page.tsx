import { PortableText } from "@portabletext/react";
import { getProject } from "../../../../sanity/sanity.utils";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <div>
      My project goes here
      <h1>{project.name}</h1>
      <PortableText value={project.description} />
    </div>
  );
}
