'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ba229054e503eef95bbc765530055681",
"index.html": "953f3f2fb4ac02e6c5236d8820cb8f7c",
"/": "953f3f2fb4ac02e6c5236d8820cb8f7c",
"images/icons/favicon-16x16.png": "64d27cb645c04a97dad5049b2f1354ce",
"images/icons/icon-192x192.png": "dd7b5823855869db702fa588f55c8e3a",
"images/icons/favicon.ico": "8243d093d9584dfb3d61315fe81aaa38",
"images/icons/icon-384x384.png": "d41d8cd98f00b204e9800998ecf8427e",
"images/icons/apple-icon.png": "f61d8be22a01d108ae006f7a9aaa8e0f",
"images/icons/apple-icon-144x144.png": "2d70358cf6249febf536eb03e2adcb10",
"images/icons/android-icon-192x192.png": "a6e38360584594c3aa1355ac7d345be5",
"images/icons/apple-icon-precomposed.png": "f61d8be22a01d108ae006f7a9aaa8e0f",
"images/icons/apple-icon-114x114.png": "c20a348b4694b591f5547755af829cf7",
"images/icons/ms-icon-310x310.png": "72c96e518a057f733db44ce40c486cec",
"images/icons/icon-72x72.png": "277da39a2c9358ee8bedc207c6604d60",
"images/icons/icon-96x96.png": "b2b888f13284762a179d022933e36ecd",
"images/icons/ms-icon-144x144.png": "2d70358cf6249febf536eb03e2adcb10",
"images/icons/icon-152x152.png": "47f4b58c67acba01b43225295da1814a",
"images/icons/apple-icon-57x57.png": "57d8d55478a14a21e152a1cfe2820cec",
"images/icons/apple-icon-152x152.png": "fe223b272b1d32b1685136fa16f396a0",
"images/icons/ms-icon-150x150.png": "3b458f08d8c88ef1c7c49cee11780c01",
"images/icons/android-icon-72x72.png": "8faf4c7083ab2b67d550efee5f79e21e",
"images/icons/android-icon-96x96.png": "c4fc8d7addf8b19e8448d4c4a203e610",
"images/icons/android-icon-36x36.png": "9579a3224b2109e2fdbce0ebe2eea5cd",
"images/icons/apple-icon-180x180.png": "a065a75a61b97307036b1da89b7a0347",
"images/icons/favicon-96x96.png": "658cc79ffc6dd67df63e4be61d20407c",
"images/icons/icon-512x512.png": "4289dadd05795b29fd3a24f759ef9b17",
"images/icons/android-icon-48x48.png": "67a98b1c6570e3b60ba2298b8dd631d7",
"images/icons/apple-icon-76x76.png": "64f5223e59e9a81b658080e501ba7c53",
"images/icons/apple-icon-60x60.png": "86a5cc5d5b983de246ef9eb6f3aa0d4b",
"images/icons/icon-144x144.png": "f0af36c8469336d47d9ba432b1d4472a",
"images/icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"images/icons/android-icon-144x144.png": "d547f97bc5ae5abc1f77df2b3d65eedf",
"images/icons/apple-icon-72x72.png": "1ee1b960637efd70057a9b652d4d7d71",
"images/icons/apple-icon-120x120.png": "6dec234656ac7fec4bfeb3350b8676a5",
"images/icons/favicon-32x32.png": "f92b3c3dff9a007612deccae25f45223",
"images/icons/icon-128x128.png": "6c4966d8d232901b78a600708ea11cdf",
"images/icons/ms-icon-70x70.png": "ab72904900132edf0d0b8676d3496d37",
"main.dart.js": "3b35626c165bebb2e5b7f9c9cc074b9f",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "549c654aefa95a3f3031cb845982ed78",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "ce6d148fd95a10d25a85a35de13d30c1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "bc00523579667917cb5437e4d81f9c7e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
