<template>
  <section ref="panel" class="bg-#131313 text-white p-8" md="p-20">
    <h2 ref="title" class="family-medium text-center m-auto">
      Game On, Any Chain
    </h2>
    <p ref="desc" class="pt-5  text-center m-auto" md="max-w-60%">
      With Senet token, enjoy the cross-chain gaming ecosystem. Play freely across all blockchain gaming
      worlds, building a new unified gaming experience. Discover limitless play today
    </p>
    <img
      ref="img"
      class="mt-8 m-auto"
      sm="w-120 "
      md="w-130 "
      src="@img/Solution.png"
      alt=""
    >
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
    stagger: 0.5,
    scrollTrigger: {
      trigger: panel.value,
      pin: false, // pin the trigger element while active
      start: 'top 70%', // when the top of the trigger hits the top of the viewport
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
<style scoped></style>
