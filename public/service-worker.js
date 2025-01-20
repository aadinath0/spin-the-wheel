self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("spin-app-cache").then((cache) => {
      return cache.addAll(["/", "/bgimage.jpeg", "/logo.png", "/logo-name.png"]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});