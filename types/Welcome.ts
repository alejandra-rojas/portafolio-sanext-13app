import { PortableTextBlock } from "sanity";

export type Welcome = {
  _id: string;
  _createdAt: Date;
  title: string;
  subtitle: PortableTextBlock[];
};
