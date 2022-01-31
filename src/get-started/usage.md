---
permalink: /get-started/usage/
next: ../../props/
---

# Usage

**Charts.css** visualize data by applying **CSS classes** on HTML tags. The data is structured using semantic HTML tags and styled using CSS classes which change the visual representation displayed to the end user.

**Vue Charts.css** will handle the classes for you. You can customize your charts with `props`, or when needed override the wrapper and add CSS classes.

## Basic Setup

1. If you haven't already, you will need to first setup "vanilla" **Charts.CSS** following the [installation guide here](https://chartscss.org/docs/installation/).

2. Tell Vue to use **Vue Charts.CSS**

```js{2}
createApp(App)
    .use(VueChartCss)
    .mount("#app")
```

<details><summary>Vue 2 version</summary>

```js{4}
import Vue from "vue";
import VueChartsCSS from "vue.charts.css";

Vue.use(VueChartsCSS);
```
</details>

3. Then anywhere in your Vue app...

```vue
<template>
    <charts-css
        heading="Coffee count"
        type="bar"
        :labels="['Mon', 'Tue', 'Wed',]"
        :datasets="[ { values: [4, 2, 70,] } ]"
    />
</template>
```

We suggest with all of your charts, you provide values for the  `heading`, `labels`, and `datasets` props. Using these props doesn't mean you have to render them on the front, but they will improve accessibility of your chart.

Underneath the hood, The data is placed in the document as HTML `<table>` tag, making it visible to search engines and screen readers.

### Why `datasets`, what if I only have one?

This wrapper makes it easy to switch between chart types without hassle. When you only have a single dataset (typical of the `column` chart) then you only need to specify one entry in your datasets object.
