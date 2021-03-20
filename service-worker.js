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
    "revision": "49d118bacb4851c9d36021ef83d68dca"
  },
  {
    "url": "assets/css/0.styles.2d8c5587.css",
    "revision": "04ba894fa6d05b5468673a03ac1e27dd"
  },
  {
    "url": "assets/img/html-css.png",
    "revision": "7ffa20302b6432f42fb6cc6c3a79ed51"
  },
  {
    "url": "assets/img/logo-animation.svg",
    "revision": "1aa7e10c132d64bfa2160056b246d1b1"
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
    "url": "assets/js/29.9dceb51f.js",
    "revision": "2ea0a2c8e3e1254e4c928850e69d4946"
  },
  {
    "url": "assets/js/3.eb2ce72c.js",
    "revision": "1abefe9fe15eefecd913490851594da8"
  },
  {
    "url": "assets/js/30.42f64ed1.js",
    "revision": "21167325239143a1b98ce6ee68cebad0"
  },
  {
    "url": "assets/js/31.9382f9d1.js",
    "revision": "1c112eec4cc86de66bde02083b5a3282"
  },
  {
    "url": "assets/js/32.d06f9ed6.js",
    "revision": "975e25c7e1f2eb3dfe32492befec5d55"
  },
  {
    "url": "assets/js/33.dca53799.js",
    "revision": "0ea83b794bfadd74ab7b2f40e081b680"
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
    "url": "assets/js/app.1ef91963.js",
    "revision": "8d54c5ccd5481cf93b9cca80d9e6a0da"
  },
  {
    "url": "charts/area/index.html",
    "revision": "36837df2b6d0378d412f7eea47629c8d"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "f28eeee00e32af5adae80aa4c1a634ec"
  },
  {
    "url": "charts/column/index.html",
    "revision": "859761f1d0d364b18c9f48d929332706"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "6af627303854e89eefa6bd5eced62d22"
  },
  {
    "url": "charts/index.html",
    "revision": "6b1976a77117d6028c5211ed8d647c44"
  },
  {
    "url": "charts/line/index.html",
    "revision": "312533067e97d59d045e4d6625165358"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "2f4ccbda069d2a2ddd64c5f1bf99cca8"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "3edd5968657c460b6938355b00a96831"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "3ebd5660d210f138571bc4ba240b9a1a"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "4f020f0bc1b28b71afa39dd6997d0264"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "7de800e50e8c9c400591096614bfd5c7"
  },
  {
    "url": "development/index.html",
    "revision": "4b2c8fe0b4529c7e03bf0f423528fb22"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "058c5a5908483a0289db5981dba359c0"
  },
  {
    "url": "docs/about/index.html",
    "revision": "b9cdab1fcda71827d33330885d6a4b79"
  },
  {
    "url": "docs/index.html",
    "revision": "c1a2d0898636da133ec47b3f15f2b448"
  },
  {
    "url": "docs/installation/index.html",
    "revision": "947b64582cda4561b5652ea7d9ef9836"
  },
  {
    "url": "docs/usage/index.html",
    "revision": "0ffb23ee47a4aab20c5429b2a41668dc"
  },
  {
    "url": "index.html",
    "revision": "149630a904d2d87b4e7671e5b7a3e6b5"
  },
  {
    "url": "props/colors/index.html",
    "revision": "79c46145952e09438273e20f6bd90e7b"
  },
  {
    "url": "props/datasets/index.html",
    "revision": "9b5b21e050f5688f80ab930d38f59cc7"
  },
  {
    "url": "props/heading/index.html",
    "revision": "5f4388d111cc0873a37152f91fd7558e"
  },
  {
    "url": "props/index.html",
    "revision": "ecd5012be3fda4ad2e37ff3bf287a2ca"
  },
  {
    "url": "props/labels/index.html",
    "revision": "71b91589419264d2f39ebe376bea4af5"
  },
  {
    "url": "props/legend/index.html",
    "revision": "5d99c1dbdca555f10aa966a278aa26e4"
  },
  {
    "url": "props/reverse-order/index.html",
    "revision": "1caea443d8f2216c363d01166dd86c3b"
  },
  {
    "url": "props/spacing/index.html",
    "revision": "6e5cfc9dabc5269c47022a350c02532a"
  },
  {
    "url": "props/stacked/index.html",
    "revision": "ddb94aff07b2c2801fb0942d8bfebfff"
  },
  {
    "url": "props/tooltips/index.html",
    "revision": "8f096a21d150a034dd53e242223ebfa6"
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
