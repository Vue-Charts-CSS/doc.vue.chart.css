---
permalink: /props/tooltips/
---

# Tooltips

Tooltips allow you to display additional information about the data, using little popup boxes, when hovering over the data.

## Add Tooltips

To add tooltips to your data, you can either use this wrapper's in-built tooltip generator, or expand it with your own logic and formatting.

### In-built Tooltips

```vue{3}
<charts-css
    ...
    show-tooltips
/>
```

### Customize Tooltips

You will need to enable tooltips with the `show-tooltips` boolean prop and then code a handler for `resolve-data-tooltip`

```vue{3-4,10-13}
<charts-css
    ...
    show-tooltips
    :resolve-data-tooltip="resolveDataTooltip"
/>

<script>
    export default {
        methods: {
            resolveDataTooltip(value, label, datasetName, rowIndex, colIndex, hasMultipleDatasets = false)
            {
                return value + ( value == 1 ? 'apple' : 'apples' );
            },
        },
    }
</script>
```
