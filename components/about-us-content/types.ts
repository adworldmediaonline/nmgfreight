export interface AboutUsContentConfig {
  label: string;
  heading: string;
  paragraphs: {
    text: string;
    boldPhrases: string[];
  }[];
  teamPhoto: {
    src: string;
    alt: string;
  };
}

