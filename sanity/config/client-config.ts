import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "3vd80q4w",
  dataset: "production",
  apiVersion: "2023-10-10",
  useCdn: false,
};

const client = createClient(config);

export default client;

// const config = {
//   projectId: "vgvwlf2l",
//   dataset: "production",
//   apiVersion: "2023-10-04",
// };

// export default config;
