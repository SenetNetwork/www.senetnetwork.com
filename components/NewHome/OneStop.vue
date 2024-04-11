<template>
  <section ref="panel" class="bg-#011828  text-white py-8" md="py-25">
    <div ref="bgRef" class="absolute bottom-30 left-0 w-50% h-30% bg rounded-full z-0" />
    <div class="relative z-1 px-8 py-20 flex-col justify-center items-center size-full" md="py-0">
      <h2 ref="title" class="family-medium text-center" md="text-start">
        GAMEFI'S <span class="text-primary">ONE-STOP SOLUTION</span>
      </h2>
      <div ref="desc" class="text-background  mt-4 text-center" sm="text-start mt-10">
        <p>
          Covering seamless gaming experiences, asset trading (tokens, NFTs), and
        </p>
        <p>
          supporting developers in launching assets in the market.
        </p>
      </div>
      <img ref="img" class="" md="w-50% min-w-150 max-w-210" src="@img/OneStop.png" alt="desc">
    </div>
  </section>
</template>

<script setup lang='ts'>
const { $gsap } = useNuxtApp()
const panel = ref()
const title = ref()
const desc = ref()
const img = ref()
const bgRef = ref()
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
  animation(title.value)
  animation(desc.value)
  animation(img.value)
})
</script>
<style scoped>
.bg {
  background: linear-gradient(140deg, #DAFD60 0%, #F593FB 100%);
  filter: blur(1500px);
}
</style>
