<template>
  <section ref="panel" class="panel">
    <div ref="slogan" class="slogan">
      Senet network- Games connect the world
    </div>
    <div ref="sloganDesc" class="slogan-desc">
      A distribution network that commits to developing blockchain games and
      helps traditional games transform into Web3.0 with legality and
      compliance.
    </div>
    <img
      ref="blockImg"
      class="block-img"
      src="@/assets/images/slogan-block.png"
    />
  </section>
</template>
<script setup>
// alternatively, you can also use it here
var { $gsap } = useNuxtApp()
const panel = ref()
const blockImg = ref()
const slogan = ref()
const sloganDesc = ref()

onMounted(() => {
  // $gsap.to(panel.value, {
  //   scrollTrigger: {
  //     trigger: panel.value,
  //     start: 'top top',
  //     pin: false,
  //     pinSpacing: false,
  //   },
  // })
  const tl = $gsap.timeline()
  tl.from(blockImg.value, {
    duration: 2.5,
    rotate: -60,
    scale: 0.8,
    ease: 'power1.out',
  }).from(
    slogan.value,
    { yPercent: 100, opacity: 0, ease: 'power4.in' },
    '<0.5'
  ).from(sloganDesc.value, { yPercent: 100, opacity: 0 }, '<1')

  $gsap.to([slogan.value, sloganDesc.value], {
    scrollTrigger: {
      trigger: panel.value,
      pin: false, // pin the trigger element while active
      start: 'center center', // when the top of the trigger hits the top of the viewport
      end: '100% center', // end after scrolling 300px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      // markers: true,
    },
    scale: 0.9,
  })

  $gsap.to(blockImg.value, {
    scrollTrigger: {
      trigger: panel.value,
      pin: true, // pin the trigger element while active
      pinSpacing: false,
      start: 'top top', // when the top of the trigger hits the top of the viewport
      end: 'bottom', // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      // markers: true,
    },
    webkitFilter: 'blur(100px)',
    filter: 'blur(100px)',
  })
})
</script>
<style scoped>
.panel {
  box-sizing: border-box;
  max-width: var(--max-width);
  margin: 0 auto;
  padding-top: 5.625rem;

  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.slogan {
  font-family: var(--font-space-grotesk);
  font-style: normal;
  font-weight: 500;
  font-size: 6.875rem;
  line-height: 120%;
  text-align: center;
  text-transform: uppercase;
}
.slogan-desc {
  font-family: var(--font-work-sans);
  font-style: normal;
  font-weight: 500;
  font-size: 1.875rem;
  line-height: 2.1875rem;
  text-align: justify;
  letter-spacing: -0.02em;
  max-width: 55rem;

  margin-top: 4rem;
  padding-left: 0.625rem;
}
.block-img {
  width: 58.5rem;
  position: absolute;
  z-index: -1;
  top: 6.75rem;
  left: 50%;
  transform: translate(-50%, 0);
}

/* `sm` applies to x-small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .panel {
    margin: 0 auto;
    padding-top: 8.75rem;

    height: 90vh;
    box-sizing: border-box;
  }
  .slogan {
    font-size: 2.75rem;
  }
  .slogan-desc {
    font-size: 1.0625rem;
    line-height: 1.25rem;
    text-align: center;

    margin-top: 2.1875rem;
    padding: 0 1.25rem;
  }
  .block-img {
    width: 100%;
    position: absolute;
    z-index: -1;
    top: 8.625rem;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
</style>
