const RR_CACHE = "rr-online-v1";
const RR_ASSETS = [
  "/index.html",
  "/manifest.webmanifest",
  "/assets/css/rr-style.css",
  "/assets/js/index.js",
  "/assets/js/marketplace.js",
  "/assets/js/artist-dashboard.js",
  "/assets/js/upload.js",
  "/assets/js/library.js",
  "/assets/js/admin.js",
  "/assets/js/auth.js",
  "/pages/marketplace.html",
  "/pages/artist-dashboard.html",
  "/pages/upload.html",
  "/pages/library.html",
  "/pages/admin.html",
  "/pages/login.html",
  "/pages/signup.html"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(RR_CACHE).then((cache) => cache.addAll(RR_ASSETS))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== RR_CACHE)
          .map((key) => caches.delete(key))
      )
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return (
        cached ||
        fetch(event.request).catch(() =>
          caches.match("/index.html")
        )
      );
    })
  );
});
