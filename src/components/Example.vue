<script setup>
import cuteCat from "@img/cute-cat-pic.jpg";
import laraLogo from "@img/logomark.min.svg";
</script>

<template>
  <section class="relative pb-52">
    <div class="tooltip hidden absolute bg-black text-white top-0 right-0 p-2">
      Warning: external link!
    </div>
    <h1 class="text-3xl font-bold">
      The <span class="has">:has() </span>selector in css
    </h1>
    <h2 class="subheading">Recently released in Chrome and Safari</h2>
    <p>
      Browser support -
      <a
        href="https://caniuse.com/css-has"
        target="_blank"
        class="text-blue-500 underline show-tooltip"
        >Can I use?</a
      >
    </p>

    <p>
      <span class="italic">Logic</span>: It selects a given element if the
      selector passed to it as an argument is valid. You can pass any valid css
      selector to the :has(.selector).
    </p>
    <p>
      You can also chain it.
      <code>:has(selector):has(another-selector)</code>
    </p>

    <p class="font-bold">Why is it different and what can it do?</p>
    <p>
      Until now, if you wanted to select anscestors of selected elements you
      would have needed javascript. CSS acts on children, rather than parents.
      Until now there has been no preceding sibling selector or parent selector.
    </p>
    <p>
      The <code>:has()</code> selector can select elements based on the presence
      or state of its descendents. It is a sort of 'parent' selector.
    </p>

    <p>
      For example, <code>h1:has( + p)</code>will select all <code>h1</code> tags
      which have <code>p</code> tags as a following sibling. This can be helpful
      for applying margins to headings which don't have subheadings, such as at
      the top of this page. If I remove the subheading the margin is reset.
    </p>

    <div class="has-a-cat">
      <h2 class="font-bold mb-4">
        Hover over image... <span class="hidden text-green-500">Mieow!</span>
      </h2>
      <p>
        Hovering over the image reveals styling to parent element. Previously
        this effect could only be achieved with vanilla javascript by listening
        to an event on an element, and acting on a preceding dom element.
      </p>

      <figure class="flex justify-center flex-col items-center mb-4">
        <img :src="cuteCat" alt="cute cat" class="h-72" />
        <figcaption>
          Adjust margin of image if it has a figcaption present
        </figcaption>
      </figure>

      <aside class="mb-8">
        <h2 class="font-bold mb-4">Inputs</h2>
        <p>
          Changing the state of input fields can be used to target their
          containing elements.
        </p>
        <label>
          <input type="checkbox" /> Check this to apply styling to parent
          element
        </label>

        <br />
      </aside>
      <aside>
        <form>
          <p class="astro hidden">
            <a href="https://astro.build/">https://astro.build</a>
          </p>
          <p class="vue hidden">
            <a href="https://vuejs.org/">https://vuejs.org/</a>
          </p>
          <label for="fw" class="font-bold mb-2">Select a framework </label>
          <select name="cars" id="fw" class="px-4 py-2">
            <option value="astro">Astro</option>
            <option value="vue">Vue</option>
          </select>
        </form>
      </aside>
    </div>
  </section>
</template>

<style scoped>
/* gives margin bottom to h1 if it is followed by a paragraph */
h1:has(+ p) {
  margin-bottom: 5rem;
  border-bottom: 1px dotted currentColor;
}
/* gives margin bottom to an h2 if it is followed by a paragraph */
h2:has(+ p) {
  margin-bottom: 1.5rem;
  border-bottom: 1px dotted currentColor;
}

/* show tooltip (preceding element in dom) when hovering over element with class of 'show-tooltip' */
section:has(.show-tooltip:hover) .tooltip {
  display: inline;
}
section:has(.show-tooltip:hover) .has {
  color: green;
}

/* targets an h2 tag inside a div which has a figure element */
div:has(figure) {
  border: 1px solid orange;
  padding: 1em;
}
/* applies this margin only if figcaption is present */
figure:has(figcaption) img {
  margin-bottom: 1rem;
  border: 1px solid orange;
  padding: 1rem;
}

/* reveals span if image hovered */
div:has(img:hover) h2 span {
  display: inline;
}
/* inputs */
aside:has(input[type="checkbox"]:checked) h2 {
  color: red;
}
/* option selectors */
form:has(option[value="vue"]:checked) .vue {
  display: block;
}
form:has(option[value="astro"]:checked) .astro {
  display: block;
}

/* base */
a {
  color: blue;
}
p {
  margin-bottom: 1.5rem;
}
code {
  background: white;
  padding: 2px;
  margin: 2px;
  font-size: 0.875rem;
  font-family: monospace;
}
</style>
