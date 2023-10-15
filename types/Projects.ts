import { PortableTextBlock } from "sanity";

export type Projects = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: {
    url: string;
    alt: string;
  };
  /*   images: Array<{
    url: string;
    caption: string;
  }>; */
  url: string;
  githubUrl: string;
  description: PortableTextBlock[];
};
