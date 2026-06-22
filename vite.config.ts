import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import type { IncomingMessage } from "node:http";
import { defineConfig, loadEnv, type Plugin } from "vite";
import { getClientIp, handleContactRequest } from "./lib/contact/handler";

async function readJsonBody(req: IncomingMessage): Promise<unknown> {
    const chunks: Buffer[] = [];

    for await (const chunk of req) {
        chunks.push(Buffer.from(chunk));
    }

    if (chunks.length === 0) {
        return {};
    }

    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

function contactApiPlugin(): Plugin {
    return {
        name: "contact-api",
        configureServer(server) {
            server.middlewares.use(async (req, res, next) => {
                if (req.url !== "/api/contact") {
                    next();
                    return;
                }

                if (req.method !== "POST") {
                    res.statusCode = 405;
                    res.setHeader("Content-Type", "application/json");
                    res.end(JSON.stringify({ success: false, message: "Method not allowed." }));
                    return;
                }

                try {
                    const body = await readJsonBody(req);
                    const ip = getClientIp(
                        req.headers as Record<string, string | string[] | undefined>,
                        req.socket.remoteAddress ?? "127.0.0.1",
                    );
                    const result = await handleContactRequest(body, ip);

                    res.statusCode = result.status;
                    res.setHeader("Content-Type", "application/json");
                    res.end(JSON.stringify(result.body));
                } catch {
                    res.statusCode = 500;
                    res.setHeader("Content-Type", "application/json");
                    res.end(
                        JSON.stringify({
                            success: false,
                            message: "Something went wrong while sending your message. Please try again later.",
                        }),
                    );
                }
            });
        },
    };
}

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    Object.assign(process.env, env);

    return {
        plugins: [react(), tailwindcss(), contactApiPlugin()],
    };
});
