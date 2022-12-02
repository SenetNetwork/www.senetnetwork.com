<template>
  <section ref="panel" class="panel">
    <!-- <img class="panel-animate" src="@/assets/images/roadmap-bg.png" /> -->
    <div class="panel-animate"></div>
    <div class="topic-title">Roadmap</div>
    <div class="topic-body">
      <div class="progress" max="100" value="0">
        <div class="progress-line"></div>
        <div class="progress-inner">
          <div ref="circle1" class="circle"></div>
          <div ref="circle2" class="circle"></div>
          <div ref="circle3" class="circle"></div>
          <div ref="circle4" class="circle"></div>
        </div>
      </div>
      <div class="card-wrap">
        <div class="card-item">
          <div class="card-item-img img1">
            <img src="@/assets/images/roadmap-card1.png" />
          </div>
          <div class="card-item-title">preparation stage</div>
          <div class="card-item-desc">
            <p>Test Network (internal test)</p>
            <p>SENET WALLET (internal test) Gaming</p>
            <p>Platform (internal test)</p>
          </div>
        </div>
        <div class="card-item">
          <div class="card-item-img img2">
            <img src="@/assets/images/roadmap-card2.png" />
          </div>
          <div class="card-item-title">Test Phrase</div>
          <div class="card-item-desc">
            <p>Development resources are in place</p>
            <p>Develop Senet public chain test network nodes</p>
            <p>Launch Senet Wallet</p>
            <p>Launch SENET game platform</p>
            <p>Launch SENET game store</p>
            <p>Launch the Defi platform for game item trading</p>
            <p>Launch an ad network</p>
            <p>Launch big data analysis and algorithm systems</p>
            <p>Establish "Game Alliance" (customer and business operations)</p>
            <p>Social platform account operation and traffic management</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
// alternatively, you can also use it here
const { $gsap } = useNuxtApp()
const panel = ref()
const circle1 = ref()
const circle2 = ref()
const circle3 = ref()
const circle4 = ref()
const clientWidth = ref(0)
onMounted(() => {
  $gsap.to(circle1.value, {
    ease: 'none',
    scrollTrigger: {
      trigger: '.card-wrap',
      start: 'top center',
      end: '25% center',
      scrub: 0.3,
      onLeave: () => {
        $gsap.set(circle1.value, { backgroundColor: '#24E8D6' })
      },
      onEnterBack: () => {
        $gsap.set(circle1.value, { backgroundColor: '#fff' })
      },
    }
  });
  $gsap.to(circle2.value, {
    ease: 'none',
    scrollTrigger: {
      trigger: '.card-wrap',
      start: 'top center',
      end: '50% center',
      scrub: 0.3,
      onLeave: () => {
        $gsap.set(circle2.value, { backgroundColor: '#24E8D6' })
      },
      onEnterBack: () => {
        $gsap.set(circle2.value, { backgroundColor: '#fff' })
      },
    }
  });
  $gsap.to(circle3.value, {
    ease: 'none',
    scrollTrigger: {
      trigger: '.card-wrap',
      start: 'top center',
      end: '75% center',
      scrub: 0.3,
      markers: true,
      onLeave: () => {
        $gsap.set(circle3.value, { backgroundColor: '#24E8D6' })
      },
      onEnterBack: () => {
        $gsap.set(circle3.value, { backgroundColor: '#fff' })
      },
    }
  });
  $gsap.to(circle4.value, {
    ease: 'none',
    scrollTrigger: {
      trigger: '.card-wrap',
      start: 'top center',
      end: '100% center',
      scrub: 0.3,
      onLeave: () => {
        $gsap.set(circle4.value, { backgroundColor: '#24E8D6' })
      },
      onEnterBack: () => {
        $gsap.set(circle4.value, { backgroundColor: '#fff' })
      }
    }
  });


  clientWidth.value = window.innerWidth
  let anim
  function initAnimate() {
    if (anim) {
      return
    }
    anim = $gsap.to('.card-item', {
        xPercent: -100 * (2 - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '.card-wrap',
          start: 'top center',
          end: 'bottom center',
          pin: false,
          scrub: 1,
          // markers: true,
          // base vertical scrolling on how wide the container is so it feels more natural.
        },
      })
  }
  function destroyAnimate() {
    if (anim) {
      anim.progress(0)
      anim.kill()
    }
    anim = null
  }
  if (clientWidth.value > 576) {
    initAnimate()
  }
  window.onresize = () => {
    clientWidth.value = window.innerWidth
    if (clientWidth.value > 576) {
      initAnimate()
    } else {
      destroyAnimate()
    }
  }

})
</script>
<style scoped>
.panel {
  padding-top: 10.25rem;
  padding-left: 6.25rem;
  padding-bottom: 7.875rem;
  position: relative;
}
.panel-animate {
  position: absolute;
  top: -13.125rem;
  left: 0;
  width: 42.875rem;
  height: 43.875rem;
  background: linear-gradient(
    180deg,
    #fdf3c8 0%,
    rgba(36, 232, 214, 0.33) 100%
  );
  filter: blur(200px);
  z-index: -1;
}
.topic-title {
  font-family: var(--font-space-grotesk);
  font-style: normal;
  font-weight: 500;
  font-size: 6.25rem;
  line-height: 120%;
  text-transform: uppercase;

  margin-left: 2.25rem;
}
.topic-body {
  margin-top: 2.375rem;

  max-width: 114.375rem;
  overflow: hidden;
}

