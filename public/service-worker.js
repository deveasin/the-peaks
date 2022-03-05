let cacheName = "peaksV1", // static assets cache name
    dynamicCacheName = "peaksV2"; // dynamic assets cache name

// When sw installing the we are precaching the data
this.addEventListener("install", event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            if(!cache){ return; }
            cache.addAll([
                '/static/js/bundle.js',
                '/favicon.ico',
                '/index.html',
                'https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700&display=swap',
                '/'
            ])
        })
    )
})

// Fetching content from cache, if the data is not present in the cache, then refatching them from request
this.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then(res => {
            return res || fetch(event.request, { cors: true }).then(res => {
                return caches.open(dynamicCacheName).then(cache => {
                    if(res){ // we may improve here by limiting some request. Did not go further because of time crisis. 
                        cache.put(event.request.url, res.clone());
                    }
                    return res;
                })
            })
        })
        .catch((err) => caches.match('/index.html')) // fallback if there is an error while requesting api
    )
})