<template>
  <section ref="panel" class="panel flex ">
    <div class="w-57% shrink-0 relative img-wrap" ref="img">
      <img ref="img1" class="absolute w-75 top-24 left-50 z-2" src="@img/game-platform-7.png"
        alt="Exclusive game mission system">
      <img ref="img2" class="absolute w-100 top-22 left-108 z-1" src="@img/game-platform-8.png"
        alt="Exclusive game mission system">
    </div>
    <div class="pr-60 py-80" ref="desc">
      <h2 class="text-10.5 line-height-12 pr-5">
        Exclusive game mission system
      </h2>
      <p class="text-main-dark mt-6">
        The gaming platform releases various tasks to increase user stickiness, giving users a better gaming experience
        and earning airdrops of points.
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