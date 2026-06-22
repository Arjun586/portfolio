import type { ContactFieldErrors, ContactFormValues } from "../../../lib/contact/schema";

export type ContactSubmitResponse = {
    success: boolean;
    message: string;
    fieldErrors?: ContactFieldErrors;
};

export async function submitContactForm(
    values: ContactFormValues,
): Promise<ContactSubmitResponse> {
    const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    });

    const data = (await response.json()) as ContactSubmitResponse;

    if (!response.ok) {
        return {
            success: false,
            message: data.message ?? "Unable to send your message. Please try again.",
            fieldErrors: data.fieldErrors,
        };
    }

    return data;
}
