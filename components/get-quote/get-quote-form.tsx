"use client";

import { useForm } from "@tanstack/react-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Field,
  FieldGroup,
  FieldError,
} from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import type { GetQuoteConfig } from "./types";

interface GetQuoteFormProps {
  config: GetQuoteConfig;
  className?: string;
}

const getQuoteFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  freightType: z.string().min(1, "Freight type is required"),
  departureCity: z.string().min(1, "Departure city is required"),
  destinationCity: z.string().min(1, "Destination city is required"),
  incoterms: z.string().min(1, "Incoterms is required"),
  weight: z.string().min(1, "Weight is required"),
  height: z.string().min(1, "Height is required"),
  width: z.string().min(1, "Width is required"),
  length: z.string().min(1, "Length is required"),
  serviceOption: z.string(),
});

export function GetQuoteForm({ config, className }: GetQuoteFormProps) {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      freightType: "",
      departureCity: "",
      destinationCity: "",
      incoterms: "",
      weight: "",
      height: "",
      width: "",
      length: "",
      serviceOption: "",
    },
    validators: {
      onChange: getQuoteFormSchema,
    },
    onSubmit: async ({ value }) => {
      console.log("Form submitted:", value);
      // Handle form submission here
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className={cn("space-y-8", className)}
    >
      {/* Personal Information Section */}
      <div className="space-y-4">
        <h3 className="text-lg lg:text-xl font-bold text-header-teal mb-4">
          {config.sections.personalInfo.label}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <form.Field
            name="name"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    aria-invalid={isInvalid}
                    placeholder="Name"
                    className="bg-muted text-foreground"
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
                  <Input
                    id={field.name}
                    name={field.name}
                    type="email"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    aria-invalid={isInvalid}
                    placeholder="Email"
                    className="bg-muted text-foreground"
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
                  <Input
                    id={field.name}
                    name={field.name}
                    type="tel"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    aria-invalid={isInvalid}
                    placeholder="Phone"
                    className="bg-muted text-foreground"
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />
        </div>
      </div>

      {/* Shipment Information Section */}
      <div className="space-y-4">
        <h3 className="text-lg lg:text-xl font-bold text-header-teal mb-4">
          {config.sections.shipmentInfo.label}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <form.Field
            name="freightType"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <Select
                    name={field.name}
                    value={field.state.value}
                    onValueChange={field.handleChange}
                  >
                    <SelectTrigger
                      aria-invalid={isInvalid}
                      className="bg-muted text-foreground"
                    >
                      <SelectValue placeholder="Freight Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {config.freightTypeOptions.map((option) => (
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

          <form.Field
            name="departureCity"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    aria-invalid={isInvalid}
                    placeholder="Departure City"
                    className="bg-muted text-foreground"
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />

          <form.Field
            name="destinationCity"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    aria-invalid={isInvalid}
                    placeholder="Destination City"
                    className="bg-muted text-foreground"
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />
        </div>
      </div>

      {/* Goods Information Section */}
      <div className="space-y-4">
        <h3 className="text-lg lg:text-xl font-bold text-header-teal mb-4">
          {config.sections.goodsInfo.label}
        </h3>

        {/* Incoterms Dropdown */}
        <form.Field
          name="incoterms"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid}>
                <Select
                  name={field.name}
                  value={field.state.value}
                  onValueChange={field.handleChange}
                >
                  <SelectTrigger
                    aria-invalid={isInvalid}
                    className="bg-muted text-foreground"
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

        {/* Dimensions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <form.Field
            name="weight"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    aria-invalid={isInvalid}
                    placeholder="Weight"
                    className="bg-muted text-foreground"
                  />
                  {isInvalid && (
                    <FieldError errors={field.state.meta.errors} />
                  )}
                </Field>
              );
            }}
          />

          <form.Field
            name="height"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    aria-invalid={isInvalid}
                    placeholder="Height"
                    className="bg-muted text-foreground"
                  />
                  {isInvalid && (
                    <FieldError errors={field.state.meta.errors} />
                  )}
                </Field>
              );
            }}
          />

          <form.Field
            name="width"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    aria-invalid={isInvalid}
                    placeholder="Width"
                    className="bg-muted text-foreground"
                  />
                  {isInvalid && (
                    <FieldError errors={field.state.meta.errors} />
                  )}
                </Field>
              );
            }}
          />

          <form.Field
            name="length"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid}>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    aria-invalid={isInvalid}
                    placeholder="Length"
                    className="bg-muted text-foreground"
                  />
                  {isInvalid && (
                    <FieldError errors={field.state.meta.errors} />
                  )}
                </Field>
              );
            }}
          />
        </div>

        {/* Radio Buttons */}
        <form.Field name="serviceOption">
          {(field) => (
            <div className="flex flex-wrap gap-4 lg:gap-6">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="incoterms-radio"
                  name="serviceOption"
                  value="incoterms"
                  checked={field.state.value === "incoterms"}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="w-4 h-4 text-header-orange border-gray-300 focus:ring-header-orange"
                />
                <Label
                  htmlFor="incoterms-radio"
                  className="text-sm font-medium text-foreground cursor-pointer"
                >
                  Incoterms
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="expressDelivery"
                  name="serviceOption"
                  value="expressDelivery"
                  checked={field.state.value === "expressDelivery"}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="w-4 h-4 text-header-orange border-gray-300 focus:ring-header-orange"
                />
                <Label
                  htmlFor="expressDelivery"
                  className="text-sm font-medium text-foreground cursor-pointer"
                >
                  Express Delivery
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="insurance"
                  name="serviceOption"
                  value="insurance"
                  checked={field.state.value === "insurance"}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="w-4 h-4 text-header-orange border-gray-300 focus:ring-header-orange"
                />
                <Label
                  htmlFor="insurance"
                  className="text-sm font-medium text-foreground cursor-pointer"
                >
                  Insurance
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="packaging"
                  name="serviceOption"
                  value="packaging"
                  checked={field.state.value === "packaging"}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="w-4 h-4 text-header-orange border-gray-300 focus:ring-header-orange"
                />
                <Label
                  htmlFor="packaging"
                  className="text-sm font-medium text-foreground cursor-pointer"
                >
                  Packaging
                </Label>
              </div>
            </div>
          )}
        </form.Field>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center pt-4">
        <Button
          type="submit"
          className="bg-header-teal text-header-text-on-dark hover:bg-header-teal/90 px-8 py-6 text-base lg:text-lg font-semibold rounded-lg"
        >
          {config.submitLabel}
        </Button>
      </div>
    </form>
  );
}

