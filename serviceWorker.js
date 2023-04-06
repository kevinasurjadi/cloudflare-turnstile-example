const staticCloudflareTurnstileExample = "kevinasurjadi-cloudflare-turnstile-example-v1"
const assets = [
    "/",
    "/index.html",
    "/app.js",
    "/android-chrome-192x192.png",
    "/android-chrome-512x512.png",
    "/apple-touch-icon.png",
    "/favicon-16x16.png",
    "/favicon-32x32.png",
    "/favicon.ico",
    "/site.webmanifest"
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticCloudflareTurnstileExample).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})