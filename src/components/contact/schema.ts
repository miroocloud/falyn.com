import * as z from "zod";

const ContactSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(20, {
      message: 'Name must not be longer than 20 characters.",',
    }),
  email: z.string().email({ message: "Email is invalid." }),
  discord: z.string().optional(),
  subject: z
    .string()
    .min(2, {
      message: "Subject must be at least 2 characters.",
    })
    .max(60, {
      message: "Subject must not be longer than 60 characters.",
    }),
  message: z.string().min(1, {
    message: "Please, leave us a message.",
  }),
});

export type ContactValues = z.infer<typeof ContactSchema>;
export { ContactSchema };
