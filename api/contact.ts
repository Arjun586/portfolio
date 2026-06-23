import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getClientIp, handleContactRequest } from "../lib/contact/handler.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Method not allowed.",
        });
    }

    const result = await handleContactRequest(req.body, getClientIp(req.headers));

    return res.status(result.status).json(result.body);
}
