<template>
  <div>
    <ul
      class="hidden justify-between w-8/12 max-w-5xl fixed -translate-x-1/2 translate-y-3 left-1/2  font-Sans text-white bg-white/25 p-5 px-32 rounded-lg z-40 backdrop-blur text-lg lg:flex 
      "
    >
      <li :class="hover"><RouterLink to="/">خانه</RouterLink></li>
      <li :class="hover">
        <RouterLink to="/introduce">معرفی هکاتون</RouterLink>
      </li>
      <li :class="hover"><RouterLink to="/manual">شیوه نامه</RouterLink></li>
      <li :class="hover"><RouterLink to="/gallery">گالری </RouterLink></li>
      <li :class="hover"><RouterLink to="/Teams">تیم های برتر</RouterLink></li>
      <li :class="hover"><RouterLink to="/aboutUs">درباره ما</RouterLink></li>
    </ul>

    <div class="lg:hidden">
      <svg
        class="fill-white text-3xl mt-10 mr-5"
        @click="openmenu"
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512"
      >
        <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
        />
      </svg>

      <ul
        ref="drawer"
        class="text-center space-y-8 w-56 fixed h-full font-Sans text-white bg-white/25 rounded-lg z-40 backdrop-blur text-md top-0 -right-56 transition-all"
      >
        <svg
          class="absolute fill-red-600 text-2xl left-0 mt-3 ml-3"
          @click="closemenu"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 384 512"
        >
          <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            />
          </svg>
        <li @click="closemenu" :class="burger_hover">
          <RouterLink to="/">خانه</RouterLink>
        </li>
        <li @click="closemenu" :class="burger_hover">
          <RouterLink to="/introduce">معرفی هکاتون</RouterLink>
        </li>
        <li @click="closemenu" :class="burger_hover">
          <RouterLink to="/manual">شیوه نامه</RouterLink>
        </li>
        <li @click="closemenu" :class="burger_hover">
          <RouterLink to="/gallery">گالری </RouterLink>
        </li>
        <li @click="closemenu" :class="burger_hover">
          <RouterLink to="/Teams">تیم های برتر</RouterLink>
        </li>
        <li @click="closemenu" :class="burger_hover">
          <RouterLink to="/aboutUs">درباره ما</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(null);

const hover =
  "relative hover:after:w-full after:w-0 after:absolute after:right-0 after:top-full after:bg-red-600 after:h-1  after:transition-all after:duration-300 after:bottom-0 after:rounded ";

const burger_hover =
  "relative mt-10 hover:after:w-full after:w-0 after:absolute after:right-0 after:top-full after:bg-red-600 after:h-1  after:transition-all after:duration-300 after:bottom-0 after:rounded ";

const openmenu = () => {
  drawer.value.style.right = "0";
};

const closemenu = () => {
  drawer.value.style.right = "-14rem";
};
</script>

<style scoped></style>
