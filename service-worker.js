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
    "revision": "74dd151cfc2d71148c2366dc2618a6d4"
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
    "url": "assets/js/29.09d8fc3b.js",
    "revision": "2ea19f1fba84bf5f90144eaf2c93a279"
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
    "url": "assets/js/31.bd6bdb30.js",
    "revision": "33639b916ca65e5f07d422a1ce02b81d"
  },
  {
    "url": "assets/js/32.d82bc6ed.js",
    "revision": "975e25c7e1f2eb3dfe32492befec5d55"
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
    "url": "assets/js/app.255d1854.js",
    "revision": "37b6fe46e21b5e0c5304e30a98cdbf7a"
  },
  {
    "url": "charts/area/index.html",
    "revision": "39609d61d7287659f3b30ade91de9a31"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "391ab817689aa65f226d6f9c28867207"
  },
  {
    "url": "charts/column/index.html",
    "revision": "acd47308edd1b51006ec537bf6e738b2"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "cbb8334759e53a187e3bd0ab558dcf99"
  },
  {
    "url": "charts/index.html",
    "revision": "950c4a537c1abdd09ebdbf2fc4901fc0"
  },
  {
    "url": "charts/line/index.html",
    "revision": "13c364e7fe92049f8c8ff394e8c4f861"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "ed1e4d6c57a248e561db1eaefdfc2891"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "3afbd471f8418eb56751c193f6066dc7"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "dbe2946a286ebb66661cbb0061578e79"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "7d90b58ea273fa11333d7474450bae96"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "f0c89917e4814d725bd748aef88435af"
  },
  {
    "url": "development/index.html",
    "revision": "a4b8b463152b15991bb95be1082ba9c6"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "87b7baa66dea8a94ca5079d555457532"
  },
  {
    "url": "get-started/about/index.html",
    "revision": "05180d0fb4681b93143922487b3c0750"
  },
  {
    "url": "get-started/index.html",
    "revision": "628ead02f37d136b101ff514e874db7e"
  },
  {
    "url": "get-started/installation/index.html",
    "revision": "88fe51c72d75754e26af0c08dbc26b21"
  },
  {
    "url": "get-started/usage/index.html",
    "revision": "7d5b2d416e94e5fba061827620d7b1f3"
  },
  {
    "url": "index.html",
    "revision": "3e601ae4620a1470b7ee722a40561a74"
  },
  {
    "url": "props/colors/index.html",
    "revision": "df9b1996dc1a958b95715704c7e6e8de"
  },
  {
    "url": "props/datasets/index.html",
    "revision": "076c67f8ff5807c874d37e03e37732ab"
  },
  {
    "url": "props/heading/index.html",
    "revision": "36251af09083b74ae9be6f5ab7e1fc73"
  },
  {
    "url": "props/index.html",
    "revision": "704af74c3cd1c8874b8e5c6ff61c082b"
  },
  {
    "url": "props/labels/index.html",
    "revision": "c877658b94b4a204df86d7696c3c5d25"
  },
  {
    "url": "props/legend/index.html",
    "revision": "1aed5b2dde5c750a7f441bbfe3aa0525"
  },
  {
    "url": "props/reverse-order/index.html",
    "revision": "434d5178a81ebc7d8554518238222b01"
  },
  {
    "url": "props/spacing/index.html",
    "revision": "eabddba2551532bdcb26cbd765c744a5"
  },
  {
    "url": "props/stacked/index.html",
    "revision": "9ad1ade09384e6b56f8a0cee2582401d"
  },
  {
    "url": "props/tooltips/index.html",
    "revision": "ea32152b05727b71ad26c3442a2ce034"
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
