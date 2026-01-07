import type { AppointmentFormConfig } from "./types";

export const defaultAppointmentFormConfig: AppointmentFormConfig = {
  heading: "Please confirm that you would like to request the following appointment:",
  appointmentTypeOptions: [
    { value: "groupage", label: "Groupage" },
    { value: "transport-solutions", label: "Transport Solutions" },
    { value: "warehousing", label: "Warehousing" },
    { value: "chemicals", label: "Chemicals" },
    { value: "limited-access-delivery", label: "Limited Access Delivery" },
    { value: "interview", label: "Interview" },
    { value: "job-opportunity", label: "Job Opportunity" },
    { value: "others", label: "Others" },
  ],
  submitLabel: "Request Appointment",
};

