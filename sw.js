const CACHE_NAME = `forms-v1`;

// Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    cache.addAll([
      '/',
      // '/css/main.css',
      '/js/main.js',
      '/js/d/addCell_d.js',
      '/js/d/addRow_d.js',
      '/js/d/colHeading_d.js',
      '/js/d/createForm_d.js',
      '/js/d/deleteReally_d.js',
      '/js/d/edit_d.js',
      '/js/d/formMenu_d.js',
      '/js/d/home_d.js',
      '/js/d/mainMenu_d.js',
      '/js/d/qChoice_qDate_qText_d.js',
      '/js/d/question_d.js',
      '/js/d/showForm_d',
      '/js/d/viewAllRows_d.js',
      '/js/shared/dom.js',
      '/js/shared/populateHome_dForms_ul.js',
      '/js/shared/showEdit.js',
      '/js/shared/showForm.js',
      '/js/shared/viewAllRows.js',
    ]);
  })());
});

self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);

    // Get the resource from the cache.
    const cachedResponse = await cache.match(event.request);
    if (cachedResponse) {
      return cachedResponse;
    } else {
        try {
          // If the resource was not in the cache, try the network.
          const fetchResponse = await fetch(event.request);

          // Save the resource in the cache and return it.
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        } catch (e) {
          // The network failed.
        }
    }
  })());
});
