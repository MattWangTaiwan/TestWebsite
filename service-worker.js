importScripts("/precache-manifest.8a4cb5c3229ef21d097a98f4f8ae8f20.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.precaching.precacheAndRoute([]);

workbox.routing.registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif)/g,
  workbox.strategies.cacheFirst({
    cacheName: 'image-cache',
  })
);

