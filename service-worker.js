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
    "revision": "1438661e223bd57853e234ce466724e7"
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
    "url": "assets/js/14.d2a19d98.js",
    "revision": "ce3892a48466e68478e8fb1926405341"
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
    "url": "assets/js/17.95804c56.js",
    "revision": "b31bf4a7ebca07a9c91ba4a55933526c"
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
    "url": "assets/js/32.2b95ebce.js",
    "revision": "784b4a4f0d569eca45007219a5ddddbd"
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
    "url": "assets/js/app.5fea9932.js",
    "revision": "a5ba1af00a24c0846f9fb845d85ad9c8"
  },
  {
    "url": "charts/area/index.html",
    "revision": "b952234800a7884c4999bb1b9d60c8d3"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "18ada3779338b9b3e3626050e076d210"
  },
  {
    "url": "charts/column/index.html",
    "revision": "fda85069d369856b26dcfc87a09e2784"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "3f2bf31cb22412f3068c446773d7e699"
  },
  {
    "url": "charts/index.html",
    "revision": "d99272d590d95a89c7c8b9e6251c9270"
  },
  {
    "url": "charts/line/index.html",
    "revision": "ff7a19d646ef3cd8564bf74b4a581edd"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "3f77c53cf454f70591c54407e587aa2f"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "44f5c3c6d20e1c013771e3fee004ae8c"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "99cd6be75e004668d2d58ee7d6b07347"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "affa4239fbdd9c32461f77b565dc2192"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "e92fba5e65aa1c6b0fddcc22cf3f51f3"
  },
  {
    "url": "development/index.html",
    "revision": "b325de596abe1aa9b4c4e749e48ca719"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "2c672f981976050a62a1ad06c1d1d40b"
  },
  {
    "url": "get-started/about/index.html",
    "revision": "47c5d233779ba58629da15ad6d6a71bf"
  },
  {
    "url": "get-started/index.html",
    "revision": "d2275bda1557a95a6a9b025a197db8b1"
  },
  {
    "url": "get-started/installation/index.html",
    "revision": "242f098551c445fa5bc79c06e8554a26"
  },
  {
    "url": "get-started/usage/index.html",
    "revision": "bb7549a8ae5720931493f7228a271ee6"
  },
  {
    "url": "index.html",
    "revision": "ef895bb0b35fa7ee6659df16eea5cf52"
  },
  {
    "url": "props/colors/index.html",
    "revision": "771532a3db0274457161b110aac1f660"
  },
  {
    "url": "props/datasets/index.html",
    "revision": "eb9ce899f2936a9d33d9b97a303f044b"
  },
  {
    "url": "props/heading/index.html",
    "revision": "ec63d061c7275f2fa83c5bf267a75011"
  },
  {
    "url": "props/index.html",
    "revision": "2afe3f85a3f8f39c58c91bc98fc9694e"
  },
  {
    "url": "props/labels/index.html",
    "revision": "94f88b4c1932accc3d6a5ae1f7329ff2"
  },
  {
    "url": "props/legend/index.html",
    "revision": "81bbbd130555bdd09943e9c3d2487213"
  },
  {
    "url": "props/reverse-order/index.html",
    "revision": "c59545bee8dfca7086b64cd09e441ddb"
  },
  {
    "url": "props/spacing/index.html",
    "revision": "5b0f5e1934fb9f1faca35271b9a761f1"
  },
  {
    "url": "props/stacked/index.html",
    "revision": "4c6c2aa7dfe5b85a59e632cf9d1335a8"
  },
  {
    "url": "props/tooltips/index.html",
    "revision": "4cfa31ce6d2dd698c5bf9f0d599098e5"
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
