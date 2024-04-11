<template>
  <section ref="panel" class="panel flex md-flex-row flex-col py-10 " md="py-30 h-80vh">
    <div ref="img" class="flex items-center order-2 shrink-0 mt-8" md="order-1 w-50% mt-0">
      <img
        md="w-35% translate-x-60%"
        sm="w-35% translate-x-60%"
        class="z-2 relative w-40% translate-x-50%"
        src="@img/game-platform-3.png"
        alt="Game asset trading platform"
      >
      <img
        md="w-27% translate-x-60%"
        sm="w-25% translate-x-60%"
        class="z-1 relative w-28% translate-x-50%"
        src="@img/game-platform-4.png"
        alt="Game asset trading platform"
      >
    </div>
    <div ref="desc" class="px-8 order-1 flex-col justify-center" md="order-2" lg="pr-60">
      <h2 class="text-center" md="text-start">
        Game asset platform
      </h2>
      <p class="text-main-dark mt-6 text-center" md="text-start">
        Provides a convenient and efficient asset management solution. On our platform, you can easily manage your
        various game assets, including game currency, equipment, virtual props, etc. We provide a safe and convenient
        trading platform where you can buy and sell various game assets, or exchange them with other players. Whether
        you're an indie gamer or a professional game developer, we've got you covered
      </p>
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
  animation(img.value, (options) => {
    options.opacity = 1
  })
})
</script>
<style scoped></style>
