export default {
  async fetch(request, env) {
    if (!env.ASSETS) {
      return new Response("Not Found", {
        status: 404,
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    }

    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);
    headers.set("x-content-type-options", "nosniff");
    headers.set("referrer-policy", "strict-origin-when-cross-origin");
    headers.set("permissions-policy", "camera=(), microphone=(), geolocation=()");
    headers.set("x-frame-options", "DENY");
    return new Response(response.body, { status: response.status, headers });
  },
};
