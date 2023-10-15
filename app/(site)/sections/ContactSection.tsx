import { getContact } from "../../../sanity/sanity.utils";

async function ContactSection() {
  const contact = await getContact();

  return (
    <section>
      <h2>My contact details go here</h2>
      <h3>{contact.title}</h3>
      <h3>{contact.email}</h3>
      <h3>{contact.url}</h3>
    </section>
  );
}

export default ContactSection;
