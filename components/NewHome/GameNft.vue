<template>
  <section ref="panel" class="panel flex flex-col md-flex-row py-10 " md="py-30 h-80vh">
    <div ref="desc" class="px-8 flex-col justify-center" lg="pl-60">
      <h2 class="text-center" md="text-start">
        Game NFT transaction
      </h2>
      <p class="text-main-dark mt-6 text-center" md="text-start">
        The game party releases NFT digital collections. Players can freely trade and buy them, obtain limited
        collection props or skins, and become unique in the game.
      </p>
    </div>
    <div ref="img" md="w-50% mt-0" class="shrink-0 flex items-center mt-8">
      <img
        md="w-30% translate-x-60%"
        sm="w-25% translate-x-100%"
        class="z-2 relative w-36% translate-x-50%"
        src="@img/game-platform-5.png"
        alt="Game asset trading platform"
      >
      <img
        md="w-40% translate-x-25%"
        sm="w-35% translate-x-55%"
        class="z-1 relative w-46% translate-x-15%"
        src="@img/game-platform-6.png"
        alt="Game asset trading platform"
      >
    </div>
  </section>
</template>

<script setup lang='ts'>
const { $gsap } = useNuxtApp()
const panel = ref()
const desc = ref()
const img = ref()

const animation = (els: HTMLElement | HTMLElement[], handle?: (opt: any) => void) => {
  const options = {
    yPercent: 30,
    opacity: 0,
    ease: 'power4.in',
    scale: 0.9,
    stagger: 0.5,
    scrollTrigger: {
      trigger: panel.value,
      pin: false, // pin the trigger element while active
      start: 'top 80%', // when the top of the trigger hits the top of the viewport
      end: '30% 80%', // end after scrolling 300px beyond the start
      scrub: 1 // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      // markers: true,
    }
  }
  if (handle) {
    handle(options)
  }
  $gsap.from(els, options)
}
onMounted(() => {
  animation(desc.value)
  animation(img.value)
})
</script>
<style scoped></style>
