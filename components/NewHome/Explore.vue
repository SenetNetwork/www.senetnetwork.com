<template>
  <section class="pt-23 bg-[url(@img/bg-explore.png)] bg-no-repeat bg-cover flex flex-col z-1" md="flex-row min-h-80vh">
    <div class="grow-1  px-8" md="pl-45 pt-30 block">
      <h2 class="text-center" md="text-start">
        Gamefi Exchange App & Wallet
      </h2>
      <p class="color-gray mt-4 text-center" md="text-start">
        Convenient, Secure & Professional.
      </p>
      <NuxtLink to="/explore" class="flex justify-center mt-12" md="justify-start">
        <button class="button-black">
          Explore
        </button>
      </NuxtLink>
    </div>
    <div class="grow-1 shrink-0 flex justify-center" md="w-50% flex-center">
      <img class="w-80" sm="w-90" md="w-120" src="@img/platform.gif" alt="">
    </div>
  </section>
</template>

<script setup lang='ts'>

</script>
<style scoped></style>
