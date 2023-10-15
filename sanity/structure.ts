import { FaHandPeace } from "react-icons/fa";
import { GrContact } from "react-icons/gr";

// @ts-ignore
export const structure = (S) =>
  S.list()
    .title("CMS")
    .items([
      S.listItem()
        .title("Welcome")
        .id("welcome")
        .icon(FaHandPeace)
        .child(S.document().schemaType("welcome").documentId("welcome")),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item: { getId: () => string }) =>
          ["about"].includes(item.getId()) ||
          ["projects"].includes(item.getId()) /* ||
          ["contact"].includes(item.getId()) */
      ),
      S.divider(),
      S.listItem()
        .title("Contact")
        .id("contact")
        .icon(GrContact)
        .child(S.document().schemaType("contact").documentId("contact")),
    ]);
