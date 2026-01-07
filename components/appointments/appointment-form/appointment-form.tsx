"use client";

import { useForm } from "@tanstack/react-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Field, FieldError } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import type { AppointmentFormConfig } from "./types";

interface AppointmentFormProps {
  config: AppointmentFormConfig;
  className?: string;
}

const appointmentFormSchema = z.object({
  appointmentTime: z.string().min(1, "Appointment time is required"),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  message: z.string().min(1, "Message is required"),
  appointmentType: z.string().min(1, "Please select an appointment type"),
});

export function AppointmentForm({ config, className }: AppointmentFormProps) {
  const form = useForm({
    defaultValues: {
      appointmentTime: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
      appointmentType: "groupage", // Pre-selected
    },
    validators: {
      onChange: appointmentFormSchema,
    },
    onSubmit: async ({ value }) => {
      console.log("Form submitted:", value);
      // Handle form submission here
    },
  });

  return (
    <div className={cn("bg-white rounded-xl p-8 lg:p-10 xl:p-12 shadow-lg", className)}>
      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-8 lg:mb-10">
        {config.heading}
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="space-y-6 lg:space-y-8"
      >
        {/* Appointment Time */}
        <form.Field
          name="appointmentTime"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid}>
                <Label htmlFor={field.name} className="text-base font-semibold">
                  Appointment Time
                </Label>
                <Input
                  id={field.name}
                  name={field.name}
                  type="datetime-local"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  aria-invalid={isInvalid}
                  className="bg-muted text-foreground mt-2"
                />
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            );
          }}
        />

        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <form.Field
            name="name"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <Label htmlFor={field.name} className="text-base font-semibold">
                    Name
                  </Label>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    aria-invalid={isInvalid}
                    className="bg-muted text-foreground mt-2"
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />

          <form.Field
            name="email"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <Label htmlFor={field.name} className="text-base font-semibold">
                    Email
                  </Label>
                  <Input
                    id={field.name}
                    name={field.name}
                    type="email"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    aria-invalid={isInvalid}
                    className="bg-muted text-foreground mt-2"
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />

          <form.Field
            name="phone"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <Label htmlFor={field.name} className="text-base font-semibold">
                    Phone
                  </Label>
                  <Input
                    id={field.name}
                    name={field.name}
                    type="tel"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    aria-invalid={isInvalid}
                    className="bg-muted text-foreground mt-2"
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />
        </div>

        {/* Address */}
        <form.Field
          name="address"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid}>
                <Label htmlFor={field.name} className="text-base font-semibold">
                  Address
                </Label>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  aria-invalid={isInvalid}
                  className="bg-muted text-foreground mt-2"
                />
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            );
          }}
        />

        {/* Message */}
        <form.Field
          name="message"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid}>
                <Label htmlFor={field.name} className="text-base font-semibold">
                  Message
                </Label>
                <Textarea
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  aria-invalid={isInvalid}
                  className="bg-muted text-foreground mt-2 min-h-[120px]"
                  rows={5}
                />
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            );
          }}
        />

        {/* Appointment Type Radio Buttons */}
        <form.Field
          name="appointmentType"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid}>
                <div className="bg-muted rounded-lg p-4 lg:p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                    {config.appointmentTypeOptions.map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center space-x-2 lg:space-x-3"
                      >
                        <input
                          type="radio"
                          id={`appointment-type-${option.value}`}
                          name={field.name}
                          value={option.value}
                          checked={field.state.value === option.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                          className="w-5 h-5 lg:w-6 lg:h-6 text-header-orange border-gray-400 focus:ring-header-orange cursor-pointer"
                          aria-invalid={isInvalid}
                        />
                        <Label
                          htmlFor={`appointment-type-${option.value}`}
                          className="text-sm lg:text-base font-medium text-foreground cursor-pointer"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            );
          }}
        />

        {/* Submit Button */}
        <div className="flex justify-center pt-4">
          <Button
            type="submit"
            className="bg-header-orange text-header-text-on-dark hover:bg-header-orange-dark px-8 py-6 text-base lg:text-lg font-semibold rounded-lg"
          >
            {config.submitLabel}
          </Button>
        </div>
      </form>
    </div>
  );
}

