---
permalink: /props/labels/
---

# Labels

Labels are used to describe the data or the dataset over the primary axis.

## Add Labels

To add labels simply use the `labels` prop with an array

```vue{4,13}
<charts-css
    type="bar"
    heading="Team's coffee count"
    :labels="coffeeLabels"
    :datasets="coffeeDatasets"
/>

<script>
    export default {
        data()
        {
            return {
                coffeeLabels: [ "Monday", "Tuesday", "Wednesday", "Thursday", ],
            };
        }
    }
</script>
```

## Show Labels

**By default the labels are hidden**. To display the labels use the `show-labels` boolean prop

```vue{3}
<charts-css
    ...
    show-labels
/>
```
