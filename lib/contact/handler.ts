import { isRateLimited } from "./rateLimit.js";
import { contactFormSchema, mapContactValidationErrors } from "./schema.js";
import { sendContactEmail } from "./sendEmail.js";

export type ContactHandlerResponse = {
    status: number;
    body: Record<string, unknown>;
};

export async function handleContactRequest(
    payload: unknown,
    ip: string,
): Promise<ContactHandlerResponse> {
    const parsed = contactFormSchema.safeParse(payload);

    if (!parsed.success) {
        return {
            status: 400,
            body: {
                success: false,
                message: "Please fix the highlighted fields and try again.",
                fieldErrors: mapContactValidationErrors(parsed.error),
            },
        };
    }

    const { website, ...contactData } = parsed.data;

    if (website.trim().length > 0) {
        return {
            status: 200,
            body: {
                success: true,
                message: "Your message has been sent successfully.",
            },
        };
    }

    if (isRateLimited(ip)) {
        return {
            status: 429,
            body: {
                success: false,
                message: "Too many messages sent recently. Please try again in an hour.",
            },
        };
    }

    try {
        await sendContactEmail(contactData);

        return {
            status: 200,
            body: {
                success: true,
                message: "Your message has been sent successfully.",
            },
        };
    } catch {
        return {
            status: 500,
            body: {
                success: false,
                message: "Something went wrong while sending your message. Please try again later.",
            },
        };
    }
}

export function getClientIp(
    headers: Record<string, string | string[] | undefined>,
    fallback = "unknown",
): string {
    const forwarded = headers["x-forwarded-for"];

    if (typeof forwarded === "string" && forwarded.length > 0) {
        return forwarded.split(",")[0]?.trim() || fallback;
    }

    if (Array.isArray(forwarded) && forwarded[0]) {
        return forwarded[0].split(",")[0]?.trim() || fallback;
    }

    const realIp = headers["x-real-ip"];
    if (typeof realIp === "string" && realIp.length > 0) {
        return realIp;
    }

    return fallback;
}
