import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemas } from "./sanity/schemas/index";
import { structure } from "./sanity/structure";
// plugins: [deskTool({ structure })],
import { tags } from "sanity-plugin-tags";

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"]);
// Define the singleton document types
const singletonTypes = new Set(["welcome", "contact"]);

const config = defineConfig({
  name: "default",
  title: "Portafolio APP24",
  apiVersion: "2023-10-04",
  projectId: "3vd80q4w",
  dataset: "production",
  basePath: "/studio",
  plugins: [deskTool({ structure }), visionTool(), tags({})],
  schema: {
    types: schemas,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});

export default config;
