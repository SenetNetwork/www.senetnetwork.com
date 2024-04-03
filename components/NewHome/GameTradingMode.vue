<template>
  <section ref="panel" class="flex-col items-center py-50">
    <h2 ref="title" class="family-medium w-50% text-center">CONTINUOUSLY PROGRESSING GAME TRADING MODE</h2>
    <img ref='img' class="mt-19 w-50%" src="@img/TradingMode.png" alt="CONTINUOUSLY PROGRESSING GAME TRADING MODE">
  </section>
</template>

<script setup lang='ts'>
const { $gsap } = useNuxtApp()
const panel = ref()
const title = ref()
const img = ref()
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
      start: '20% 70%', // when the top of the trigger hits the top of the viewport
      end: '50% 80%', // end after scrolling 300px beyond the start
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
  animation(title.value)
  animation(img.value)
})
</script>
<style scoped lang='less'></style>