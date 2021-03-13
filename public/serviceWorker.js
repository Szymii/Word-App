const CACHE_NAME = 'version-1';
const urlsToCache = ['index.html', 'ofline.html'];

const self = this;
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cashe');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(() => {
      return fetch(e.request).catch(() => caches.match('ofline.html'));
    })
  );
});

self.addEventListener('activate', (e) => {
  const cacheWitelist = [];
  cacheWitelist.push(CACHE_NAME);

  e.waitUntil(
    caches.keys().then((cacheName) =>
      Promise.all(
        cacheName.map((cacheName) => {
          if (!cacheWitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
