import { getAssetFromKV } from "@cloudflare/kv-asset-handler";

export default {
  async fetch(request: Request, env: unknown, ctx: ExecutionContext): Promise<Response> {
    try {
      return await getAssetFromKV(
        { request, waitUntil: ctx.waitUntil.bind(ctx) },
        { cacheControl: { default: "1 week" } },
      );
    } catch {
      return new Response("Not Found", { status: 404 });
    }
  },
};