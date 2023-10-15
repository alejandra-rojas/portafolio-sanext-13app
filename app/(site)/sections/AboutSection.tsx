import { getTimelineEntries } from "../../../sanity/sanity.utils";
import { PortableText } from "@portabletext/react";

async function AboutSection() {
  const timeline = await getTimelineEntries();
  return (
    <section>
      <h2>My personal history is here</h2>
      {timeline.map((entry) => (
        <div key={entry.position}>
          <h3>{entry.title}</h3>
          <PortableText value={entry.content} />
        </div>
      ))}
    </section>
  );
}

export default AboutSection;
