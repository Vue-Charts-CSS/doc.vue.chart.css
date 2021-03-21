/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5709f7eafbb9e6804680e8a68a2f2715"
  },
  {
    "url": "assets/css/0.styles.a5b9832d.css",
    "revision": "6059c94f84af94837ca192bc3950602b"
  },
  {
    "url": "assets/img/html-css.png",
    "revision": "7ffa20302b6432f42fb6cc6c3a79ed51"
  },
  {
    "url": "assets/img/logo-animation.svg",
    "revision": "e2dcb60c6a4fc0cfa15223aef3683210"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "2a83fe3650a02718d29b867aad924bcb"
  },
  {
    "url": "assets/img/logo.svg",
    "revision": "b960ca9d41d6c1ea1f24012e77c698ee"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.152bd921.js",
    "revision": "43f77f29155d5e159522736a88021a51"
  },
  {
    "url": "assets/js/11.1f48feda.js",
    "revision": "7d538617a3f12adde32cc87f18ae83bf"
  },
  {
    "url": "assets/js/12.9fac544c.js",
    "revision": "25d64049a7d5e6339e04dbcbfc369f8c"
  },
  {
    "url": "assets/js/13.eacc721f.js",
    "revision": "36a7e285002285ccaf4c00f8b3c6db1d"
  },
  {
    "url": "assets/js/14.89759e92.js",
    "revision": "caa7bd791805f95fe20ff98729b0181d"
  },
  {
    "url": "assets/js/15.15ce3268.js",
    "revision": "186103b580b00f222d76798ad2c0adb2"
  },
  {
    "url": "assets/js/16.bc4b1e99.js",
    "revision": "f36222676332360aa61079c5fd558ff4"
  },
  {
    "url": "assets/js/17.fa6c1b89.js",
    "revision": "fcdd73c24ccb7d2b4c50acdf57de517e"
  },
  {
    "url": "assets/js/18.9deb0cbf.js",
    "revision": "d1e4c2c5e6b9200f6ce3165c41298080"
  },
  {
    "url": "assets/js/19.cdc92fd2.js",
    "revision": "5c6b3fea152701ddfd312b1d4e42e7c9"
  },
  {
    "url": "assets/js/2.85e2fbdb.js",
    "revision": "a230dcb11c3f8eb06ffd8c71a6767ee4"
  },
  {
    "url": "assets/js/20.2b9c5b24.js",
    "revision": "41742cbe6f0dc24579673fc7d6dd0b19"
  },
  {
    "url": "assets/js/21.78729fb8.js",
    "revision": "c36fd30d35ca02028a662eefdccf6594"
  },
  {
    "url": "assets/js/22.61368ee5.js",
    "revision": "685de4a65fabeab8eadc71b07a565226"
  },
  {
    "url": "assets/js/23.6c300f4b.js",
    "revision": "b860fe52eab29cb0e7cde415a675ac9f"
  },
  {
    "url": "assets/js/24.52ab537d.js",
    "revision": "ab1eab36bb72b5d3d42e2448bb3d4f88"
  },
  {
    "url": "assets/js/25.c3c47a4d.js",
    "revision": "21994ef6463f395dfe8d289820fe6ff5"
  },
  {
    "url": "assets/js/26.a8037b9a.js",
    "revision": "bca6d9d62342ab9ed0e6651348d72e73"
  },
  {
    "url": "assets/js/27.1a18ec3e.js",
    "revision": "76f8e3e10e37e8b7eb43a91b27accc4b"
  },
  {
    "url": "assets/js/28.9c1a1214.js",
    "revision": "894b2078b2ef7be112eb78a628170706"
  },
  {
    "url": "assets/js/29.723a70e7.js",
    "revision": "a44d8db4006675e607b2ff153b2e0390"
  },
  {
    "url": "assets/js/3.eb2ce72c.js",
    "revision": "1abefe9fe15eefecd913490851594da8"
  },
  {
    "url": "assets/js/30.bae7f1df.js",
    "revision": "21167325239143a1b98ce6ee68cebad0"
  },
  {
    "url": "assets/js/31.2ceda659.js",
    "revision": "9de820207707982aa9f9c2a3420b7837"
  },
  {
    "url": "assets/js/32.fe6e796e.js",
    "revision": "7bc190bafa64b242a694d179ed001679"
  },
  {
    "url": "assets/js/33.002a4869.js",
    "revision": "f07f69f8c345c030952d3c30beb05863"
  },
  {
    "url": "assets/js/34.5543db3b.js",
    "revision": "72a45b515b07778928a8e8417b6da578"
  },
  {
    "url": "assets/js/35.30ac91c4.js",
    "revision": "7e48f9dd34b84c316beecda1e5133b0e"
  },
  {
    "url": "assets/js/36.46dc1f31.js",
    "revision": "5fd73763114798958091d1724c1198aa"
  },
  {
    "url": "assets/js/37.84013cc3.js",
    "revision": "c92fafe941822a8c352d767af2d7308e"
  },
  {
    "url": "assets/js/38.9ede68e3.js",
    "revision": "dbcea7b0863553420e3aa704f73516da"
  },
  {
    "url": "assets/js/39.76bb1f67.js",
    "revision": "97791265b7bbd96325a5634e87bbc706"
  },
  {
    "url": "assets/js/4.c510beb2.js",
    "revision": "74933df61a41aaf4a7d0fc2b06bd7f1a"
  },
  {
    "url": "assets/js/40.4fec219a.js",
    "revision": "d0d1ff2e50e8c5d317a17aeb7dc3c976"
  },
  {
    "url": "assets/js/41.67c272a9.js",
    "revision": "3f9e0eb55b9a40aa2a5ca86ec70a4ee7"
  },
  {
    "url": "assets/js/42.a5cb9460.js",
    "revision": "383f9f1dbaed94e8ca9137f750483ea8"
  },
  {
    "url": "assets/js/43.b5554772.js",
    "revision": "8a8991d6dc65fd6bd360b5eb36bb3842"
  },
  {
    "url": "assets/js/44.65dbbf4d.js",
    "revision": "75a6d82b2234238cf190d6effae2c4a9"
  },
  {
    "url": "assets/js/5.de1dc77b.js",
    "revision": "058e169f27f69feb2c383d288a369fda"
  },
  {
    "url": "assets/js/6.e5ec7e40.js",
    "revision": "d29f6c8308b0fbc8c8da3e126fc66467"
  },
  {
    "url": "assets/js/7.ef65daea.js",
    "revision": "314d09ceee09bc76b1d6ccea434b0cb7"
  },
  {
    "url": "assets/js/8.9e3c1cd7.js",
    "revision": "8136e11ac09bad85f5e21a58a00cb4c7"
  },
  {
    "url": "assets/js/9.8efc8bef.js",
    "revision": "e0410abad3b647ac3356108542b17e1b"
  },
  {
    "url": "assets/js/app.0c3c9b72.js",
    "revision": "811b73ee014f7acd9f8e4b6a8abec875"
  },
  {
    "url": "charts/area/index.html",
    "revision": "dd795577a0345568c939c6d680aa8ef6"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "dac59c92e855d9a41772624865081fbf"
  },
  {
    "url": "charts/column/index.html",
    "revision": "a18690ff063b20e9f2fb2d4da06cc409"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "442b7540ab687486b7d218a549b9eea6"
  },
  {
    "url": "charts/index.html",
    "revision": "6fe44c1e0775ae16660d7156ac2daf34"
  },
  {
    "url": "charts/line/index.html",
    "revision": "1730264d4571532f322575356d035478"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "c9c16cb9040c071776278e5901300456"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "1db5e54f6402537b28e2f1190e01be10"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "1484f8f9f01a6a181f42a6e8e8df231c"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "a88ac6c8ce4ed987522be6b19c507304"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "be9082ac6b3f17c5feb759dab8b4e843"
  },
  {
    "url": "development/index.html",
    "revision": "3b3b43251861870e8537d418d7741ed0"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "d5769a4309271223981bfb10885a5954"
  },
  {
    "url": "get-started/about/index.html",
    "revision": "2fd8271cdd26751c2b01be3c7eacecd3"
  },
  {
    "url": "get-started/index.html",
    "revision": "d1cbcc3135777bf06fbb6b099a3206b4"
  },
  {
    "url": "get-started/installation/index.html",
    "revision": "8299f4ff9634705392d48d1719522fbc"
  },
  {
    "url": "get-started/usage/index.html",
    "revision": "0efe1fdc94679f14816e344ddbc01f8c"
  },
  {
    "url": "index.html",
    "revision": "62ae43a846c5d00ce53d2ce901fa1111"
  },
  {
    "url": "props/colors/index.html",
    "revision": "f03371fcd95ceda43db2d4c2f2fea7ca"
  },
  {
    "url": "props/datasets/index.html",
    "revision": "73096362565741b07f2a92957b0f9693"
  },
  {
    "url": "props/heading/index.html",
    "revision": "adfb67d4d06bb6f4aa589ce86d0316c8"
  },
  {
    "url": "props/index.html",
    "revision": "198b56fde7570a3b869cfbb43cca5828"
  },
  {
    "url": "props/labels/index.html",
    "revision": "8d1db75c9e29a2592925c95d6c066ce2"
  },
  {
    "url": "props/legend/index.html",
    "revision": "4183565e6b632d6db6c97f5b5690b344"
  },
  {
    "url": "props/reverse-order/index.html",
    "revision": "21c72aba649de7ed6f3382b4d6e29a63"
  },
  {
    "url": "props/spacing/index.html",
    "revision": "638e49126af58389e572416276a0062d"
  },
  {
    "url": "props/stacked/index.html",
    "revision": "24993d9474bd9b7a6859a9a26b75f6bc"
  },
  {
    "url": "props/tooltips/index.html",
    "revision": "88c4055a4e2ab215cc5e7989da7178e8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
