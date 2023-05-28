import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

export const createRateLimit = (url: string, token: string) => {
  return new Ratelimit({
    redis: new Redis({
      url: url,
      token: token,
    }),
    limiter: Ratelimit.fixedWindow(3, "1d"),
    prefix: "@upstash/ratelimit",
  });
};
