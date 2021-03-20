---
permalink: /props/legend/
next: ../../charts/
---

# Legend

Chart legend displays the labels of the datasets appear on a chart. The chart visualize the raw data, the legend visualize the datasets.

## Legend Structure

The legend is a separate component with a separate HTML tag. You have the freedom to position the legend wherever you want using CSS selectors.

## Enable Legend

```vue{2-4}
<charts-css
    show-legend
    legend-type="square(default)|circle|ellipse|rectangle|rhombus|line"
    legend-inline="true|false"
/>
```
