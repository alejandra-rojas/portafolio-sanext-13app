import { PortableTextBlock } from "sanity";

export type TimelineEntries = {
  _id: string;
  position: number;
  title: string;
  content: PortableTextBlock[];
};
