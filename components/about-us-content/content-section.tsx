import { cn } from "@/lib/utils";
import type { AboutUsContentConfig } from "./types";

interface ContentSectionProps {
  config: AboutUsContentConfig;
  className?: string;
}

function formatParagraph(text: string, boldPhrases: string[]): React.ReactNode {
  let formattedText = text;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  // Create a map of phrase to index for sorting
  const phraseIndices = boldPhrases
    .map((phrase) => ({
      phrase,
      index: text.toLowerCase().indexOf(phrase.toLowerCase()),
    }))
    .filter((item) => item.index !== -1)
    .sort((a, b) => a.index - b.index);

  phraseIndices.forEach(({ phrase, index }) => {
    // Add text before the bold phrase
    if (index > lastIndex) {
      parts.push(text.slice(lastIndex, index));
    }
    // Add the bold phrase
    parts.push(
      <strong key={`bold-${index}`} className="font-bold">
        {text.slice(index, index + phrase.length)}
      </strong>
    );
    lastIndex = index + phrase.length;
  });

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? <>{parts}</> : text;
}

export function ContentSection({ config, className }: ContentSectionProps) {
  return (
    <div className={cn("bg-header-orange text-header-text-on-dark", className)}>
      <div className="container mx-auto px-4 lg:px-6 py-8 lg:py-10 xl:py-12">
        <div className="max-w-5xl mx-auto">
          {/* Label */}
          <div className="mb-4 lg:mb-5">
            <span className="inline-block border-2 border-header-text-on-dark rounded-lg px-4 py-1.5 lg:px-6 lg:py-2 text-xs lg:text-sm font-semibold uppercase tracking-wide">
              {config.label}
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 lg:mb-7 leading-tight">
            {config.heading}
          </h2>

          {/* Paragraphs */}
          <div className="space-y-4 lg:space-y-5">
            {config.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm lg:text-base leading-relaxed"
              >
                {formatParagraph(paragraph.text, paragraph.boldPhrases)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

