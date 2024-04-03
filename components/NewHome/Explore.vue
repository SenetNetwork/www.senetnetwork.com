<template>
  <section class="pt-23 bg-[url(@img/bg-explore.png)] bg-no-repeat bg-cover flex z-1">
    <div class="py-60 pl-25 w-50%">
      <h2>Gamefi Exchange App & Wallet</h2>
      <p class="color-gray mt-4">Convenient, Secure & Professional.</p>
      <button @click="explore" class="button-black mt-12">Explore</button>
    </div>
    <div class="grow-1 relative">
      <img class="absolute top-0 w-160" src="@img/platform.gif" alt="">
    </div>
  </section>
</template>

<script setup lang='ts'>
const explore = () => {
  console.log('explore');

}
</script>
<style scoped></style>