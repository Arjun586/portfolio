import { z } from "zod";

export const contactFormSchema = z.object({
    name: z.string().trim().min(2, "Name must be at least 2 characters."),
    email: z.string().trim().email("Please enter a valid email address."),
    subject: z.string().trim().min(3, "Subject must be at least 3 characters."),
    message: z.string().trim().min(10, "Message must be at least 10 characters."),
    website: z.string().optional().default(""),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export type ContactFormField = keyof Pick<
    ContactFormValues,
    "name" | "email" | "subject" | "message"
>;

export type ContactFieldErrors = Partial<Record<ContactFormField, string>>;

export function mapContactValidationErrors(
    error: z.ZodError,
): ContactFieldErrors {
    const fieldErrors: ContactFieldErrors = {};

    for (const issue of error.issues) {
        const field = issue.path[0];
        if (
            field === "name" ||
            field === "email" ||
            field === "subject" ||
            field === "message"
        ) {
            fieldErrors[field] ??= issue.message;
        }
    }

    return fieldErrors;
}
