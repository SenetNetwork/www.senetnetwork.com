<template>
  <section ref="containerRef" class="pt-30 bg-[url(@img/bg-explore.png)] bg-no-repeat bg-cover flex flex-col z-1" md="flex-row min-h-80vh">
    <div class="grow-1  px-8" md="pl-45 pt-30 block">
      <h2 class="text-center" md="text-start">
        Gamefi Exchange App & Wallet
      </h2>
      <p class="color-gray mt-4 text-center" md="text-start">
        Easy, Safe, and Fun.
      </p>
      <div class="flex justify-center mt-12" md="justify-start">
        <button class="button-black" @click="explore">
          Explore
        </button>
      </div>
    </div>
    <div class="grow-1 shrink-0 flex justify-center" md="w-50% flex-center">
      <img class="w-80" sm="w-90" md="w-120" src="@img/platform.gif" alt="">
    </div>
  </section>
</template>

<script setup lang='ts'>
const containerRef = ref()
const explore = () => {
  window.scrollTo({
    top: containerRef.value?.clientHeight ?? 0,
    behavior: 'smooth'
  })
}
</script>
<style scoped></style>
