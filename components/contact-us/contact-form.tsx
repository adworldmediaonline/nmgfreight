"use client";

import { useForm } from "@tanstack/react-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import type { ContactUsConfig } from "./types";

interface ContactFormProps {
  config: ContactUsConfig["form"];
  className?: string;
}

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  companyName: z.string().min(1, "Company name is required"),
  message: z.string().min(1, "Message is required"),
});

export function ContactForm({ config, className }: ContactFormProps) {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      companyName: "",
      message: "",
    },
    validators: {
      onChange: contactFormSchema,
    },
    onSubmit: async ({ value }) => {
      console.log("Form submitted:", value);
      // Handle form submission here
    },
  });

  return (
    <div className={cn("relative", className)}>
      {/* Background with wave patterns */}
      <div className="absolute inset-0 bg-header-teal rounded-2xl lg:rounded-3xl overflow-hidden">
        {/* Wave pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 400"
            preserveAspectRatio="none"
          >
            <path
              d="M0,200 Q300,100 600,200 T1200,200 L1200,400 L0,400 Z"
              fill="currentColor"
              className="text-header-text-on-dark"
            />
            <path
              d="M0,300 Q300,200 600,300 T1200,300 L1200,400 L0,400 Z"
              fill="currentColor"
              className="text-header-text-on-dark"
            />
          </svg>
        </div>
      </div>

      {/* Form Content */}
      <div className="relative z-10 p-6 lg:p-10 xl:p-12">
        {/* Header */}
        <div className="mb-8 lg:mb-10">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-header-text-on-dark mb-4">
            {config.title}
          </h2>
          <div className="w-16 h-0.5 bg-header-text-on-dark mb-4" />
          <div className="space-y-2">
            {config.description.map((line, index) => (
              <p
                key={index}
                className="text-base lg:text-lg text-header-text-on-dark/90"
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {/* Left Column */}
            <div className="space-y-4 lg:space-y-5">
              <form.Field
                name="name"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel className="text-header-text-on-dark mb-1">
                        Name <span className="text-header-orange">*</span>
                      </FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        onBlur={field.handleBlur}
                        aria-invalid={isInvalid}
                        className="bg-white text-foreground"
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
                      <FieldLabel className="text-header-text-on-dark mb-1">
                        E-Mail <span className="text-header-orange">*</span>
                      </FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        type="email"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        onBlur={field.handleBlur}
                        aria-invalid={isInvalid}
                        className="bg-white text-foreground"
                      />
                      {isInvalid && <FieldError errors={field.state.meta.errors} />}
                    </Field>
                  );
                }}
              />

              <form.Field
                name="message"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel className="text-header-text-on-dark mb-1">
                        Text <span className="text-header-orange">*</span>
                      </FieldLabel>
                      <Textarea
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        onBlur={field.handleBlur}
                        aria-invalid={isInvalid}
                        className="bg-white text-foreground min-h-[150px] lg:min-h-[200px]"
                        rows={8}
                      />
                      {isInvalid && <FieldError errors={field.state.meta.errors} />}
                    </Field>
                  );
                }}
              />
            </div>

            {/* Right Column */}
            <div className="space-y-4 lg:space-y-5">
              <form.Field
                name="phone"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel className="text-header-text-on-dark mb-1">
                        Phone No <span className="text-header-orange">*</span>
                      </FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        type="tel"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        onBlur={field.handleBlur}
                        aria-invalid={isInvalid}
                        className="bg-white text-foreground"
                      />
                      {isInvalid && <FieldError errors={field.state.meta.errors} />}
                    </Field>
                  );
                }}
              />

              <form.Field
                name="companyName"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel className="text-header-text-on-dark mb-1">
                        Company Name <span className="text-header-orange">*</span>
                      </FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        onBlur={field.handleBlur}
                        aria-invalid={isInvalid}
                        className="bg-white text-foreground"
                      />
                      {isInvalid && <FieldError errors={field.state.meta.errors} />}
                    </Field>
                  );
                }}
              />
            </div>
          </div>

          <div className="flex justify-center mt-8 lg:mt-10">
            <Button
              type="submit"
              className="bg-header-orange text-header-text-on-dark hover:bg-header-orange-dark px-8 py-6 text-base lg:text-lg font-semibold"
            >
              {config.submitLabel}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

