import { Resend } from "resend";
import type { ContactFormValues } from "./schema.js";

export type ContactEmailPayload = Pick<
    ContactFormValues,
    "name" | "email" | "subject" | "message"
>;

function getEnv(name: string): string {
    const value = process.env[name]?.trim();
    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }
    return value;
}

export async function sendContactEmail(data: ContactEmailPayload): Promise<void> {
    const apiKey = getEnv("RESEND_API_KEY");
    const to = getEnv("CONTACT_RECEIVER_EMAIL");
    const from =
        process.env.RESEND_FROM_EMAIL?.trim() ??
        "Portfolio Contact <onboarding@resend.dev>";

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
        from,
        to: [to],
        replyTo: data.email,
        subject: `[Portfolio Contact] ${data.subject}`,
        text: [
            "New portfolio contact form submission",
            "",
            `Name: ${data.name}`,
            `Email: ${data.email}`,
            `Subject: ${data.subject}`,
            "",
            "Message:",
            data.message,
        ].join("\n"),
        html: `
            <h2>New portfolio contact form submission</h2>
            <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
            <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(data.message).replace(/\n/g, "<br />")}</p>
        `,
    });

    if (error) {
        throw new Error(error.message);
    }
}

function escapeHtml(value: string): string {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}
