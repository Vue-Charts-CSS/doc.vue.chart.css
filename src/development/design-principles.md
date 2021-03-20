---
permalink: /development/design-principles/
prev: ../
---

# Design Principles

The Vue wrapper development has several design principles act as philosophical guidelines.

## Compliment the underlying framework

This wrapper uses the **Charts.CSS** framework underneath. It is important that developers from **Charts.css** have a minimal learning curve when migrating to Vue.

For that reason, this wrapper avoids renaming classes and props with few exceptions.



## Building a Framework

The main goal is to develop a wrapper for the masses, that assists many, many use-cases.

## Global Features

When developing new props or chart types the thinking needs to be global. New additions should work on all chart types, not on one or two chart types.

## Naming Convention

Names should be intuitive and self-explanatory to make it easy to implement without even reading the documentation.

## CSS Customization

Relying on CSS, the wrapper and underlying framework should be easy to customize using CSS selector. Developers should have the option to target every element and customize it, bypassing the wrapper when needed.

## Performance

Any room for performance enhancements are very welcome. Remember that [the underlying framework has no interest in JS](https://chartscss.org/development/design-principles/#no-javascript) or Vue (directly) so it's up to this wrapper to reduce performance hits by using JS.

## Learn from the Community

We are highly encourage our users to customize their charts and share new methods, innovative techniques and advance use cases with the community.
