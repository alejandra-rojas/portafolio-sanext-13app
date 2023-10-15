import { groq } from "next-sanity";
import client from "./config/client-config";
import { Welcome } from "../types/Welcome";
import { Project } from "../types/Project";
import { Projects } from "../types/Projects";
import { Contact } from "../types/Contact";
import { TimelineEntries } from "../types/TimelineEntries";

export async function getWelcome(): Promise<Welcome> {
  return client.fetch(groq`*[_type == "welcome"]{
      _id,
      _createdAt,
      title,
      subtitle,
    }[0]`);
}

export async function getTimelineEntries(): Promise<TimelineEntries[]> {
  return client.fetch(groq`*[_type == "about"]{
      _id,
      position,
      title,
      content,
    }`);
}
export async function getProjects(): Promise<Projects[]> {
  return client.fetch(groq`*[_type == "projects"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": {
        "url": image.asset->url,
        "alt": image.alt
      },
      url,
      githubUrl,
      description,
    }`);
}

export async function getProject(slug: string): Promise<Project> {
  return client.fetch(
    groq`*[_type == "projects" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": {
        "url": image.asset->url,
        "alt": image.alt
      },
      url,
      githubUrl,
      description,
    }`,
    { slug }
  );
}
export async function getContact(): Promise<Contact> {
  return client.fetch(
    groq`*[_type == "contact"][0]{
      _id,
      title,
      email,
      url,
    }`
  );
}
