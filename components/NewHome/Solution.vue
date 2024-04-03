<template>
  <section class="bg-#131313 px-25 py-40 text-white" ref="panel">
    <h2 ref="title" class="family-medium">GAMEFI'S ONE-STOP SOLUTION</h2>
    <p ref="desc" class="pt-5 w-50% text-5">Covering seamless gaming experiences, asset trading (tokens, NFTs), and
      supporting developers in launching assets in the market.</p>
    <img ref="img" class="mt-20 w-200 ml-50" src="@img/Solution.png" alt="">
  </section>
</template>

<script setup lang='ts'>
const { $gsap } = useNuxtApp()
const panel = ref()
const title = ref()
const desc = ref()
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
      start: 'top 70%', // when the top of the trigger hits the top of the viewport
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
  animation(title.value)
  animation(desc.value)
  animation(img.value)
})
</script>
<style scoped></style>