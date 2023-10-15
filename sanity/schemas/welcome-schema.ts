import { FaHandPeace } from "react-icons/fa";

const welcome = {
  name: "welcome",
  title: "Welcome",
  type: "document",
  icon: FaHandPeace,
  fields: [
    { name: "title", title: "Section title", type: "string" },
    {
      name: "subtitle",
      title: "Section subtitle",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default welcome;
