import { AppointmentForm } from "./appointment-form";
import type { AppointmentFormConfig } from "./types";
import { defaultAppointmentFormConfig } from "./constants";

interface AppointmentFormSectionProps {
  config?: Partial<AppointmentFormConfig>;
  className?: string;
}

export function AppointmentFormSection({
  config: userConfig,
  className,
}: AppointmentFormSectionProps) {
  const config: AppointmentFormConfig = {
    ...defaultAppointmentFormConfig,
    ...userConfig,
    appointmentTypeOptions:
      userConfig?.appointmentTypeOptions ??
      defaultAppointmentFormConfig.appointmentTypeOptions,
  };

  return (
    <section className={className}>
      <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-16 xl:py-20">
        <div className="max-w-4xl xl:max-w-5xl mx-auto">
          <AppointmentForm config={config} />
        </div>
      </div>
    </section>
  );
}

// Export sub-components for advanced composition
export { AppointmentForm } from "./appointment-form";
export type { AppointmentFormConfig, AppointmentFormData } from "./types";
export { defaultAppointmentFormConfig } from "./constants";

