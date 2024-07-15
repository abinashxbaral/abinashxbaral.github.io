'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e9a8155feeecfe50b36da52fcfa14c57",
"assets/AssetManifest.bin.json": "49152e2db156b543d7697a93df9b0aee",
"assets/AssetManifest.json": "29fb67f6c8417634ddec8b9200f2e912",
"assets/assets/fonts/Roboto/Roboto-Black.ttf": "d6a6f8878adb0d8e69f9fa2e0b622924",
"assets/assets/fonts/Roboto/Roboto-BlackItalic.ttf": "c3332e3b8feff748ecb0c6cb75d65eae",
"assets/assets/fonts/Roboto/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/Roboto/Roboto-BoldItalic.ttf": "fd6e9700781c4aaae877999d09db9e09",
"assets/assets/fonts/Roboto/Roboto-Italic.ttf": "cebd892d1acfcc455f5e52d4104f2719",
"assets/assets/fonts/Roboto/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/assets/fonts/Roboto/Roboto-LightItalic.ttf": "5788d5ce921d7a9b4fa0eaa9bf7fec8d",
"assets/assets/fonts/Roboto/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/Roboto/Roboto-MediumItalic.ttf": "c16d19c2c0fd1278390a82fc245f4923",
"assets/assets/fonts/Roboto/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/Roboto/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/assets/fonts/Roboto/Roboto-ThinItalic.ttf": "7bcadd0675fe47d69c2d8aaef683416f",
"assets/assets/icons/blog-tile.webp": "7d42dc234666166258ffc20a89190838",
"assets/assets/icons/brands-story-icon.webp": "f30f49654b04f0758cd5bc009fbcf0fe",
"assets/assets/icons/email.webp": "a8a84535ac0f39c5ecc11abc8ac49d90",
"assets/assets/icons/emi-calculator-tile.webp": "59a9a4616c41e057560a780a5907da87",
"assets/assets/icons/explore-story-icon.webp": "535460d8253777312a246f373ac78139",
"assets/assets/icons/featured-story-icon.webp": "1d5567ec388029be909dc234b04542da",
"assets/assets/icons/new-arrival-story-icon.webp": "618fefe31fed831cc8ff1cfbe5ad24d0",
"assets/assets/icons/sale-story-icon.webp": "edcbbe761e9c996c4084545a95986d0b",
"assets/assets/icons/station-marker.webp": "6c5852c803901030020b414ad77ccc23",
"assets/assets/icons/station-marker0white.webp": "d31552c5c689f3e879f32bc6fd108a7f",
"assets/assets/icons/user-two.webp": "ad4cc46ec307f18c8705347caf012c5d",
"assets/assets/icons/verified-icon-torchred.webp": "9e45e81be74d9f313aa9fae514ade790",
"assets/assets/icons/verify.webp": "13fd6401622d5034dfe82bf459fa0e9d",
"assets/assets/images/notif-empty.webp": "3c23d79fba4349350a91ea0103a9bf11",
"assets/assets/logos/full-black-logo-text.webp": "a0edda48bf6831a4ec187c5fdf61a9bf",
"assets/assets/logos/motar-logo-200.webp": "25ae7296c79a7c950a84a31815c9e998",
"assets/assets/logos/motar-logo-300.webp": "364cee311304aa17b0492d0dd4da2107",
"assets/assets/logos/white-logo-with-text-300.webp": "2b13e7debf3e1b84ef411b37970fcb26",
"assets/assets/logos/white-logo-with-text.webp": "0edeb7203664a4a96b019170f06c3a82",
"assets/assets/motar-icons/250.png": "5c8d0190f2a608923dbf653dc1e7f7f6",
"assets/assets/motar-icons/adaptive-icon-torchred-back.png": "e98730f99272fc3d87853579780004e6",
"assets/assets/motar-icons/foreground-motar-dash.png": "49e87b2112e453e743dd4a47071c6e3c",
"assets/assets/motar-icons/ic_launcher.png": "4a132cf7e0f7c2cd0916bf26658a131a",
"assets/assets/placeholders/1000-1000.png": "4ce04e4f59bc7285619705f0ee5f9a8e",
"assets/assets/placeholders/1000x600.png": "b0648fb54da74154659eaab8bb3f155a",
"assets/assets/placeholders/1200-600.png": "1e65ee63afc8da7972e005d4885364cf",
"assets/assets/placeholders/1920-1080.png": "b623c37bf90dbd3b9de41eaf130c3844",
"assets/assets/placeholders/1920x700.png": "0c1678720078e8e1c4edadb1f46b904c",
"assets/assets/placeholders/500-500.png": "348b1849ebfca440e3d53a688c2a3a93",
"assets/assets/placeholders/duffle.webp": "c8b05b5f2bced23e4012c94ff5a34943",
"assets/assets/placeholders/placeholder-real.jpg": "4566a133f6cb12d8588ae197588ad5f2",
"assets/assets/placeholders/user-profile.jpg": "fa98289925d06ddbde997509b245fe4d",
"assets/assets/placeholders/yamaha-logo-500.jpg": "f913b1e836900830e921fb1d2838a4dd",
"assets/assets/splash/splash-black.png": "5c50a60a65be5decb02ef86c32d8c809",
"assets/assets/splash/splash-white.png": "c498b57ed4a533b422ebd9666f9f198b",
"assets/FontManifest.json": "320f4147751e702aa323721860d15c42",
"assets/fonts/MaterialIcons-Regular.otf": "12304ccdcef3a8b9b684075df64a2441",
"assets/NOTICES": "09b712df3d993caac50fdd722749435e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "95d53dcc5e7a67a446d26b786ff3c2ee",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "ab9aff2a7c6c84437d975e6db39d07a6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b3c229a6c4f2344873fabe52fda880cf",
"/": "b3c229a6c4f2344873fabe52fda880cf",
"main.dart.js": "d3a94f55b209cf4cfdc4befdcf3484a4",
"manifest.json": "a54cadea59498711ae05fc5b105621f2",
"version.json": "924969cff4c5d8f3a8473af1f88076ff"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
