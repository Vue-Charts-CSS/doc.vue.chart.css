---
permalink: /props/reverse-order/
---

# Reverse Order

You can reverse the order of the elements without changing the HTML markup.

## Reordering Data

Generally speaking, this wrapper (and underlying CSS framework) do not change your data, but simply generate the layout and style it.

But for a simple transformation, you can reverse the data. For other transformations, we recommend you apply them before passing as a prop to **Vue Charts.css**

## Reverse Data Order

When using a single datasets, you can use the `reverse-data` boolean prop to reverse the order of your data (only changes the data visually with CSS)

```vue{3}
<charts-css
    ...
    reverse
/>
```
