<template>
  <section class="bg-#011828 py-40 text-white overflow-hidden" ref="panel">
    <div class="absolute bottom-30 left-0 w-50% h-30% bg rounded-full z-0"></div>
    <div class="relative z-1 flex-col items-center">
      <h2 class="family-medium" ref="title">
        GAMEFI'S <span class="text-primary">ONE-STOP SOLUTION</span>
      </h2>
      <div class="text-background flex-col items-center mt-10" ref="desc">
        <p>
          Covering seamless gaming experiences, asset trading (tokens, NFTs), and
        </p>
        <p>
          supporting developers in launching assets in the market.
        </p>
      </div>
      <img class="w-60%" ref="img" src="@img/OneStop.png" alt="desc">
    </div>
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
  animation(title.value)
  animation(desc.value)
  animation(img.value)
})
</script>
<style scoped>
.bg {
  background: linear-gradient(140deg, #DAFD60 0%, #F593FB 100%);
  filter: blur(400px);
}
</style>