.progress {
  margin-left: 2.25rem;
  width: 30.75rem;

  margin-left: 2.25rem;
  position: relative;
}
.progress-line {
  border-top: 1px solid #d2d2d2;
  position: absolute;
  top: 50%;
  width: 100%;
}
.progress-inner {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.progress-inner .circle {
  width: 0.8125rem;
  height: 0.8125rem;
  border-radius: 0.8125rem;
  background: var(--white); /* #24E8D6 */
  border: 1px solid #000000;
}
.card-wrap {
  width: 100vw;
  margin-top: 4.75rem;

  display: flex;
}

.card-item {
  border: 1px solid var(--black);
  width: 71.25rem;
  height: 33.375rem;
  padding: 3.125rem;

  position: relative;
}
.card-item-img {
  z-index: -1;
}
.card-item-img.img1 {
  width: 26.25rem;

  position: absolute;
  bottom: 3.125rem;
  right: 14rem;
}
.card-item-img.img2 {
  width: 22.5rem;
  position: absolute;
  bottom: 6.125rem;
  right: 12.5rem;
}
.card-item-img img {
  width: 100%;
  height: auto;
}
.card-item-title {
  font-family: var(--font-work-sans);
  font-style: normal;
  font-weight: 500;
  font-size: 5.625rem;
  line-height: 120%;
  text-transform: uppercase;

  position: absolute;
  top: 3.125rem;
  left: 3.125rem;
}
.card-item-desc {
  font-family: var(--font-work-sans);
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 170%;

  margin-top: 10.125rem;
}
/* `sm` applies to x-small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .panel {
    padding-top: 5.125rem;
    padding-left: 0;
    padding-bottom: 5.375rem;
    position: relative;
  }
  .panel-animate {
    position: absolute;
    top: -6.875rem;
    left: 0;
    width: 21.75rem;
    height: 22.25rem;
  }
  .topic-title {
    font-size: 2.5rem;
    line-height: 120%;

    margin-left: 2.25rem;
  }
  .topic-body {
    margin-top: 1.75rem;

    max-width: auto;
    overflow: auto;
    display: flex;
  }
  .progress {
    margin-left: 0;
    width: auto;
    height: auto;

    position: relative;
    margin: 0 0.625rem;
  }
  .progress-line {
    border-left: 1px solid #d2d2d2;
    border-top: 0;
    position: absolute;
    top: 0;
    left: 49%;
    height: 100%;
  }
  .progress-inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
  }
  .progress-inner .circle {
    width: 0.8125rem;
    height: 0.8125rem;
    border-radius: 0.8125rem;
    background: var(--white); /* #24E8D6 */
    border: 1px solid #000000;
  }
  .card-wrap {
    width: auto;
    margin-top: 0;
    padding: 0 0.625rem;

    display: block;
    flex: 1;
  }

  .card-item {
    border: 1px solid var(--black);
    width: 100%;
    height: auto;
    padding: 0.9375rem 1.125rem;

    position: relative;
  }
  .card-item + div {
    margin-top: 2.375rem;
  }
  .card-item-img.img1 {
    width: 100%;
    height: 14.5rem;
    margin: 0 auto;

    position: static;
  }
  .card-item-img.img2 {
    width: 80%;
    height: 10.5rem;
    margin: 0 auto;

    position: static;
  }
  .card-item-img img {
    width: 100%;
    height: auto;
  }
  .card-item-title {
    margin-top: 2rem;
    font-size: 1.875rem;

    position: static;
  }
  .card-item-desc {
    font-size: 0.9375rem;

    margin-top: 0.9375rem;
  }
}
</style>