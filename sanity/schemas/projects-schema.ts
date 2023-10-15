import { PiProjectorScreenBold } from "react-icons/pi";

const projects = {
  name: "projects",
  title: "Projects",
  icon: PiProjectorScreenBold,
  type: "document",
  fields: [
    { name: "name", title: "Project name", type: "string" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "projectImage" }],
    },
    {
      name: "url",
      title: "Deployed Website URL",
      type: "url",
    },
    {
      name: "githubUrl",
      title: "GitHub URL",
      type: "url",
    },
    {
      name: "description",
      title: "Project description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "myTags",
      title: "Tags",
      type: "tags",
      options: {
        sanity: "sanity",
        wordpress: "wordpress",
        react: "react",
        next: "next",
        vanillajs: "Vanilla JS",
        firebase: "Firebase",
      },
    },
    /* {
      name: "projectType",
      title: "Project type",
      type: "object",
      options: {
        list: [
          { title: "School Project", value: "School Project" },
          { title: "Personal Project", value: "Personal Project" },
          { title: "Client Project", value: "Client Project" },
        ],
        layout: "radio",
      },
    }, */
  ],
};

export default projects;
