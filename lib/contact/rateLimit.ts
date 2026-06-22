const HOUR_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 10;

type RateLimitStore = Map<string, number[]>;

const globalRateLimit = globalThis as typeof globalThis & {
    __contactRateLimitStore?: RateLimitStore;
};

function getStore(): RateLimitStore {
    if (!globalRateLimit.__contactRateLimitStore) {
        globalRateLimit.__contactRateLimitStore = new Map();
    }

    return globalRateLimit.__contactRateLimitStore;
}

export function isRateLimited(ip: string): boolean {
    const store = getStore();
    const now = Date.now();
    const timestamps = store.get(ip) ?? [];
    const recent = timestamps.filter((timestamp) => now - timestamp < HOUR_MS);

    if (recent.length >= MAX_REQUESTS) {
        store.set(ip, recent);
        return true;
    }

    recent.push(now);
    store.set(ip, recent);
    return false;
}
