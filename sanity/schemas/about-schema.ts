import { BiUserCircle } from "react-icons/bi";

const about = {
  name: "about",
  title: "About",
  type: "document",
  icon: BiUserCircle,
  fields: [
    { name: "position", title: "Timeline Position", type: "number" },
    { name: "title", title: "Moment Title", type: "string" },
    {
      name: "content",
      title: "Moment Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default about;
