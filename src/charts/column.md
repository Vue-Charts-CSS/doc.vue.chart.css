---
permalink: /charts/column/
prev: ../
---

# Column

Column charts display raw data as vertical columns.

## Usage

To visualize your data with column chart, change the `type` prop to 'column'

```vue{2}
<charts-css
    type="column"
    ...
/>
```

## Dimensions

To control the chart dimensions you can use regular CSS. You can use media queries to set different dimensions for smaller devices.

```css
#my-chart .charts-css.column {
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
