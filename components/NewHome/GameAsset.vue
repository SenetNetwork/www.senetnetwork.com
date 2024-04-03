<template>
  <section ref="panel" class="panel flex ">
    <div class="w-57% shrink-0 relative" ref="img">
      <img ref="img1" class="absolute w-105 top-24 left-40 z-2" src="@img/game-platform-3.png"
        alt="Game asset platform">
      <img ref="img2" class="absolute w-75 top-24 left-120 z-1" src="@img/game-platform-4.png"
        alt="Game asset platform">
    </div>
    <div class="pr-60 py-80" ref="desc">
      <h2 class="text-10.5 line-height-12 pr-5">
        Game asset platform
      </h2>
      <p class="text-main-dark mt-6">
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
const img1 = ref()
const img2 = ref()

const animation = (els: HTMLElement | HTMLElement[], handle?: (opt: any) => void) => {
  const options = {
    yPercent: 30,
    opacity: 0,
    ease: 'power4.in',
    scale: 0.9,
    stagger: .5,
    scrollTrigger: {
      trigger: panel.value,
      pin: false, // pin the trigger element while active
      start: 'top 80%', // when the top of the trigger hits the top of the viewport
      end: '30% 80%', // end after scrolling 300px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      // markers: true,
    },
  }
  if (handle) {
    handle(options)
  }
  $gsap.from(els, options)
}
onMounted(() => {
  animation(desc.value)
  animation(img1.value, (options) => {
    options.opacity = 1
  })
  animation(img2.value, (options) => {
    options.yPercent = 60
  })
})
</script>
<style scoped></style>