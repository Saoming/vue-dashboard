<template>
  <div class="grid grid-cols-12 h-screen">
    <Sidebar />
    <div class="col-span-10">
      <div class="bg-darkSlateBlue w-full py-10">
        <div class="grid justify-end px-6">
          <UserSettings />
        </div>
      </div>
      <div class="p-6">
        <Nuxt />
      </div>
    </div>

  </div>
</template>


