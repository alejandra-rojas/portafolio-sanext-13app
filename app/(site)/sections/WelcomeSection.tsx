import "../../styles/Components/Sections.scss";
import { getWelcome } from "../../../sanity/sanity.utils";
import { PortableText } from "@portabletext/react";

async function WelcomeSection() {
  const welcome = await getWelcome();

  return (
    <section>
      <div className="welcome-container">
        <span>{welcome.title}</span>
        <PortableText value={welcome.subtitle} />
      </div>
    </section>
  );
}

export default WelcomeSection;
