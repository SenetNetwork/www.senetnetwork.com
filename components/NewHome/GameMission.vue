<template>
  <section ref="panel" class="panel flex md-flex-row flex-col py-10" md="py-30">
    <div ref="img" class="flex items-center order-2 shrink-0 mt-8" md="order-1 w-50% mt-0">
      <img
        md="w-27% translate-x-90%"
        sm="w-24% translate-x-100%"
        class="z-2 relative w-30% translate-x-80%"
        src="@img/game-platform-7.png"
        alt="Game asset trading platform"
      >
      <img
        md="w-35% translate-x-50%"
        sm="w-32% translate-x-60%"
        class="z-1 relative w-38% translate-x-40%"
        src="@img/game-platform-8.png"
        alt="Game asset trading platform"
      >
    </div>
    <div ref="desc" class="px-8 order-1 flex-col justify-center" md="order-2" lg="pr-60">
      <h2 class="text-center" md="text-start">
        Game Mission System
      </h2>
      <p class="text-main-dark mt-6 text-center desc" md="text-start">
        Embark on a multitude of time-sensitive missions, earn rewards, and truly embrace the 'Free to Earn' concept!
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
  animation(img.value)
})
</script>
<style scoped>
.img-wrap::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 40%;
  padding-bottom: 40%;
  transform: translate(-50%, -50%);
  background: linear-gradient(140deg, #DAFD60 0%, #687D1D 100%);
  filter: blur(200px);
}
</style>
