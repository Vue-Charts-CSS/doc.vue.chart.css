---
permalink: /charts/line/
---

# Line

Line charts display raw data connected with a straight line.

::: warning Note
These docs are still under development.
:::

## Usage

To visualize your data with line chart, change the `type` prop to 'line'

```vue{2}
<charts-css
    type="line"
    ...
/>
```

## Dimensions

To control the chart dimensions you can use regular CSS. You can use media queries to set different dimensions for smaller devices.

```css
#my-chart .charts-css.line {
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
