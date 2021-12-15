<template>
  <div>
    <div class="grid grid-cols-2 justify-between items-center mb-8">
     <h1 class="text-4xl text-darkSlateBlue font-bold"> Packages </h1>
     <PackageSearch />
    </div>
    <table class="table-fixed w-full">
      <thead>
        <tr class="text-dimGray text-base bg-ghostWhite">
          <th class="w-2/12 py-6">  Package ID</th>
          <th class="w-2/12 py-6">  Customer Name</th>
          <th class="w-2/12 py-6">  Manifest</th>
          <th class="w-2/12 py-6">  Package Type</th>
          <th class="w-2/12 py-6">  Status</th>
          <th class="w-2/12 py-6">  Actions</th>
        </tr>
      </thead>
      <tbody v-if="packages_list">
        <tr v-for="{package_list, index} in packages_list" v-bind:key="index">
          <td class="w-2/12 py-6"> ABC</td>
          <td class="w-2/12 py-6">{{package_list.customer_name}}</td>
          <td class="w-2/12 py-6"> XYD</td>
          <td class="w-2/12 py-6">{{package_list.package_type}}</td>
          <td class="w-2/12 py-6">{{package_list.status}}</td>
          <td class="w-2/12 py-6">click here</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Default',
   computed: mapState({
    packages_list: state => state.packages_list,
  })

}
</script>
