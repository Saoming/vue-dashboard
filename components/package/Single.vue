<template>
  <div>
    <div class="mb-8">
      <h1 class="text-4xl text-darkSlateBlue font-bold"> Package Details </h1>
    </div>
    <div class="w-full p-8 shadow-md">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl text-darkSlateBlue font-bold"> Details </h2>
        <button class="px-6 py-2  text-white bg-darkSlateBlue rounded-xl">
          Edit </button>
      </div>
      <div class="grid grid-cols-6">
        <div class="col-span-2">
          <img :src="$store.state.packages_list[0].package_image" class="w-full h-full" />
        </div>

        <div class="col-span-4">
          <div class="grid grid-cols-3 py-3">
            <div class="grid min-w-300">
              <span class="text-darkSlateBlue font-bold text-lg mb-2"> Customer Name </span>
               <p> {{$store.state.packages_list[0].customer_name}} </p>
            </div>
            <div class="grid min-w-300">
              <span class="text-darkSlateBlue font-bold text-lg mb-2"> Package Description </span>
              <p class="text-gray-700 text-base"> {{$store.state.packages_list[0].package_description}} </p>
            </div>
            <div class="grid min-w-300">
              <span class="text-darkSlateBlue font-bold text-lg mb-2"> Package Type </span>
              <p class="text-gray-700 text-base"> {{$store.state.packages_list[0].package_type}} </p>
            </div>
          </div>

          <div class="grid grid-cols-3 py-3">
            <div class="grid min-w-300">
              <span class="text-darkSlateBlue font-bold text-lg mb-2"> Pieces</span>
               <p> {{$store.state.packages_list[0].pieces}} </p>
            </div>
            <div class="grid min-w-300">
              <span class="text-darkSlateBlue font-bold text-lg mb-2"> Package Cost </span>
              <p class="text-gray-700 text-base"> {{$store.state.packages_list[0].package_cost}} </p>
            </div>
            <div class="grid min-w-300">
              <span class="text-darkSlateBlue font-bold text-lg mb-2"> Status </span>
              <p class="text-gray-700 text-base"> {{$store.state.packages_list[0].status}} </p>
            </div>
          </div>

          <div class="grid grid-cols-3 py-3">
            <div class="grid min-w-300">
              <span class="text-darkSlateBlue font-bold text-lg mb-2"> Seller / Merchant </span>
               <p> {{$store.state.packages_list[0].merchant}} </p>
            </div>
            <div class="grid min-w-300">
              <span class="text-darkSlateBlue font-bold text-lg mb-2"> Delivery Company </span>
              <p class="text-gray-700 text-base"> {{$store.state.packages_list[0].delivery_company}} </p>
            </div>
            <div class="grid min-w-300">
              <span class="text-darkSlateBlue font-bold text-lg mb-2"> Tracking Number </span>
              <p class="text-gray-700 text-base"> {{$store.state.packages_list[0].tracking_number}} </p>
            </div>
          </div>

          <div class="grid grid-cols-3 py-3">
            <div class="grid min-w-300">
              <span class="text-darkSlateBlue font-bold text-lg mb-2"> Weight </span>
               <p> {{$store.state.packages_list[0].weight}} </p>
            </div>
            <div class="grid min-w-300">
              <span class="text-darkSlateBlue font-bold text-lg mb-2"> Created By </span>
              <p class="text-gray-700 text-base"> {{$store.state.packages_list[0].created_by}} </p>
            </div>
            <div class="grid min-w-300">
              <span class="text-darkSlateBlue font-bold text-lg mb-2"> Print Label </span>
              <p class="text-gray-700 text-base"> {{$store.state.packages_list[0].print_label}} </p>
            </div>
          </div>

          <div class="grid grid-cols-3 py-3">
            <div class="grid min-w-300">
              <span class="text-darkSlateBlue font-bold text-lg mb-2"> Notify Customer  </span>
               <p> {{$store.state.packages_list[0].notify_customer}} </p>
            </div>
            <div class="grid min-w-300">
              <span class="text-darkSlateBlue font-bold text-lg mb-2"> Date Added </span>
              <p class="text-gray-700 text-base"> {{$store.state.packages_list[0].date_added}} </p>
            </div>
            <div class="grid min-w-300">
              <span class="text-darkSlateBlue font-bold text-lg mb-2"> Date Updated  </span>
              <p class="text-gray-700 text-base"> {{$store.state.packages_list[0].date_update}} </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Package Details",

  }

</script>
