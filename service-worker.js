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
    "revision": "2b246fdf9ce1950830b1cb1f43d185b3"
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
    "url": "assets/js/14.064aea0c.js",
    "revision": "0c733b525c2f378c19f8a5e48db27d7d"
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
    "url": "assets/js/app.43fc0cd8.js",
    "revision": "f3d70114d7001d533593623259d76aba"
  },
  {
    "url": "charts/area/index.html",
    "revision": "93edf8509345a7989dfc7b153e208e7a"
  },
  {
    "url": "charts/bar/index.html",
    "revision": "8d74a99389734b4fc41322978b4af24f"
  },
  {
    "url": "charts/column/index.html",
    "revision": "e58eb37d6192817ccda2472a52999b10"
  },
  {
    "url": "charts/donut/index.html",
    "revision": "c596d409d84c7883ae9fc794a08ec598"
  },
  {
    "url": "charts/index.html",
    "revision": "8fb5ba09b1000fac414e94249494131e"
  },
  {
    "url": "charts/line/index.html",
    "revision": "f58726ba62a118aac8db72074fa36fe8"
  },
  {
    "url": "charts/mixed/index.html",
    "revision": "bb5547b624f72cd3ecebfbb25969e5db"
  },
  {
    "url": "charts/pie/index.html",
    "revision": "7541ce6c2f1491246986a94228c53fb4"
  },
  {
    "url": "charts/polar/index.html",
    "revision": "c041f7e8d83f6f983309f87432fb01eb"
  },
  {
    "url": "charts/radar/index.html",
    "revision": "99af2c0f00e2f3a644a54a48bafb7ef0"
  },
  {
    "url": "development/design-principles/index.html",
    "revision": "817666127f0607f1077a0aae92097365"
  },
  {
    "url": "development/index.html",
    "revision": "39864c3b42471f78cbb616406e4cb068"
  },
  {
    "url": "development/roadmap/index.html",
    "revision": "f16c82d19fbd9250f158116daefb5a69"
  },
  {
    "url": "get-started/about/index.html",
    "revision": "894e6746a7ccf537fe252b3d05c9fcda"
  },
  {
    "url": "get-started/index.html",
    "revision": "57fd8b642b96fe88e87aac63eb371d80"
  },
  {
    "url": "get-started/installation/index.html",
    "revision": "8eeb833544131ff07893c55ddc39a9ac"
  },
  {
    "url": "get-started/usage/index.html",
    "revision": "8ea4abef06cfba7e398cdc90af902c8f"
  },
  {
    "url": "index.html",
    "revision": "705af79a70d4d75ec2dbe6d6094be812"
  },
  {
    "url": "props/colors/index.html",
    "revision": "6de5031530e618dec7fe08b8896a4ded"
  },
  {
    "url": "props/datasets/index.html",
    "revision": "444c61d33f08e9ea55b40ea2831009aa"
  },
  {
    "url": "props/heading/index.html",
    "revision": "0d802cc2a87bd149264557ab1b3e295c"
  },
  {
    "url": "props/index.html",
    "revision": "bd3d36a732049d44aef668857bf6d0bc"
  },
  {
    "url": "props/labels/index.html",
    "revision": "8774fae41ea8ad1d6c122c6843f0567a"
  },
  {
    "url": "props/legend/index.html",
    "revision": "171dcc94611fa721419d93bb00e2e111"
  },
  {
    "url": "props/reverse-order/index.html",
    "revision": "727ea95acb384b4a8cf6ccc157f17ef2"
  },
  {
    "url": "props/spacing/index.html",
    "revision": "6697a9ed7ccd4c10001ccdcbf5d95f88"
  },
  {
    "url": "props/stacked/index.html",
    "revision": "d087d9b5b5dd3eb128ab11555ed9db48"
  },
  {
    "url": "props/tooltips/index.html",
    "revision": "6c2e96c9df80ebbaa7f8daa611719aa5"
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
