import { AppointmentPrompt } from "./appointment-prompt";
import { SupportBox } from "./support-box";
import { AppointmentCalendar } from "./appointment-calendar";
import { AppointmentFormSection } from "./appointment-form";
import type { AppointmentsConfig } from "./types";
import { defaultAppointmentsConfig } from "./constants";
import { cn } from "@/lib/utils";

interface AppointmentsProps {
  config?: Partial<AppointmentsConfig>;
  className?: string;
}

export function Appointments({
  config: userConfig,
  className,
}: AppointmentsProps) {
  const config: AppointmentsConfig = {
    ...defaultAppointmentsConfig,
    ...userConfig,
    appointmentPrompt:
      userConfig?.appointmentPrompt ?? defaultAppointmentsConfig.appointmentPrompt,
    supportBox: userConfig?.supportBox ?? defaultAppointmentsConfig.supportBox,
  };

  return (
    <>
      <section className={cn("py-12 lg:py-16 xl:py-20 bg-background", className)}>
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Section */}
            <div className="space-y-8">
              <AppointmentPrompt
                buttonLabel={config.appointmentPrompt.buttonLabel}
                heading={config.appointmentPrompt.heading}
              />
              <SupportBox
                heading={config.supportBox.heading}
                description={config.supportBox.description}
                buttonLabel={config.supportBox.buttonLabel}
              />
            </div>

            {/* Right Section - Calendar */}
            <div>
              <AppointmentCalendar />
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <AppointmentFormSection />
    </>
  );
}

// Export sub-components for advanced composition
export { AppointmentPrompt } from "./appointment-prompt";
export { SupportBox } from "./support-box";
export { AppointmentCalendar } from "./appointment-calendar";
export type { AppointmentsConfig } from "./types";
export { defaultAppointmentsConfig } from "./constants";

