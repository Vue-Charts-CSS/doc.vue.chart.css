---
permalink: /get-started/installation/
prev: ../
---

# Installation

Looking to quickly add **Vue Charts.css** to your project? You can use a [CDN](#cdn), a [package manager](#package-manager), or [download](#download) the JS file.

This installation guide assumes you have already installed **Charts.CSS** following the [installation guide here](https://chartscss.org/docs/installation/). **Vue Charts.CSS** is a secondary wrapper to install on-top of this framework.

::: danger Unreleased
This project is still under heavy development, not yet recommended for production. Please see our [roadmap for more information](/development/roadmap/)
:::

## CDN

Copy one of the following `<link>` tags and paste it inside the document `<head>`.

Use [jsdelivr](https://www.jsdelivr.com/package/npm/vue.charts.css) CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/vue.charts.css/dist/vue-charts-css.min.js"></script>
```

Or [unpkg](https://unpkg.com/browse/vue.charts.css/) CDN:

```html
<script src="https://unpkg.com/vue.charts.css/dist/vue-charts-css.min.js"></script>
```


## Package Manager

If you are developing a Node.js powered application, you can pull **Vue Charts.css** source files using your favorite package manager.

Install using [npm](https://github.com/mrspence/vue.charts.css):

```bash
npm install vue.charts.css
```

Or using [yarn](https://classic.yarnpkg.com/en/package/vue.charts.css):

```bash
yarn add vue.charts.css
```

## Download

To download **Vue Charts.css** latest release, visit our GitHub repository:

[https://github.com/Vue-Charts-CSS/vue.charts.css/releases](https://github.com/Vue-Charts-CSS/vue.charts.css/releases)

Open the ZIP file and copy the `dist/vue-charts-css.min.js` file to your project.

Next, you need to load the JS file in your HTML document. Paste the script path to your `<script>` tag and place it towards the bottom of the document `<body>`.

```html
<script src="/path/to/your/vue-charts-css.min.js"></script>
```
