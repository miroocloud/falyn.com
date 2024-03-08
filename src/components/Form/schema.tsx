"use client";
import z from "zod";

const ContactSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(20, {
      message: 'Name must not be longer than 30 characters.",',
    }),
  email: z.string().email({ message: "Email is invalid." }),
  discord: z.string().optional(),
  message: z.string().min(1, {
    message: "Cannot be empty.",
  }),
});

const ReportIssueSchema = z.object({
  security_level: z.enum([""]),
});

export type ContactFormValues = z.infer<typeof ContactSchema>;
export { ContactSchema };
