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
    "revision": "31b63c5a77972bc9f087ac13f8ad903a"
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
    "url": "assets/js/14.6ff0f35e.js",
    "revision": "c234239136f9a6a4b64875d51a839154"
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
    "url": "assets/js/17.2f08f748.js",
    "revision": "796a9c7012089713f7c27fd869b700d8"
  },
  {
    "url": "assets/js/18.9deb0cbf.js",
    "revision": "d1e4c2c5e6b9200f6ce3165c41298080"
  },
  {
    "url": "assets/js/19.dca246d3.js",
    "revision": "d5d2b6733d3a4b1d7bcce988b1d932df"
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
    "url": "assets/js/21.6f270b4a.js",
    "revision": "da2ff0c0c0e635d73fbcefcaeb2a0216"
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
    "url": "assets/js/29.798a3e1b.js",
    "revision": "37604b62d938fe84aa851e5954526404"
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
    "url": "assets/js/app.34777478.js",
    "revision": "172c12f266ae0e26dd6253f69fc51837"
  },
  {
    "url": "charts/area/index.html",
    "revision": "cf6663efcbf77da7a3f58a4f4cf8c1fb"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "d829177dff6edcd04ba159e4cdf46267"
  },
  {
    "url": "charts/column/index.html",
    "revision": "ef7d9ab3eb938a92b8732af2d0b3d33f"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "13327bcab77a672ca4ed0c315b916a7d"
  },
  {
    "url": "charts/index.html",
    "revision": "a2acfaf135afb492b5fb58614ead6b7e"
  },
  {
    "url": "charts/line/index.html",
    "revision": "30a31b145bdaa38c5b47756478dd2565"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "bab14429e9e336f28e98e35557144d63"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "0a8a710195d9bfe938882d64c2334fa5"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "49cd8e833938d882ed38d27e80a66751"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "8783dcc6806460406fcb073b84e86921"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "fd7ddb0b95a1a19050ff5f3d5d880217"
  },
  {
    "url": "development/index.html",
    "revision": "7c3ca40934ac6d05d72f688d30ea958c"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "e8d0abb4edcc3c5cfde3009d87dd3d36"
  },
  {
    "url": "get-started/about/index.html",
    "revision": "47dde1ac447903671fe2028a891098ef"
  },
  {
    "url": "get-started/index.html",
    "revision": "4c625ea26e19d46769d5b2f21b695e06"
  },
  {
    "url": "get-started/installation/index.html",
    "revision": "d10a81619731c29ecabc5d4f916ff283"
  },
  {
    "url": "get-started/usage/index.html",
    "revision": "f3b31484c0667b682a722470770aa083"
  },
  {
    "url": "index.html",
    "revision": "3fd18374f3da72a9e258ad1b1a32959b"
  },
  {
    "url": "props/colors/index.html",
    "revision": "3bba10f0ec514f4a12df98d4bb79036d"
  },
  {
    "url": "props/datasets/index.html",
    "revision": "7ff24702e446e32f797bb0c05582dd0a"
  },
  {
    "url": "props/heading/index.html",
    "revision": "59c1130c4d79b30fcb103ed04206faf5"
  },
  {
    "url": "props/index.html",
    "revision": "7aa8cbe6e7b1db3abcd4e4a80b7206a2"
  },
  {
    "url": "props/labels/index.html",
    "revision": "04e63a96c730b134e3045766a96286e6"
  },
  {
    "url": "props/legend/index.html",
    "revision": "123ecc51838b1131e7fa4b6bc0199b4e"
  },
  {
    "url": "props/reverse-order/index.html",
    "revision": "21cbf63fdaec74a398fb44ae215d5a25"
  },
  {
    "url": "props/spacing/index.html",
    "revision": "3bd4e2bb9fa9894d6d80b20fc1917e4d"
  },
  {
    "url": "props/stacked/index.html",
    "revision": "ebfe40fe33503e6e22231d52a2144561"
  },
  {
    "url": "props/tooltips/index.html",
    "revision": "18844e2b39a23356ac5356019111467c"
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
