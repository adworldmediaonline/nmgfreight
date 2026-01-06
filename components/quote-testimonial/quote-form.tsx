"use client";

import { useForm } from "@tanstack/react-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Field, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field";
import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { QuoteTestimonialConfig } from "./types";

interface QuoteFormProps {
  config: QuoteTestimonialConfig["form"];
  className?: string;
}

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  incoterms: z.string().min(1, "Please select an incoterm"),
  load: z.string().min(1, "Please select a load type"),
});

export function QuoteForm({ config, className }: QuoteFormProps) {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      incoterms: "",
      load: "",
    },
    validators: {
      onChange: formSchema,
    },
    onSubmit: async ({ value }) => {
      console.log("Form submitted:", value);
      // Handle form submission
    },
  });

  return (
    <div className={cn("bg-header-orange rounded-2xl p-6 lg:p-8 shadow-2xl relative z-10", className)}>
      <h2 className="text-2xl lg:text-3xl font-bold text-header-text-on-dark mb-6 lg:mb-8">
        {config.title}
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <FieldGroup>
          {/* Personal Information Section */}
          <div className="space-y-4 mb-6">
            <h3 className="text-lg font-semibold text-header-text-on-dark">
              {config.personalInfoLabel}
            </h3>

            {/* Name */}
            <form.Field
              name="name"
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <Input
                      id="quote-name"
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Name"
                      className="bg-header-bg-light text-foreground"
                    />
                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>
                );
              }}
            />

            {/* Email */}
            <form.Field
              name="email"
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <Input
                      id="quote-email"
                      name={field.name}
                      type="email"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Email"
                      className="bg-header-bg-light text-foreground"
                    />
                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>
                );
              }}
            />

            {/* Phone */}
            <form.Field
              name="phone"
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <Input
                      id="quote-phone"
                      name={field.name}
                      type="tel"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Phone"
                      className="bg-header-bg-light text-foreground"
                    />
                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>
                );
              }}
            />
          </div>

          {/* Freight Type Section */}
          <div className="space-y-4 mb-6">
            <h3 className="text-lg font-semibold text-header-text-on-dark">
              {config.freightTypeLabel}
            </h3>

            {/* Incoterms */}
            <form.Field
              name="incoterms"
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <Select
                      name={field.name}
                      value={field.state.value}
                      onValueChange={field.handleChange}
                    >
                      <SelectTrigger
                        id="quote-incoterms"
                        aria-invalid={isInvalid}
                        className="w-full bg-header-bg-light text-foreground"
                      >
                        <SelectValue placeholder="Incoterms" />
                      </SelectTrigger>
                      <SelectContent>
                        {config.incotermsOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>
                );
              }}
            />

            {/* Load */}
            <form.Field
              name="load"
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <Select
                      name={field.name}
                      value={field.state.value}
                      onValueChange={field.handleChange}
                    >
                      <SelectTrigger
                        id="quote-load"
                        aria-invalid={isInvalid}
                        className="w-full bg-header-bg-light text-foreground"
                      >
                        <SelectValue placeholder="Load" />
                      </SelectTrigger>
                      <SelectContent>
                        {config.loadOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>
                );
              }}
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center gap-3 mb-4">
            <Button
              type="submit"
              className="bg-header-teal text-header-text-on-dark hover:bg-header-teal/90 flex-1"
            >
              {config.buttonLabel}
            </Button>
            <div className="w-8 h-8 bg-header-bg-light rounded flex items-center justify-center">
              <Check className="h-5 w-5 text-header-orange" />
            </div>
          </div>

          {/* Phone CTA */}
          <div className="text-center mb-4">
            <p className="text-header-text-on-dark">
              Or Give us a call{" "}
              <Link
                href={`tel:${config.phoneNumber.replace(/[^0-9+]/g, "")}`}
                className="font-semibold underline"
              >
                {config.phoneNumber}
              </Link>
            </p>
          </div>

          {/* Support Text */}
          <p className="text-sm text-header-text-on-dark/80 text-center">
            {config.supportText}
          </p>
        </FieldGroup>
      </form>
    </div>
  );
}
