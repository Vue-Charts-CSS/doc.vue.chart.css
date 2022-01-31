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
    "revision": "08cb4babc18e7988e0933ade049312f9"
  },
  {
    "url": "assets/css/0.styles.29fce0dc.css",
    "revision": "e052ac02e2445255c79566420ad78c13"
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
    "url": "assets/js/10.f7418250.js",
    "revision": "0b5ccd6f136ecfae8ed876733813fa24"
  },
  {
    "url": "assets/js/11.7fd41e58.js",
    "revision": "e7a21a88093ad244b082a1397c53f5c2"
  },
  {
    "url": "assets/js/12.446ee32e.js",
    "revision": "2b48dc6f09ecdcd7449be92c9e61f240"
  },
  {
    "url": "assets/js/13.a789cd4c.js",
    "revision": "e0c427778039e27c58c6030da98b6247"
  },
  {
    "url": "assets/js/14.1fa54507.js",
    "revision": "c7095a89f277e6d4eddaa501215aa72a"
  },
  {
    "url": "assets/js/15.77127dd2.js",
    "revision": "ded3dcb23277fea9f704348a0ae0687f"
  },
  {
    "url": "assets/js/16.121efea2.js",
    "revision": "02ab657ab245dc8043978f3a68a02eaf"
  },
  {
    "url": "assets/js/17.cd57c26c.js",
    "revision": "3e08ee4d7ca9963c47dcecabed961b31"
  },
  {
    "url": "assets/js/18.a31a2067.js",
    "revision": "cbc33fadee8de1cc2e20b248c10c9215"
  },
  {
    "url": "assets/js/19.f05f77e2.js",
    "revision": "a5f198d77f5e47afe3b3b827e82d4257"
  },
  {
    "url": "assets/js/2.feb6c547.js",
    "revision": "4488c7bd0b8875dc0a572ffa791736dc"
  },
  {
    "url": "assets/js/20.4150ace2.js",
    "revision": "35eaed9ac29bfd2b5604deb3698acb81"
  },
  {
    "url": "assets/js/21.0527c144.js",
    "revision": "83ca021b9a51ef9e4c3b63d59d1d711b"
  },
  {
    "url": "assets/js/22.941329b6.js",
    "revision": "b0dd39cc4a435c6c6eb79561dd02e4b1"
  },
  {
    "url": "assets/js/23.f8fb41fd.js",
    "revision": "387b25a38e81d020a32d5099b659697e"
  },
  {
    "url": "assets/js/24.9ba99e97.js",
    "revision": "82b876840a69e199eb8b814d3fb2b942"
  },
  {
    "url": "assets/js/25.1e9b7fbe.js",
    "revision": "771d94c0f1e3b404f2be2ba5d83324a5"
  },
  {
    "url": "assets/js/26.1235be19.js",
    "revision": "a577ed2297641fc550ed4a5e2b5ebfc9"
  },
  {
    "url": "assets/js/27.a98ec721.js",
    "revision": "6b07935127542a418e22d0e4e53de5a5"
  },
  {
    "url": "assets/js/28.5a3519e4.js",
    "revision": "bc1d34e46671b4c0cbb6a988c24b0a05"
  },
  {
    "url": "assets/js/29.4b4abe81.js",
    "revision": "1f639905db0b66657baf41f4a9fe53c9"
  },
  {
    "url": "assets/js/3.faaf3755.js",
    "revision": "bae4ceb8dee5186bb1e62232faf00220"
  },
  {
    "url": "assets/js/30.eb0d6f70.js",
    "revision": "174bc65782de64b2c031a610eced8c5f"
  },
  {
    "url": "assets/js/31.eee88c69.js",
    "revision": "1f85f12ce58c7474c47d3243dcf0f679"
  },
  {
    "url": "assets/js/32.7dd5b372.js",
    "revision": "c20018162c637481177dcd81772a64d3"
  },
  {
    "url": "assets/js/33.b102a875.js",
    "revision": "8c544ce3499a7dfbc3cf4d3983f35f88"
  },
  {
    "url": "assets/js/34.868ad083.js",
    "revision": "f1a460d9875c56e39bd89e63119cc00b"
  },
  {
    "url": "assets/js/35.bc336ad9.js",
    "revision": "0190a8e0af651f6a133729331c2674af"
  },
  {
    "url": "assets/js/36.45ec6b36.js",
    "revision": "73ae0d3d5e289695e390287d71bee7e6"
  },
  {
    "url": "assets/js/37.84780d88.js",
    "revision": "c047f56564cb0bf88008bb4976aef9ce"
  },
  {
    "url": "assets/js/38.4d370729.js",
    "revision": "9982c214166c88a9657da3fcbcae1f74"
  },
  {
    "url": "assets/js/39.8781d5fb.js",
    "revision": "a55e5af83671553297222d9da1163aa9"
  },
  {
    "url": "assets/js/4.8c1fdaf1.js",
    "revision": "e662a4012b04c4bcee36ca39e0120417"
  },
  {
    "url": "assets/js/40.fbe62e05.js",
    "revision": "40bbed4c12842afcfedaa034c7fa2d6c"
  },
  {
    "url": "assets/js/41.efcb44a6.js",
    "revision": "b8351194828ebea158a16a054c3a52f1"
  },
  {
    "url": "assets/js/42.130fea01.js",
    "revision": "bb0ad94438317dd2d9e321936f2f12ce"
  },
  {
    "url": "assets/js/43.dd19ab35.js",
    "revision": "47487451986a856763d85f03bcc3523b"
  },
  {
    "url": "assets/js/44.9df2eff9.js",
    "revision": "c02d37539cb878dca59eb12551b13189"
  },
  {
    "url": "assets/js/5.466b5258.js",
    "revision": "725230b7135532790333bc3d6d611e35"
  },
  {
    "url": "assets/js/6.8e942f96.js",
    "revision": "64d3c1de7a27b44ccb53380db8c673db"
  },
  {
    "url": "assets/js/7.4b89b0c2.js",
    "revision": "8d2ee76494f2f1f13f0bacce9a9a07b5"
  },
  {
    "url": "assets/js/8.35d93a93.js",
    "revision": "5f29d2a60317f1414c564eda9b658cf9"
  },
  {
    "url": "assets/js/9.b1a4160b.js",
    "revision": "089a52cfe0d9d0a971a9c1be82a865cc"
  },
  {
    "url": "assets/js/app.5fb67536.js",
    "revision": "ddddd42fc37b13b3b808f315ce1f16ff"
  },
  {
    "url": "charts/area/index.html",
    "revision": "1af3158948e3c78f9799eabbc4ec69f8"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "e050c9f359d2bda65e217b9a4d9cc4c6"
  },
  {
    "url": "charts/column/index.html",
    "revision": "a2fd0dcde307b4eb5b2cd9f722e3171f"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "d97297aa1ab6234a8616218240005b45"
  },
  {
    "url": "charts/index.html",
    "revision": "f0721f060c43e3f728808743d0413363"
  },
  {
    "url": "charts/line/index.html",
    "revision": "2e20e455cda96bbd71601b871b96eae3"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "d5a51a9f0a9bf6fb72fb309f6d74c3b5"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "9073e5e47d9d51927e7e7b6cd260c3de"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "0f29ff93e7e11a30cb180cf7579b0e08"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "70744a1a5d6aea899a09f1209cdb1700"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "516bf0c270c3f6f71b7c82b481a58d68"
  },
  {
    "url": "development/index.html",
    "revision": "5a853280f78a75c630b43f5ff9b29fe1"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "8fa9a685a685fb6bf8dc652d703b0757"
  },
  {
    "url": "get-started/about/index.html",
    "revision": "df1fa1eabd809e2be8bf68ecd26e2f70"
  },
  {
    "url": "get-started/index.html",
    "revision": "152d594c14c3d3a4d1b5ae8dd43bbac7"
  },
  {
    "url": "get-started/installation/index.html",
    "revision": "85aa4f9180944906a968babf27abe822"
  },
  {
    "url": "get-started/usage/index.html",
    "revision": "c198f36fdbb36d75c9d5c6b46f5538a2"
  },
  {
    "url": "index.html",
    "revision": "47887af2208abfc95ab0085ff87dc637"
  },
  {
    "url": "props/colors/index.html",
    "revision": "bd37937a652bb095d19695f7f7f3ed7f"
  },
  {
    "url": "props/datasets/index.html",
    "revision": "d604b5f1f1c58a32e7e1f2e6aa7b97f9"
  },
  {
    "url": "props/heading/index.html",
    "revision": "e9da32cd6a85fc096deb3e3429f307ad"
  },
  {
    "url": "props/index.html",
    "revision": "69a2904672ac78636672543d654607ae"
  },
  {
    "url": "props/labels/index.html",
    "revision": "a3116f027297ee3b597b38e5eab88954"
  },
  {
    "url": "props/legend/index.html",
    "revision": "b44605a12f5d8fa9082c03e498605009"
  },
  {
    "url": "props/reverse-order/index.html",
    "revision": "c6ee8ab4b5c55633f523c7e8629b7d20"
  },
  {
    "url": "props/spacing/index.html",
    "revision": "830d2bce7c4586443d14d97b2df132e4"
  },
  {
    "url": "props/stacked/index.html",
    "revision": "fcc4b79e793c37aad2d1bf2ab0a69968"
  },
  {
    "url": "props/tooltips/index.html",
    "revision": "ba0bdd430fa9c42f1f9cdc5672d37e65"
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
