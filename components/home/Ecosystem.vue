<template>
  <div ref="panel" class="panel">
    <a name="ecosystem"></a>

    <div class="topic-wrap">
      <div class="topic-body">
        <div ref="topic" class="topic-title">Ecosystem</div>
        <div ref="topicDesc" class="topic-desc">
          A Distributed Network Economic
        </div>
      </div>
      <img class="topic-animate" src="@/assets/images/ecosystem-block.png" />
    </div>
    <div class="economic-wrap">
      <div ref="intro" class="economic-desc">
        In Senet, games no longer run in isolation. All ecosystem participants,
        platform holders, developers and users, have the opportunity to become
        SENET token holders and share in the value of it. The continuous
        interaction and common interests among users will promote the further
        development of the ecosystem.
      </div>
      <div class="economic-body">
        <img class="economic-animate" src="@/assets/images/ecosystem-economic.gif" />
      </div>
    </div>
  </div>
</template>
<script setup>
// alternatively, you can also use it here
const { $gsap } = useNuxtApp()
const panel = ref()
const topic = ref()
const topicDesc = ref()

const intro = ref()
function textAnimate() {
  $gsap.from(
    topic.value,
    {
      yPercent: 30,
      opacity: 0,
      ease: 'power4.in',
      scale: 0.9,
      scrollTrigger: {
        trigger: panel.value,
        pin: false, // pin the trigger element while active
        start: 'top 80%', // when the top of the trigger hits the top of the viewport
        end: '10% 80%', // end after scrolling 300px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        // markers: true,
      },
    })
  $gsap.from(
    [topicDesc.value, intro.value],
    {
      yPercent: 30,
      opacity: 0,
      ease: 'power4.in',
      scale: 0.9,
      stagger: 0.5,
      scrollTrigger: {
        trigger: panel.value,
        pin: false, // pin the trigger element while active
        start: 'top 80%', // when the top of the trigger hits the top of the viewport
        end: '50% 80%', // end after scrolling 300px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        markers: false,
      },
    })
}

onMounted(() => {
  textAnimate()
})
</script>
<style scoped>
.panel {
  width: 100%;
  background: var(--bg-gradient);

  position: relative;
  /* z-index: 3; */
}

.topic-wrap {
  padding-top: 14.125rem;
  padding-bottom: 1.25rem;

  position: relative;
}

.topic-body {
  max-width: var(--max-width);
  margin: 0 auto;
  padding-left: 0.625rem;
}

.topic-title {
  font-family: var(--font-work-sans);
  font-style: normal;
  font-weight: 500;
  font-size: 1.375rem;
  line-height: 1.625rem;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.topic-desc {
  font-family: var(--font-space-grotesk);
  font-style: normal;
  font-weight: 500;
  font-size: 6.25rem;
  line-height: 120%;
  text-transform: uppercase;

  margin-top: 0.25rem;
}

.topic-animate {
  width: 32rem;

  position: absolute;
  bottom: -6.25rem;
  right: -13.375rem;
}

.economic-wrap {
  color: var(--white);
  background-color: var(--black);
  padding: 4.75rem 5.125rem;
  position: relative;
}

.economic-desc {
  width: 44.5rem;
  font-family: var(--font-work-sans);
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 170%;

  position: absolute;
  top: 4.75rem;
  left: 5.125rem;
}

.economic-body {
  width: 80vw;
  height: calc(0.65 * 80vw);
  max-width: 85.375rem;
  max-height: 55.5rem;
  margin: 0 auto;
}

.economic-animate {
  width: 100%;
  height: 100%;
}

/* `sm` applies to x-small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .panel {
    width: 100%;
  }

  .topic-wrap {
    padding-top: 11.25rem;
    padding-bottom: 0;

    position: relative;
  }

  .topic-body {
    padding-left: var(--sm-pl);
    padding-right: var(--sm-pr);
  }

  .topic-title {
    font-size: 1.375rem;
    line-height: 1.625rem;
  }

  .topic-desc {
    font-size: 2.5rem;
    line-height: 120%;

    margin-top: 1.4375rem;
    height: 12rem;
  }

  .topic-animate {
    width: 16rem;
    position: absolute;
    top: 3.125rem;
    right: -9.125rem;
    bottom: initial;
  }

  .economic-wrap {
    padding: 1.375rem 0 2.25rem;
  }

  .economic-body {
    width: 100vw;
    height: calc(0.65 * 100vw);

    position: relative;
    margin-top: 1.875rem;
  }

  .economic-desc {
    font-size: 0.9375rem;
    line-height: 150%;

    position: static;
    padding-left: var(--sm-pl);
    padding-right: var(--sm-pr);
    width: 100%;
    box-sizing: border-box;
  }

  .economic-animate {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
}
</style>