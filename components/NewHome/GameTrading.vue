<template>
  <section ref="panel" class="panel flex flex-col md-flex-row py-10" md="py-30 h-80vh">
    <div ref="desc" class="px-8 flex-col justify-center" lg="pl-60">
      <h2 md="text-start" class="text-center">
        Game asset trading platform
      </h2>
      <p class="text-main-dark mt-6 text-center" md="text-start">
        Senet is a seamless, efficient, and user-friendly GameFi Exchange that enhances liquidity, player engagement,
        and developer involvement in the Web3 Gaming Industry (2C).
      </p>
    </div>
    <div ref="img" md="w-50% mt-0" class="shrink-0 flex items-center mt-8">
      <img
        md="w-35% translate-x-40% scale-110"
        sm="w-35% translate-x-55%"
        class="z-2 relative w-40% translate-x-50%"
        src="@img/game-platform-1.png"
        alt="Game asset trading platform"
      >
      <img
        md="w-27% translate-x-35%"
        sm="w-25% translate-x-50%"
        class="z-1 relative w-28% translate-x-50%"
        src="@img/game-platform-2.png"
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
  animation(img.value, (options) => {
    options.opacity = 1
  })
  // animation(img2.value, (options) => {
  //   options.yPercent = 60
  // })
})
</script>
<style scoped>
.panel::before {
  content: '';
  position: absolute;
  z-index: -1;
  right: 8%;
  top: 18%;
  width: 10%;
  padding-bottom: 10%;
  background: linear-gradient(140deg, #DAFD60 0%, #687D1D 100%);
  filter: blur(120px);
}

.panel::after {
  content: '';
  position: absolute;
    z-index: -1;
  right: 18%;
  top: 60%;
  width: 10%;
  padding-bottom: 10%;
  background: linear-gradient(140deg, #DAFD60 0%, #687D1D 100%);
  filter: blur(120px);
}
</style>
