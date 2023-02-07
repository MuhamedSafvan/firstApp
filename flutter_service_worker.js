'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "cf9b7ad64d44d14c6c41bef34c46df10",
".git/config": "ff313970ba5bf98774174f3d50979c6e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4e55a9177237efa5f15b8187265b6325",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5c48c511bbed1abfb9ab07d8090b6078",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "75058e11ce893f3da94b145fa0acb36e",
".git/logs/refs/heads/firstApp": "58493bd9a3578b476f41a397cf152083",
".git/logs/refs/heads/main": "2e275204fe283928f6555429ac9584c2",
".git/logs/refs/remotes/origin/firstApp": "8bc42db034fa929e9b1e0e527f0e78c1",
".git/logs/refs/remotes/origin/main": "2d6edb3477245a56b0e174fa3f20c2b8",
".git/objects/05/9f15758837eb1c1b0cab24110efc3799d46445": "11bdbabbc3e334830b1b439789ca4bde",
".git/objects/08/193163815b597e9e94fec0e577bd33ac82cfe2": "66f3093515357592ef14a2d87313e0dd",
".git/objects/15/39b33d8b3debf1f3e16f7470b8ed960c7e3299": "a3ff990102cdde6c1b59b5062ab1a20d",
".git/objects/18/6b6a4a9dfa306ecb7dcb2b0cc67326f3ca65f5": "ca23744c899d60d21bb6fcd565d138e2",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1e/b79ba4ec4b164721be9437041e53aabfea0f12": "5d259a401ce3cfb33ad2aac673a7b626",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/45/1292fe02150646468e842939dfae5b50f2186a": "bda0248db2d418feafbf0d58a1045f3b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/842f377d76b871df6961106934886986b3efec": "3863e2fd65237cf1f9e269b65f80573d",
".git/objects/65/3d0381ca0dc6494ad682e992a644b503124ca0": "fe264d5210a61db685c75b22e55f10af",
".git/objects/6b/ae4fd976e8f9c874341c58a741b8126d0a559d": "6d775d5d1f9fa0ef5bb04c6e26fe142e",
".git/objects/6c/caf29c69734b086c53d2eeafd5edf7d71263c5": "220d896161a9d0fd7860c5f390db8e4f",
".git/objects/6f/ea92908f8921cdb3675f178f206952088727f3": "8643b9daf482af1b184ce8851a6d1f87",
".git/objects/70/3c54a55f5032083ac7f8c19827436466d20216": "036bab0fbafbb747a7241c1738db3655",
".git/objects/75/8ce7c0c828e868656b5e544a23977de600ca79": "71ae491036ffaf84a27886ea85e1f6e1",
".git/objects/78/7a8d02418613964d35c61d0e2fbd9adc35fc2f": "08a18bbcc7da074da6594e0caf1bca66",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/ddfd16174448f099a8eb2dfe0384f9b74c35de": "4536e6419f01b49c91a086b2d44799b2",
".git/objects/81/e124d05973544a0c51c6a9656485aa4621a966": "ef447c8cab977006098ef27d683571dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/3cab6c140883f23138185fe182854e671bef66": "89f2705cf40df223c976b65d86ff5e2e",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9d/29905f44904fd4e2c395622a0069fa164cfd56": "e2c89e2d9b60ff75a4d2966d0c29d013",
".git/objects/a1/2da51f709f0d3225229f340547fa6eb81fbf9a": "a9470b547d9a4fa7f15379e46763a9c0",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/bc34b008b8cd7335e6c4c9989a9b5bc5c0fb0b": "a542e9c9b0f1c0e266b490a02d9dcfb2",
".git/objects/a9/0be3ac17c12bbe18837cd3b1b90109d6dc9b3f": "81df89909adb63b4fd712c0ff055602a",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b4/796e0acbc321a7e59a35551bb08981f9513c6e": "ea24d6c941818cb957525ab7a25a9be6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/d0ba502724a6abfcb0f364665ab917d38526c6": "b7a49fd743456f274eb8d47ce317eeb5",
".git/objects/c2/8a41cbafac18fc008d613e9195255f03d41432": "a8cd52b919d800b42ee069171677aa0c",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/c180c7db31fffa81f485c9f89bab53c1b25a57": "af1202364d830e4e89ccbcc731ba5ac0",
".git/objects/d1/1cbf2ca4469f9f7e03b5a33266f044119a274d": "874355a8b3e6af374746ee529178ba51",
".git/objects/d2/6cfe22c6114e938f652ad5c9329fa1a5aeea9a": "efb3197d1b9b3614bb1f6aeaf19c39a2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/63b991166f74138df5755c8aa1b19888384378": "37657aa329579db59f327017399c5069",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/5f9c6a2b64bc95c29ac57656cbd102665687bc": "56d8cfef5268b1a56bf374b6d06d720b",
".git/objects/e3/71c19c706ccb26658bfc60b96e2adca13d032b": "678d15e94f8b108f6baa792bce848eec",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/9ab8c94874bf633cc92ea481319b5639738e50": "ffc99ff248ebe35aaff2f84b05fda3d0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/0160243275b549a97e5c155edcbaf19828b0a2": "d03fb05205ed1ca56cec42f9360c6f9a",
".git/objects/ed/1ea119124f26f288cb40bde29aef32ee2ee74a": "df13b9c56623327bd976e9a28033fcf2",
".git/objects/ed/71b0afe5fec6fe5ea86d0d90d248b7a2e16568": "98765d057fb1cb74d63dcd10b17c7537",
".git/objects/f2/71ce54c678658fe61d74c4dfd2d9779281041e": "cd13f39529401e772e0d87562f29862a",
".git/objects/fd/e25991b8b104e26507b484cc4722ecebedc090": "f116f2d6d2b935e56c2eca628953fb09",
".git/refs/heads/firstApp": "41354eb90e9215a9476a5e37855b932a",
".git/refs/heads/main": "91787500510533a79c664689840b5395",
".git/refs/remotes/origin/firstApp": "41354eb90e9215a9476a5e37855b932a",
".git/refs/remotes/origin/main": "91787500510533a79c664689840b5395",
"assets/AssetManifest.json": "6c6fd079b8c4d47e22cfc7c979c051f8",
"assets/assets/AssetManifest.json": "9fc16a0728e57cbbef3ad1502d55558c",
"assets/assets/assets/home_logo.jpg": "eb5d4c8143280a9806f8a48b5c6b219c",
"assets/assets/assets/home_logo_1.jpg": "ed5f973f3f383a0fe7e2905e4bdc1ade",
"assets/assets/carousel_images/image1.jpg": "017134094edb563fcff78761a8378e92",
"assets/assets/carousel_images/image2.jpg": "13c48f586ac7d35b6890883d302e4945",
"assets/assets/carousel_images/image3.jpg": "f7e1938085822f9481ea2c5ffd345f91",
"assets/assets/carousel_images/image4.jpg": "bdb5116e7e55efae690e5fe82c80c356",
"assets/assets/carousel_images/image5.jpg": "9ef70aa5c1d6932c4b0bbce24bd80ca0",
"assets/assets/carousel_images/image6.jpg": "9f3ccdfbfac440e1b5dd396a73c43ef2",
"assets/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/home_logo.jpg": "eb5d4c8143280a9806f8a48b5c6b219c",
"assets/assets/home_logo_1.jpg": "ed5f973f3f383a0fe7e2905e4bdc1ade",
"assets/assets/images/photography.jpg": "0a7cc43900f2d9df497b1b4f3c16ad25",
"assets/assets/images/romance.jpg": "14ce12cb5cc05b640c04f9cb0cdda10e",
"assets/assets/images/sci-fi.jpg": "09010d770132135be16d09949335363d",
"assets/assets/NOTICES": "2c34bebea8d831e826492c7e5cc9bf38",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "2c34bebea8d831e826492c7e5cc9bf38",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "643af2c031d77220c91c68a22c7aa72a",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"home_logo.jpg": "eb5d4c8143280a9806f8a48b5c6b219c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e2bb60bd1e9f4cda6ef2316b51a25a00",
"/": "e2bb60bd1e9f4cda6ef2316b51a25a00",
"main.dart.js": "9dc3cd803707ca280c324fa01839707a",
"manifest.json": "aa404357cf940904c51e4e1b9fa74494",
"version.json": "58bc3dd9c1244ff8c835dd1f94cd2627"
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
