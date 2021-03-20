---
permalink: /props/datasets/
---

# Datasets

Datasets are different series of data. In **Vue Charts.CSS** you can have 1 or more series.

## Add Datasets

To add multiple datasets simply add more entries to your `datasets` variable.

```vue{5,14-28}
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
                coffeeDatasets: [
                    {
                        name: "Ben",
                        values: [1, 3, 2, 12],
                    },
                    {
                        name: "Tim",
                        values: [1, 3, 1, 2],
                    },
                    {
                        name: "John",
                        values: [72, 227, 0, 0],
                    },
                ],
            };
        }
    }
</script>
```

You must also add [labels](/components/labels/) and optionally a [legend](/components/legend/) to describe the datasets.

```vue{4,6}
<charts-css
    type="bar"
    heading="Coffee count"
    :labels="coffeeLabels"
    :datasets="coffeeDatasets"
    show-legend
/>
```
