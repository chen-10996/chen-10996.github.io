import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Peng Chen's academic profile", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Peng Chen \| Urban Environmental Scholar<\/title>/i);
  assert.match(html, /My research examines interactions among built environments/);
  assert.match(html, /Equitable environmental and climate adaptation planning/);
  assert.match(html, /Networks of Plans/);
  assert.match(html, /Planning dimensions/);
  assert.match(html, /Implementation and Monitoring/);
  assert.doesNotMatch(html, /heat-plan-types\.png/);
  assert.match(html, /Connecting urban environments, climate, and health/);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
});

test("keeps primary and compact navigation available", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  assert.match(page, /className="desktop-nav"/);
  assert.match(page, /className="mobile-nav"/);
  assert.match(page, /href="#research"/);
  assert.match(page, /href="#publications"/);
  assert.match(page, /href="#about"/);
  assert.match(page, /href="#contact"/);
});
