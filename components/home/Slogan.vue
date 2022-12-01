<template>
  <section ref="panel" class="panel">
    <div ref="slogan" class="slogan">
      Senet network- Games connect the world
    </div>
    <div ref="sloganDesc" class="slogan-desc">
      A distribution network that commits to develop blockchain games and helps
      traditional games transform into WEB3 with legality and compliance.
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
  $gsap.to(panel.value, {
    scrollTrigger: {
      trigger: panel.value,
      start: 'top top',
      pin: true,
      pinSpacing: false,
    },
  })
  const tl = $gsap.timeline()
  tl.from(blockImg.value, {
    duration: 2.5,
    rotate: -60,
    scale: 0.8,
    ease: 'power1.out',
  })
  tl.from(
    slogan.value,
    { yPercent: 100, opacity: 0, ease: 'power4.in' },
    '<0.5'
  )
  tl.from(sloganDesc.value, { yPercent: 100, opacity: 0 }, '<1')

  $gsap.to([slogan.value, sloganDesc.value], {
    scrollTrigger: {
      trigger: [slogan.value, sloganDesc.value],
      pin: false, // pin the trigger element while active
      start: 'center center', // when the top of the trigger hits the top of the viewport
      end: '+=300', // end after scrolling 300px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      // markers: true,
    },
    scale: 0.9,
  })

  $gsap.to(blockImg.value, {
    scrollTrigger: {
      trigger: blockImg.value,
      pin: false, // pin the trigger element while active
      start: 'center 50', // when the top of the trigger hits the top of the viewport
      end: '+=500', // end after scrolling 500px beyond the start
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
  max-width: var(--max-width);
  margin: 0 auto;
  padding-top: 235px;
  padding-bottom: 109px;
}
.slogan {
  font-family: var(--font-space-grotesk);
  font-style: normal;
  font-weight: 500;
  font-size: 110px;
  line-height: 120%;
  text-align: center;
  text-transform: uppercase;
}
.slogan-desc {
  font-family: var(--font-work-sans);
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  text-align: justify;
  letter-spacing: -0.02em;
  max-width: 880px;

  margin-top: 64px;
}
.block-img {
  width: 936px;
  position: absolute;
  z-index: -1;
  top: 138px;
  left: 50%;
  transform: translate(-50%, 0);
}

/* `sm` applies to x-small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .panel {
    max-width: 1442px;
    margin: 0 auto;
    padding-top: 141px;
    padding-bottom: 52px;
  }
  .slogan {
    font-size: 44px;
  }
  .slogan-desc {
    font-size: 17px;
    line-height: 20px;
    text-align: center;

    margin-top: 35px;
    padding: 0 20px;
  }
  .block-img {
    width: 100%;
    position: absolute;
    z-index: -1;
    top: 138px;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
</style>
