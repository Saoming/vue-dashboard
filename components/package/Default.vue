<template>
  <div>
    <div class="grid grid-cols-2 justify-between items-center mb-8">
      <h1 class="text-4xl text-darkSlateBlue font-bold"> Packages </h1>
      <PackageSearch />
    </div>
    <table class="table-fixed w-full shadow-md">
      <thead>
        <tr class="text-dimGray text-base bg-ghostWhite">
          <th class="w-2/12 py-6"> Package ID</th>
          <th class="w-2/12 py-6"> Customer Name</th>
          <th class="w-2/12 py-6"> Manifest</th>
          <th class="w-2/12 py-6"> Package Type</th>
          <th class="w-2/12 py-6"> Status</th>
          <th class="w-2/12 py-6"> Actions</th>
        </tr>
      </thead>
      <tbody v-if="packages_list">
        <tr v-for="package_list, index in packages_list" v-bind:key="index" class="text-center text-darkSlateBlue">
          <td class="py-6 font-bold "> Package ABC </td>
          <td class=" py-6">{{package_list.customer_name}}</td>
          <td class="py-6"> XYD <button
              class="text-white font-bold bg-darkSlateBlue text-xs px-4 py-2 rounded-md">Change</button></td>
          <td class="py-6"> {{package_list.package_type}} </td>
          <td class="py-6 flex justify-center items-center"> <span class="mr-2"> {{package_list.status}} </span>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                role="img" class="text-darkSlateBlue" width="32" height="32" preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24">
                <path d="M7 10l5 5l5-5z" fill="currentColor"></path>
              </svg>
            </button>
          </td>
          <td class="py-6 relative">
            <button id="package-settings" aria-label="Package Settings" aria-haspopup="true">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                role="img" class="" width="22" height="22" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20">
                <path
                  d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm0-2.6A2.2 2.2 0 1 0 9.999.8a2.2 2.2 0 0 0 .002 4.4zm0 9.6a2.2 2.2 0 1 0 0 4.402a2.2 2.2 0 0 0 0-4.402z"
                  fill="currentColor"></path>
              </svg>
            </button>
            <div id="package-settings-dropdown"
              class="menu-hidden origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg">
              <div class="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical"
                aria-labelledby="package-settings">
                <button
                  @click="changeToViewSingle"
                  class="w-full block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                  role="menuitem">View Details</button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    name: 'Default',
    mounted() {
      console.log('component mounted');
      console.log(this.$store.state.packages_list);
    },
    computed: mapState({
      packages_list: state => state.packages_list,
    }),
    methods: {
      changeToViewSingle() {
        this.$store.commit('togglePackageSingle');
      },
    },
  }

</script>

<style>
#package-settings ~ #package-settings-dropdown {
  @apply transform ease-in duration-75 opacity-0 scale-0
}

#package-settings ~ #package-settings-dropdown:focus-within, #package-settings:focus ~ #package-settings-dropdown {
  @apply ease-out duration-100 opacity-100 scale-100
}

</style>
