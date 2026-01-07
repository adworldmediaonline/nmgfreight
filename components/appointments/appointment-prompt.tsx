import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AppointmentPromptProps {
  buttonLabel: string;
  heading: string;
  className?: string;
}

export function AppointmentPrompt({
  buttonLabel,
  heading,
  className,
}: AppointmentPromptProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <Button
        className="bg-header-orange text-header-text-on-dark hover:bg-header-orange-dark rounded-lg px-4 py-2 text-sm font-semibold"
      >
        {buttonLabel}
      </Button>
      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight">
        {heading}
      </h2>
    </div>
  );
}

