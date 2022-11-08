<script setup>
import cat from "@img/cat.jpg";
import dog from "@img/dog.jpg";
import gorilla from "@img/gorilla.png";
import racoon from "@img/racoon.jpg";
</script>

<template>
  <div class="cards grid grid-cols-3 grid-rows-2 gap-4">
    <!-- 1 -->
    <div class="card flex flex-col justify-between">
      <div>
        <h3 class="font-bold">Card No 1</h3>
        <p>
          With <code>:has</code> you can target an element based on its
          contents. This element has an anchor tag as a child and can be
          targeted with <code>.card:has(a)</code>
        </p>
        <p class="text-center my-4">
          <a href="#" class="cursor-pointer text-blue-500"
            >www.link-to-somewhere.com</a
          >
        </p>
        <p class="demo-class">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quod
          recusandae saepe voluptatem exercitationem non, doloremque natus porro
          sit eaque debitis impedit iusto nihil necessitatibus. Aperiam modi et
          quisquam veniam?
        </p>
      </div>
    </div>

    <!-- 2 -->
    <div class="card second-card">
      <h1 class="font-bold title text-lg">Title with or without subtitle</h1>
      <h2 class="subtitle font-bold">Subtitle</h2>
      <a href="https://caniuse.com/css-has" class="text-blue-500"
        >Can I use :has?
      </a>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
        consequatur, sequi accusamus voluptas amet at sapiente architecto
        cupiditate doloremque temporibus eum nobis provident iste unde
        distinctio obcaecati dolore illo tempore.
      </p>
    </div>

    <!-- 3 -->
    <div class="card">
      <img :src="cat" alt="" />
    </div>

    <!-- 4 -->
    <div class="card">
      <img :src="dog" alt="" class="mb-4" />
      <div class="card__content">
        consectetur adipisicing elit. Libero, reprehenderit fugiat! Doloremque
        vero ipsum sunt expedita possimus earum at, veniam commodi aspernatur?
        Ea impedit quisquam placeat natus laborum error voluptate?
      </div>
    </div>
    <!-- 5 -->
    <div class="card flex flex-col justify-between">
      <label for="checkbox" class="flex items-center justify-center">
        <input type="checkbox" class="h-12 w-12 ml-2 cursor-pointer" />
      </label>
      <p class="hidden mt-2">
        Some further information that you only need to see if you've checked the
        checkbox
      </p>
    </div>
    <!-- 6 -->
    <div class="card flex flex-col">
      <figure>
        <img
          :src="gorilla"
          alt=""
          id="gorilla"
          class="mt-auto cursor-pointer"
        />
        <figcaption>Gary</figcaption>
      </figure>

      <figure>
        <img :src="racoon" alt="" id="racoon" />
      </figure>
    </div>

    <div class="card">
      <input type="text" />
    </div>
  </div>
</template>
