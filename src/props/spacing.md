---
permalink: /props/spacing/
---

# Spacing

Spacing refers to the space between the data items and between the datasets.

## Add Data Spacing

When using a single datasets table, sometimes we want to add space between the items. Use the `data-spacing` Number prop to add spacing to the data.

```vue{3}
<charts-css
    ...
    :data-spacing="10"
/>
```

You can select a value between `0` and `20`, or override with your own style rules.
