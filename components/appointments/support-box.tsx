import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SupportBoxProps {
  heading: string;
  description: string;
  buttonLabel: string;
  className?: string;
}

export function SupportBox({
  heading,
  description,
  buttonLabel,
  className,
}: SupportBoxProps) {
  return (
    <div
      className={cn(
        "bg-header-teal text-header-text-on-dark rounded-xl p-6 lg:p-8 space-y-6",
        className
      )}
    >
      <h3 className="text-xl lg:text-2xl font-bold">{heading}</h3>
      <p className="text-base lg:text-lg text-header-text-on-dark/90">
        {description}
      </p>
      <div className="flex justify-center">
        <Button className="bg-header-orange text-header-text-on-dark hover:bg-header-orange-dark rounded-lg px-6 py-3 font-semibold">
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}

