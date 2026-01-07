export interface AppointmentFormData {
  appointmentTime: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
  appointmentType: string;
}

export interface AppointmentFormConfig {
  heading: string;
  appointmentTypeOptions: { value: string; label: string }[];
  submitLabel: string;
}

