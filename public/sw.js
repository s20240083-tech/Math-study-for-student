/* Summa service worker — offline support for the static learning app. */
const CACHE = "summa-shell-v4";
const CORE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./favicon.svg",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png",
];

async function precache() {
  const cache = await caches.open(CACHE);
  await cache.addAll(CORE);

  // Vite gives the bundles hashed names. Read the built index and cache the
  // exact JS and CSS it references, so the very first install works offline.
  try {
    const response = await fetch("./index.html", { cache: "reload" });
    if (!response.ok) return;
    const html = await response.text();
    const shellUrls = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
      .map((match) => match[1])
      .filter((url) => /\.(?:js|css)$/.test(url))
      .map((url) => new URL(url, self.location.href).href);

    const fontUrls = [];
    await Promise.all(
      shellUrls
        .filter((url) => url.endsWith(".css"))
        .map(async (url) => {
          try {
            const cssResponse = await fetch(url, { cache: "reload" });
            if (!cssResponse.ok) return;
            const css = await cssResponse.text();
            for (const match of css.matchAll(/url\(([^)]+\.woff2?)\)/g)) {
              fontUrls.push(new URL(match[1].replace(/["']/g, ""), url).href);
            }
          } catch {
            // A missing font should never block the offline shell.
          }
        }),
    );

    await Promise.all(
      [...new Set([...shellUrls, ...fontUrls])].map((url) =>
        cache.add(url).catch(() => undefined),
      ),
    );
  } catch {
    // The core shell is still cached if an asset cannot be fetched.
  }
}

self.addEventListener("install", (event) => {
  event.waitUntil(precache().then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() =>
          caches
            .match("./index.html")
            .then((cached) => cached || caches.match("./")),
        ),
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy));
        }
        return response;
      });
    }),
  );
});
