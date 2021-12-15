<template>
  <ul class="flex items-center">
    <!-- Notifications -->
    <li class="mr-7">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
        class="text-white" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
        <path
          d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
          fill="currentColor"></path>
      </svg>
    </li>
    <!-- Legend -->
    <li class="mr-7">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"
        class="text-white" width="32" height="32" preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24">
        <g fill="currentColor">
          <path
            d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm0 6a2 2 0 0 0-2 2a1 1 0 1 1-2 0a4 4 0 1 1 5.31 3.78a.674.674 0 0 0-.273.169a.177.177 0 0 0-.037.054v.497a1 1 0 1 1-2 0V14c0-1.152.924-1.856 1.655-2.11A2.001 2.001 0 0 0 12 8zm1 6.007v-.004v.004zM11 17a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1z">
          </path>
        </g>
      </svg>
    </li>
    <!-- User Settings -->
    <li class="flex items-center">
      <div class="rounded-full bg-white mr-2" style="width: 32px; height: 32px; background: url('https://picsum.photos/id/279/32/32');"> </div>
      <span class="text-white"> Arya Stark </span>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "UserSettings",
  }

</script>
