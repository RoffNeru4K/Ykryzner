const CACHE_NAME = 'page-viewer-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    // Tambahkan resource lain yang ingin di-cache
];

// Install service worker dan cache files
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch dan gunakan cache saat offline
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
