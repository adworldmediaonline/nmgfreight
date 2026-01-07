import { ContentSection } from "./content-section";
import { TeamPhoto } from "./team-photo";
import type { AboutUsContentConfig } from "./types";
import { defaultAboutUsContentConfig } from "./constants";

interface AboutUsContentProps {
  config?: Partial<AboutUsContentConfig>;
  className?: string;
}

export function AboutUsContent({
  config: userConfig,
  className,
}: AboutUsContentProps) {
  const config: AboutUsContentConfig = {
    ...defaultAboutUsContentConfig,
    ...userConfig,
    paragraphs: userConfig?.paragraphs ?? defaultAboutUsContentConfig.paragraphs,
    teamPhoto: userConfig?.teamPhoto ?? defaultAboutUsContentConfig.teamPhoto,
  };

  return (
    <section className={className}>
      {/* Orange Background Content Section */}
      <ContentSection config={config} />

      {/* Team Photo Section */}
      <TeamPhoto src={config.teamPhoto.src} alt={config.teamPhoto.alt} />
    </section>
  );
}

// Export sub-components for advanced composition
export { ContentSection } from "./content-section";
export { TeamPhoto } from "./team-photo";
export type { AboutUsContentConfig } from "./types";
export { defaultAboutUsContentConfig } from "./constants";

