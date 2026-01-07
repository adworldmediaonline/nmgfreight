import { GetQuoteForm } from "./get-quote-form";
import type { GetQuoteConfig } from "./types";
import { defaultGetQuoteConfig } from "./constants";

interface GetQuoteProps {
  config?: Partial<GetQuoteConfig>;
  className?: string;
}

export function GetQuote({ config: userConfig, className }: GetQuoteProps) {
  const config: GetQuoteConfig = {
    ...defaultGetQuoteConfig,
    ...userConfig,
    sections: userConfig?.sections ?? defaultGetQuoteConfig.sections,
    freightTypeOptions:
      userConfig?.freightTypeOptions ?? defaultGetQuoteConfig.freightTypeOptions,
    incotermsOptions:
      userConfig?.incotermsOptions ?? defaultGetQuoteConfig.incotermsOptions,
  };

  return (
    <section className={className}>
      <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <GetQuoteForm config={config} />
        </div>
      </div>
    </section>
  );
}

// Export sub-components for advanced composition
export { GetQuoteForm } from "./get-quote-form";
export type { GetQuoteConfig, GetQuoteFormData } from "./types";
export { defaultGetQuoteConfig } from "./constants";

