## BMJ Microsites built with Astro

### Setup

-   clone this repo!
-   npm install
-   touch .env
    -   SITE_FOLDER=INTERNAL_SITE_NAME
    -   PUBLIC_SITE_NAME=EXTERNAL_SITE_NAME
-   npm run dev | prod

### Requirements

-   Place images within /static
-   BaseLayout must wrap all content to satisfy build requirements

### Notes

-   Tailwind, Sass, and Vue components can be used freely and will be statically pre-generated
-   JavaScript logic will not be run on server unless the client:load attribute is provided on the given component, or any of it's ancestors.
