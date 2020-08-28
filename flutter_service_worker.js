'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1a21abac8244b2fce79222c7bc4e2ef6",
".git/config": "ba334e50a8a09f1c4351b3972a3d016c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "222b531b10c0e210e263501ae5c3f157",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c7b44f695109ddbfa665f1bf55dd4ea5",
".git/logs/refs/heads/master": "c7b44f695109ddbfa665f1bf55dd4ea5",
".git/logs/refs/remotes/origin/master": "8efe7a2a06322068661e6cb468b8d4e7",
".git/objects/00/65eda4dc23cb54bb129866465f3de117600a95": "f4a19ddb6419e8456c410fe23c4e0e2d",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0e/f38d4296dc2a797873e53849a635780a67c35c": "da6bb794fd2f3ec6e3c4726f2745ae32",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/c28ccb39856ed3acddee093c26dd96f3ef0b8c": "cabc7a3af8ebbaf346c3b9767528402f",
".git/objects/10/dd9a360aaa9159cbc7ee8a2483b55043e5dee6": "5ffe0cec8fd07ae7008956779730377a",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/12/373fb127dfb04799e28d0bbc959aff338f6ae6": "2b9e3a7fa9e5c60fa39df8f1df7a4f1c",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/5e0c68c9d2bb64eb2e75b70b0fdc30479fb676": "af1108343efe91365b5e08ea614d8444",
".git/objects/2d/797f841805c59d0fd9b415bb37a393c02ea5a3": "1d4ffb1c4fd79cb9c1d6c46ed18cf2f7",
".git/objects/30/de1b9182a2cdbf7762ebe37a522f0a6aab7788": "9f44b4e2f5382e4f7096c7daf95124dc",
".git/objects/3c/0f532f96e726ea36076f0c141bfc8573128921": "485ddec2b0d91646bfeec67adf1ac213",
".git/objects/41/57486ded2be1ef3bcdc76e7e40c54dc70a7b7f": "710fc2725d2f86f3afb1bad52b192293",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/4a/d7078bcbc42e94460096fc7433925249058b42": "be3a9216c3da62d87f22bb3855dbf133",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/6a1a953dcd4f5a3811024214c931208a87f4a1": "235afd4ef5d6ebfd880804f8aa287f8f",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/54/5873239058efe1425aff4dddc2da1aed522d27": "425e85fbba4f797815b3fc0eac23817b",
".git/objects/5d/f187ef36d7a28ae01994110ffd6b75f96564ed": "33ebcea98877cc6066fd8515d615bfde",
".git/objects/5f/c94b7af4d3e80ab5808aefc0ef168c5700e813": "76b2d385903fbf4abad9c7ae35435f04",
".git/objects/62/2335421c39aa486e89f4f9c48e0fb33ba47251": "6153a41b28e377344a772c3dca8a13b6",
".git/objects/65/61800dcea980a8daf1fd581aeab0eee8f18dfb": "54e780f99b485488e2d2df523561eb77",
".git/objects/67/cbafc636565082259898437f354be3ac6b249e": "b527b2c9e1c72efc62f84d7c82b855eb",
".git/objects/69/fba2c7b56ceb78eeb66d97c8d4723291818981": "dd8f255877d55f9ea8cd756408b90c37",
".git/objects/6e/21adaeef4a704ea9957081e8dece7c600b02e7": "6af17723cc88fe398c4ba6cb90ccd862",
".git/objects/72/eb7f788d4cf4b9a1a8abbbfeb8af747f7e0189": "d7b7da1fa2e0f216d6be1bc33720a351",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/83/d9da3a41ddaa8e10deba0c0f77bab1c757b310": "402c861690ffcaf504c3dcbc30410451",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/fa9a5178012114ed6ad6d70d0a86fb2c97f3c8": "568e89d69bcc0b6277fd9c6a5f262213",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/c6f59cd79d6c1f4fa97bee4bcc4571069d309e": "8ecc0887f18dfc97f2e2ece0a7ec8fdc",
".git/objects/92/22aad5b701b441e53c37555a670501692cb8e5": "dda7d8f3ea431bda3b705e40d65262dd",
".git/objects/92/bf886329bc1d888fca6b654c3367275fa914ea": "a74b6e7713f5ab562eaaa2ed28e443e1",
".git/objects/94/b49038f117b403e68b038bc3f44b46be42e002": "278cd41c0c3c43dc90f2416c6f0db487",
".git/objects/9a/a67b725e2c2a695e322e527517d13d18c18e92": "016a788665d6a9cbfdc014b2ead9363e",
".git/objects/9e/978c52efafee5ad0d136fe23042250a6af65c2": "e0634f45f789e57cf8d97cba474b4697",
".git/objects/9f/b7243e7b69acd6c5c157962d6921daec5a7454": "ad16548953272a349505128ebeb7d32e",
".git/objects/a4/8b723925b88c5e8f1a8e83e67a219d8d006d68": "1a3c2b8b2b8737853bc46daa5a008228",
".git/objects/a5/3cdc956cf17ad1137e447240bc66749bccfaae": "98f81607d13bcb07fdce5eb44c6ac6cb",
".git/objects/a6/dcb049745ef3ba0f3e7b2e6fab21320af14aaf": "91d93c901e74ff28fe35a5adc4812625",
".git/objects/ad/3fce82346806dd68c9fa5b1c5bce47b3849273": "b6d5bd9b334165903f5d9adfcb11fb76",
".git/objects/ad/9776f067edbe78eb3081ed22aa858d24b33b42": "11bbf68d49d8abf71e6a2aeea5d22b17",
".git/objects/af/1c41a9724ac6d997bf438be67486a875ce469f": "166a829edd298cd13697e7b2810e2d62",
".git/objects/b0/d84cc5bbe0ddf90790e935b72c1ac7b08a8749": "b7f25d5c4fbf8b60ffbcfdeb0f9c808d",
".git/objects/b2/c802838bd4f882c194710fa157ecaf60ce661e": "80932c81b6d19b2d102d72228140be64",
".git/objects/b3/a89401309ce28b0723473b3e2fb6a8a7d81cc1": "a0641c8f92312113638d4003dddf5d80",
".git/objects/b3/fbb2fe2b35f752eeb466e3441015bcbf31e19e": "f4702486ffe9e48e37da898a8e5ef1bb",
".git/objects/b4/382e27fad3b620b069d8d8b938b128bb184bbe": "853726f387da5771f5248ee205035dd8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/cda51a94cfe2a8982cbe9d0651e53c1783db64": "554c1e533bfa275695db52d334cd4bf4",
".git/objects/ba/096d33b12ad87cb027e76ced9fba694b6c6043": "60a0a8a8e4c92e3afc471d34712ea9cb",
".git/objects/bf/04a88e7fc6ab3ec5e08502b74990272d8882bb": "2c64e2ff1905550bc8ec016a4932ebc9",
".git/objects/c4/70d09025b4554434773cfbafe13e9577efaed8": "1a800c30e881fefb76d83e18044454ba",
".git/objects/c4/7ece6196d8430503079d5e492a81a12bf784fa": "aaba24f8da31e4d1c71f0bd885224c6b",
".git/objects/c8/bc9590c78b2ed36a041451a8a1eab6dd5c8646": "87721724fcce3cf0e1abae0b8da4f0e6",
".git/objects/cb/d2b18129600a47eb77dc49324508d5f981e3f7": "96302dc9b74d19a8be8dbbd5e0e359fb",
".git/objects/cb/e6ebf22ad4192a1928ba6198a5ee813a34fc5d": "34926988f7fc4ab572cbc44d51881088",
".git/objects/cf/de47dd17f2669e86b788ce81c944796ce86d33": "84648bdf75ae03917630c0e6ecf32033",
".git/objects/d2/d96bbe0ebf840e5806e1b297d19679b5e15691": "f4cba27f0036d25db054f749182f1d53",
".git/objects/d6/b52c5a3566a9b6b7e3502d4543872c1053e93c": "473b8d816a838e826f07caffff5c7d0e",
".git/objects/d7/34f70d9db5d95f4ff97b2c11badf5a8482540b": "c43488ac0a0580b36f73f1e247895f64",
".git/objects/df/cc54a63febd9feb6793d0a8bbcbc244db0d870": "06a1ce65261ceaacd227947c73b4b7dd",
".git/objects/e1/f0af9cfbae05ed0365b84b196b588adba7b61a": "a527fed4eccde609b29a0e319db70ca6",
".git/objects/e2/0dc5fb2c9fee362d8ad53e19ad5b141769480b": "c4c3791d58ff781aebf9a6bc495911c2",
".git/objects/e7/a92266721808d8c15be4002ac8d1c231fcaa3b": "d9a37cac183162477a224ecee6012ca8",
".git/objects/ec/e36a9e0bbb2ef5b446cff93d63ba4709d4f818": "a3bb1f2a009e4d0406c5a27bcea5bc75",
".git/objects/ec/f6edef66c21a96cc9a3ae35ec5ab57ac11e1ac": "2a4afa8a79161eb1c6549da7652d48ba",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "ed07a7dcae1d4051b34e24282e509448",
".git/refs/remotes/origin/master": "ed07a7dcae1d4051b34e24282e509448",
"assets/AssetManifest.json": "28b49cca8dd85907639592ac7df9aebe",
"assets/assets/abhay.JPG": "5c7fe101c6ee679fa010bd5f02bcc7b6",
"assets/assets/amrya.JPG": "d7b0459a5bdf177f90abb8a539997111",
"assets/assets/c++.png": "7c9cc8b0cc3b908bd4adddbf5ee435b1",
"assets/assets/c.png": "8899f39e750cfe5db37eff92946f988e",
"assets/assets/Comrade.png": "e68af478ac6f1598f4152a2bdb228650",
"assets/assets/desai.JPG": "40eb72e2c036a3cc28ac4e79f9de1a27",
"assets/assets/dhanya.JPG": "1ddd0eeff93486e15da49edee1c8266c",
"assets/assets/digvijay.jpg": "75233bca82cf3ecef8d6799807244d65",
"assets/assets/flutter.png": "d359cd43162f189a167437c65642d481",
"assets/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/assets/html.png": "da2da746b8b828a25b6a1ce39133c8ce",
"assets/assets/img1.jpg": "2d886ee43ecc62e3ff024a75ced03872",
"assets/assets/img2.jpg": "fb97ec9273beb5037c516980e0180c63",
"assets/assets/img3.jpeg": "684457fbf4c6604a11de8845401ca2fd",
"assets/assets/img4.jpeg": "f4b5e05601619b019f85a125dcf6353b",
"assets/assets/img5.jpeg": "3bf77156e938f7b16ab3c30b536ddeb7",
"assets/assets/img6.jpg": "bf16473d369a8e84a6ce02760785b607",
"assets/assets/java.png": "d363f8c46b33634597fb19c38732cbc8",
"assets/assets/launcher.png": "04063af6d2cad73b58de7b5a58acad68",
"assets/assets/python.png": "47287bcc74290da74248b5e0d57d45c1",
"assets/assets/rohan.JPG": "027b3fa8e3e47233a0a7fbb9736acfaf",
"assets/assets/sidebar.jpg": "456c89c54169f301548215e5d376c5b2",
"assets/assets/vscode.png": "3c8b16957753c3065235678cb62668b2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/NOTICES": "7147e7ecde634580a0face0f13dab52f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "6344c910b82e6db41cec649ceff213a0",
"/": "6344c910b82e6db41cec649ceff213a0",
"main.dart.js": "62c8b4db4ef4c4f958f5057486739942",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
