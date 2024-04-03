<template>
  <section ref="panel" class="panel flex">
    <div class="pl-60 py-80" ref="desc">
      <h2 class="text-10.5 line-height-12 pr-5">
        Game NFT transaction
      </h2>
      <p class="text-main-dark mt-6">
        The game party releases NFT digital collections. Players can freely trade and buy them, obtain limited
        collection props or skins, and become unique in the game.
      </p>
    </div>
    <div class="w-57% shrink-0 relative" ref="img">
      <img ref="img1" class="absolute w-75 top-24 left-35 z-1" src="@img/game-platform-5.png"
        alt="Game NFT transaction">
      <img ref="img2" class="absolute w-105 top-24 left-85 z-0" src="@img/game-platform-6.png"
        alt="Game NFT transaction">
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