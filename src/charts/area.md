---
permalink: /charts/area/
---

# Area

Area charts display raw data with colors between axis and line.

::: warning Note
These docs are still under development.
:::

## Usage

To visualize your data with area chart, change the `type` prop to 'area'

```vue{2}
<charts-css
    type="area"
    ...
/>
```

## Dimensions

To control the chart dimensions you can use regular CSS. You can use media queries to set different dimensions for smaller devices.

```css
#my-chart .charts-css.area {
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
