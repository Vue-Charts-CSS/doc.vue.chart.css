---
permalink: /props/colors/
---

# Colors

Chart colors help end-users to distinguish between data items and datasets.

This Vue wrapper only provides basic styling options and recommends you do **advanced styling** with CSS selectors to encourage "seperation of concerns".

::: tip Note
For help with **advanced styling**, please read [Charts.CSS guide to colors](https://chartscss.org/components/colors/)
:::

## Change All Colors

The most basic way to change colors is to use the `color` prop, applying it on the entire chart. This way all the inner elements will inherit the color.

```vue{3}
<charts-css
    ...
    color="yellow"
/>
```

## Change Specific Colors

For best performance we highly recommend using CSS selectors to change specific colours. However, in cases where this isn't suitable, you can use a callback to calculate individual data colors.


```vue{3,9-15}
<charts-css
    ...
    :resolveDataColor="resolveDataColor"
/>

<script>
    export default {
        methods: {
            resolveDataColor(value, label, datasetName, rowIndex, colIndex, hasMultipleDatasets = false)
            {
                if (value > 20){
                    return red;
                }
                return null;
            }
        }
    }
</script>
```

## More color options

There's a whole world of options for styling. As mentioned at the start, [we recommend reading **Charts.CSS** guide to colors](https://chartscss.org/components/colors/) to learn how you can expand your chart's visual.
