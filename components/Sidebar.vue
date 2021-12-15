<template>
  <nav class="col-span-2 shadow-lg w-full h-full">
    <!-- Logo -->
    <div class="grid justify-center px-6">
      <NuxtLink to="/"><img src="/logo.jpg" class="" /> </NuxtLink>
    </div>
    <!-- Menu -->
    <ul :class="{ active: isActive }" class="py-12">
      <NuxtLink to="/">
        <li class="flex items-center w-full py-6 px-6 text-darkSlateBlue ">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
            role="img" class=" mr-2" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
            <path
              d="M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15L31 13.428zM18 26h-4v-8h4zm2 0v-8a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v8H6V12.062l10-7.79l10 7.8V26z"
              fill="currentColor"></path>
          </svg>
          Home
        </li>
      </NuxtLink>
      <NuxtLink to="/packages">
          <li class="py-6 px-6 text-darkSlateBlue">
            <button @click="changeToViewDefault()" class="flex items-center w-full">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                role="img" class=" mr-2" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <path
                  d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18c-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15l-1.89 1.07L16 8.61l1.96-1.11L12 4.15M6.04 7.5L12 10.85l1.96-1.1l-5.88-3.4L6.04 7.5M5 15.91l6 3.38v-6.71L5 9.21v6.7m14 0v-6.7l-6 3.37v6.71l6-3.38z"
                  fill="currentColor"></path>
              </svg>
              Packages
            </button>
          </li>
      </NuxtLink>
      <NuxtLink to="/packages">
        <button @click="changeToViewAdd()">
          <li class="flex items-center w-full py-6 px-6 text-darkSlateBlue">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
              role="img" class="mr-2" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
              <path d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2z"
                fill="currentColor"></path>
            </svg>
            Add Package
          </li>
        </button>
      </NuxtLink>
    </ul>
  </nav>
</template>


<script>
  export default {
    name: "Sidebar",
    data() {
      return {
        isActive: false,
      };
    },
    watch: {
      $route() {
        this.isActive = false;
      },
    },
    methods: {
      changeToViewAdd() {
        this.$store.commit('togglePackageAdd');
      },
      changeToViewDefault() {
        this.$store.commit('togglePackageDefault');
      }
    }
  }

</script>

<style>
  ul>a.nuxt-link-exact-active.nuxt-link-active>li {
    @apply bg-ghostWhite;
  }

</style>
