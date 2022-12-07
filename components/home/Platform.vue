<template>
  <section ref="panel" class="panel">
    <a name="platform"></a>
    <div class="panel-item left">
      <div class="topic-wrap">
        <div ref="topic" class="topic">Platform</div>
        <div ref="topicDesc" class="topic-desc">
          Platform for play ... Earn ...
        </div>
      </div>
      <div class="divider-line">
        <div class="divider-label"></div>
      </div>
      <div ref="intro" class="intro">
        SN not just focuses on the value of game experience, but also embeds an
        economic system that connects with reality. By integrating equipment,
        securitization, game token mechanism securitization, security audit,
        native cloud security defense,, advertising services, game asset
        management, AI economic model governance, big data user behavior
        analysis, recommendation network and other functions, we aim to help
        user more safely and conveniently enter the WEB3 World.
      </div>
    </div>
    <div class="panel-item right">
      <img ref="phone" class="img-phone" src="@/assets/images/platform.png" />
    </div>
  </section>
</template>
<script setup>
// alternatively, you can also use it here
const { $gsap } = useNuxtApp()
const panel = ref()
const topic = ref()
const phone = ref()

const topicDesc = ref()
const intro = ref()
function textAnimate() {
  $gsap.from(
    [topic.value, topicDesc.value],
    {
      xPercent: -100,
      opacity: 0,
      ease: 'power4.in',
      scale: 0.9,
      scrollTrigger: {
        trigger: panel.value,
        pin: false, // pin the trigger element while active
        start: 'top 300px', // when the top of the trigger hits the top of the viewport
        end: '+=100px', // end after scrolling 300px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        markers: false,
      },
    }
  )
  $gsap.from(intro.value, {
    yPercent: 100, opacity: 0,
    scrollTrigger: {
      trigger: panel.value,
      pin: false, // pin the trigger element while active
      start: 'top 300px', // when the top of the trigger hits the top of the viewport
      end: '+=100px', // end after scrolling 300px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      markers: false,
    },
  })
}

onMounted(() => {
  textAnimate()
  $gsap.from(phone.value, {
    xPercent: 5,
    transform: 'rotateX(5deg) rotateY(-20deg) rotateZ(0)',
    ease: 'none',
    scrollTrigger: {
      trigger: phone.value,
      start: 'top center',
      end: 'bottom bottom',
      pin: false,
      scrub: 1,
      markers: false,
      // base vertical scrolling on how wide the container is so it feels more natural.
    },
  })
})
</script>
<style scoped>
.panel {
  width: 100%;
  height: 66.25rem;
  position: relative;

  color: var(--white);
  background: var(--black);

  display: flex;
  z-index: 2;
}
.panel-item {
  flex: 1;
}

.panel-item.left {
}
.topic-wrap {
  padding-left: 5.125rem;
}
.topic {
  font-family: var(--font-work-sans);
  font-style: normal;
  font-weight: 500;
  font-size: 1.375rem;
  line-height: 1.625rem;
  letter-spacing: -0.02em;
  text-transform: uppercase;

  padding-top: 6.75rem;
}
.topic-desc {
  font-family: var(--font-space-grotesk);
  font-style: normal;
  font-weight: 400;
  font-size: 6.25rem;
  line-height: 120%;
  text-transform: uppercase;

  margin-top: 1.125rem;
  margin-bottom: 7rem;
}
.divider-line {
  border-top: 1px solid #d2d2d2;
  position: relative;
}
.divider-label {
  width: 14.125rem;
  height: 2.1875rem;
  background: #dafd60;

  position: absolute;
  top: -1.0625rem;
  left: -0.8125rem;
}
.intro {
  font-family: var(--font-work-sans);
  font-style: normal;
  font-weight: 400;
  font-size: 1.3125rem;
  line-height: 1.9375rem;

  padding-left: 5.125rem;
  padding-right: 5.125rem;
  margin-top: 3.375rem;
}
.panel-item.right {
  position: relative;
}
.img-phone {
  width: 52.75rem;
  height: 70.625rem;

  position: absolute;
  top: 8.125rem;
  left: 0;
}

/* `sm` applies to x-small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .panel {
    width: 100%;
    height: 65rem;
    position: relative;

    display: block;
  }
  .panel-item {
    flex: auto;
  }

  .panel-item.left {
  }
  .topic-wrap {
    padding-left: 1.25rem;
  }
  .topic {
    font-size: 0.875rem;
    line-height: 1rem;

    padding-top: 3.25rem;
  }
  .topic-desc {
    font-size: 2.5rem;

    margin-top: 1rem;
    margin-bottom: 3.375rem;
  }
  .divider-label {
    left: -7rem;
  }
  .intro {
    font-size: 0.9375rem;
    line-height: 150%;

    padding-left: var(--sm-pl);
    padding-right: var(--sm-pr);
    margin-top: 3.375rem;
  }
  .panel-item.right {
    position: relative;
  }
  .img-phone {
    width: auto;
    height: 35.625rem;
    margin-left: auto;
    margin-right: auto;
    display: block;

    position: relative;
    top: 6.75rem;
    left: 0;
    margin-top: -5.5rem;
  }
}
</style>