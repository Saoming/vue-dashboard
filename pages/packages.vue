<template>
  <main class="w-full">
    <PackageDefault v-if="view === 'default'" />
    <PackageAdd v-if="view === 'add'" />
    <PackageSingle v-if="view === 'single'" />
  </main>
</template>


<script>
import { mapState } from 'vuex'
export default {
  name: 'Packages',
  computed: mapState({
    view: state => state.viewPackages,
  })
}
</script>
