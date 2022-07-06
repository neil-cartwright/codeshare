## BMJ Microsites built with Astro

### Setup

-   clone this repo!
-   npm install
-   npm run dev | build

### Requirements

- BaseLayout must wrap all content to satisfy build requirements

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

It is possible to place assets into a static directory. They will not be touched by the build and will be copied over. The file can then be referenced directly but do not forget to include the site-folder in your reference. eg /site-name/my-img.png.

### Notes

-   Tailwind, Sass, and Vue components can be used freely and will be statically pre-generated
-   JavaScript logic will not be run on server unless the client:load attribute is provided on the given component, or any of it's ancestors.
