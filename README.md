## BMJ Microsites built with Astro

### Setup

- create a new repo using this template
- clone the new repo that you just created
- yarn install

### Requirements

- PageLayout must wrap all pages to satisfy build requirements.
- On PageLayout you can pass the title and bodyclasses to BaseLayout component.

### Images
Using imports for images as the images will be processed in the build and also referenced correctly.

```vue
<script setup>
  import logo from '@img/bmj-logo.png';
</script>
<template>
    <img :src="logo" alt="BMJ Logo" />
</template>
```
```astro
---
import logo from '@img/bmj-logo.png';
---
<html>
    <img src={logo} alt="BMJ Logo" />
</html>
```

It is possible to place assets into a static directory. They will not be touched by the build and will be copied over. The file can then be referenced directly.

```astro
---
import logo from '/bmj-logo.png';
---
<html>
    <img src={logo} alt="BMJ Logo" />
</html>
```

### Notes

-   Tailwind, Sass, and Vue components can be used freely and will be statically pre-generated
-   JavaScript logic will not be run on server unless the client:load attribute is provided on the given component, or any of it's ancestors.
