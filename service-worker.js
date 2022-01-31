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
    "revision": "fd86524e4b75f5267586edac0c4d13b4"
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
    "url": "assets/js/32.e6e02d5e.js",
    "revision": "750899fc8dcb80b5a3d8c16961aeae6d"
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
    "url": "assets/js/app.ab228d4d.js",
    "revision": "720476cd2e10d56c3548ca03cf58723d"
  },
  {
    "url": "charts/area/index.html",
    "revision": "f835c0cdc1112fc9ded23c5cecbfc7f7"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "7659e6c39b2088e164e503794ca8e11f"
  },
  {
    "url": "charts/column/index.html",
    "revision": "b36e6200612eb2186ce37f5f7babd680"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "f76b28397d8680206658675f3ed57b6b"
  },
  {
    "url": "charts/index.html",
    "revision": "c87533404cf14f25e5f954a3e65800b3"
  },
  {
    "url": "charts/line/index.html",
    "revision": "d895946aa2edb2b8391c08eb4982f222"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "98ae37c183676270b0172acc231249b9"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "3b119ac5829f586a438e46601b47369f"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "aeef4086cefec2b8da655f1200bc7272"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "25c5114891400b81157f08df9d3421ce"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "58acfca13216771634df99156fd90d03"
  },
  {
    "url": "development/index.html",
    "revision": "3022530142cba16aa1a7d5181329f3be"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "f0e8a4ae97762fed4ba0d317b2865e7d"
  },
  {
    "url": "get-started/about/index.html",
    "revision": "db148d8c23790843de5a67084d1c8286"
  },
  {
    "url": "get-started/index.html",
    "revision": "55abef25c16425adcc58405699052e4b"
  },
  {
    "url": "get-started/installation/index.html",
    "revision": "288ce12e4a0da015363ce255a53cbfd7"
  },
  {
    "url": "get-started/usage/index.html",
    "revision": "f872d78fd34cc982100f2b6ab9f24bf1"
  },
  {
    "url": "index.html",
    "revision": "fbdc451b3e14552aff5c7f8cc74c5806"
  },
  {
    "url": "props/colors/index.html",
    "revision": "358f64a3262dc741d37aa9f2610cf56e"
  },
  {
    "url": "props/datasets/index.html",
    "revision": "ed04b87d2baecc947280654539b36e07"
  },
  {
    "url": "props/heading/index.html",
    "revision": "b774551380903908b5accb2b486481f9"
  },
  {
    "url": "props/index.html",
    "revision": "f093438066230d80367bc03c527f3758"
  },
  {
    "url": "props/labels/index.html",
    "revision": "f322dd66c4d5d4ae5c0125121b492e07"
  },
  {
    "url": "props/legend/index.html",
    "revision": "06cfa3aa999f0d4de2a9562ed6d87484"
  },
  {
    "url": "props/reverse-order/index.html",
    "revision": "795b87f57a625c4c02bda718cc03398f"
  },
  {
    "url": "props/spacing/index.html",
    "revision": "d5bd0a7d98bda5bd2cb507f73ac26acb"
  },
  {
    "url": "props/stacked/index.html",
    "revision": "06f68b3e0aacec68bcd64e7597c52322"
  },
  {
    "url": "props/tooltips/index.html",
    "revision": "434e39d9b4366e33d536cb29205f0017"
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
