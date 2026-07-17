import { cp, mkdir, rm, writeFile } from "node:fs/promises";

await rm("dist", { recursive: true, force: true });
await cp("out", "dist", { recursive: true });
await mkdir("dist/server", { recursive: true });
await mkdir("dist/.openai", { recursive: true });
await cp(".openai/hosting.json", "dist/.openai/hosting.json");

const worker = `export default {
  async fetch(request, env) {
    if (!env?.ASSETS?.fetch) {
      return new Response("Site assets are unavailable", { status: 503 });
    }

    const url = new URL(request.url);
    if (url.pathname === "/") url.pathname = "/index.html";

    let response = await env.ASSETS.fetch(new Request(url, request));
    const acceptsHtml = request.headers.get("accept")?.includes("text/html");
    if (response.status === 404 && acceptsHtml) {
      url.pathname = "/index.html";
      response = await env.ASSETS.fetch(new Request(url, request));
    }

    return response;
  }
};
`;

await writeFile("dist/server/index.js", worker, "utf8");
