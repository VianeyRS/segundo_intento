const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "index.html",
  "css/estilo.css",
  "js/nucleo.js",
  "img/Crayola.png",
  "img/nube.png",
  "img/suelo.png",
  "img/pizarron.png",
  "img/pizarron1.png",
  "img/pizarron2.png",
  "img/pizarron3.png",
  "img/saca.png",
  "img/saca2.png",
  
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
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