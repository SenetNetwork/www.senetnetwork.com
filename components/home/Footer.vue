<template>
  <footer ref="panel" class="footer">
    <div ref="logo" class="logo">
      <img src="@/assets/images/logo.svg" />
    </div>
    <div ref="copyright" class="copyright">
      © 2022 Senet. All rights reserved.
    </div>
  </footer>
</template>
<script setup>
const { $gsap } = useNuxtApp()

const panel = ref()
const logo = ref()
const copyright = ref()
function textAnimate() {
  $gsap.from(
    [logo.value, copyright.value],
    {
      yPercent: 30,
      opacity: 0,
      ease: 'power4.in',
      scale: 0.9,
      stagger: 0.5,
      scrollTrigger: {
        trigger: panel.value,
        pin: false, // pin the trigger element while active
        start: '50% bottom', // when the top of the trigger hits the top of the viewport
        end: 'bottom bottom', // end after scrolling 300px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        markers: false,
      },
    }
  )
}
onMounted(() => {
  textAnimate()
})
</script>
<style scoped>
.footer {
  background-color: var(--black);
  color: var(--white);
  padding: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  width: 132px;
  height: 61px;
}
.copyright {
  font-family: var(--font-work-sans);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.03em;
  text-transform: capitalize;

  margin-left: 35px;
}
/* `sm` applies to x-small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .footer {
    padding: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 132px;
    height: 61px;
  }
  .copyright {
    margin-top: 18px;
    margin-left: 0;
  }
}
</style>