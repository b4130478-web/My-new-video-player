const CACHE_NAME = 'video-player-v1';
const ASSETS = [
  './',
  './index.html',
  './readme' // Add your specific video files or style sheets here if you have any
];

// Install and cache local assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Serve cached files when offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});

