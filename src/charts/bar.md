---
permalink: /charts/bar/
prev: ../
---

# Bar

Bar charts display raw data as horizontal bars.

## Usage

To visualize your data with bar chart, change the `type` prop to 'bar'

```vue{2}
<charts-css
    type="bar"
    ...
/>
```

## Dimensions

To control the chart dimensions you can use regular CSS. You can use media queries to set different dimensions for smaller devices.

```css
#my-chart .charts-css.bar {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
```

You can also pass this as a prop

```vue{3}
<charts-css
    ...
    height="300px"
    ...
/>
```
