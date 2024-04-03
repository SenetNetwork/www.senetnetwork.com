<template>
  <section ref="panel" class="panel">
    <a name="roadmap"></a>
    <!-- <img class="panel-animate" src="@/assets/images/roadmap-bg.png" /> -->
    <div class="panel-animate"></div>
    <div ref="topic" class="topic-title">Roadmap</div>
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
      <div ref="cardWrap" class="card-wrap">
        <div ref="cardItem1" class="card-item">
          <div class="card-item-img img1">
            <img src="@/assets/images/roadmap-card1.gif" />
          </div>
          <div class="card-item-title">preparation stage</div>
          <div class="card-item-desc">
            <p>Launch SENET WaaS</p>
            <p>Launch SENET Platform Beat Version</p>
            <p>Launch the "Blue Ocean" program</p>
            <p>Establish "Game Alliance"</p>
          </div>
        </div>
        <div ref="cardItem2" class="card-item">
          <div class="card-item-img img2">
            <img src="@/assets/images/roadmap-card2.gif" />
          </div>
          <div class="card-item-title">Test Phrase</div>
          <div class="card-item-desc">
            <p>Launch the test network</p>
            <p>Launch SENET CaaS</p>
            <p>Launch SENET SDK</p>
            <p>Launch SENET Adwords</p>
            <p>Launch SENET IGO Platform</p>
            <p>Launch SENET GID Card</p>
          </div>
        </div>

        <div ref="cardItem3" class="card-item">
          <div class="card-item-img img1">
            <img src="@/assets/images/roadmap-card3.gif" />
          </div>
          <div class="card-item-title">Incubation Stage</div>
          <div class="card-item-desc">
            <p>Launch SENET Algorithm System</p>
            <p>Launch SNLauncher</p>
            <p>Launch SNMini-Program</p>
            <p>Launch the "Dream Builder" program</p>
            <p>Launch SCaaS</p>
          </div>
        </div>
        <div ref="cardItem4" class="card-item">
          <div class="card-item-img img2">
            <img src="@/assets/images/roadmap-card4.gif" />
          </div>
          <div class="card-item-title">Profit stage</div>
          <div class="card-item-desc">
            <p>Access multiple popular games</p>
            <p>Launch community function</p>
            <p>Launch AI economic model governance system</p>
            <p>Launch the main network</p>
            <p>Launch SENET Token</p>
            <p>Develope a true Metaverse game library</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
// alternatively, you can also use it here
const { $gsap, $ScrollTrigger } = useNuxtApp()
const panel = ref()
const circle1 = ref()
const circle2 = ref()
const circle3 = ref()
const circle4 = ref()

const cardWrap = ref()
const cardItem1 = ref()
const cardItem2 = ref()
const cardItem3 = ref()
const cardItem4 = ref()

const clientWidth = ref(0)

const topic = ref()
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
        end: '+=80px 80%', // end after scrolling 300px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        markers: false,
      },
    })
}

onMounted(() => {
  textAnimate()

  clientWidth.value = window.innerWidth
  function initAnimate() {
    const offectWidth = cardWrap.value.clientWidth - window.innerWidth + cardWrap.value.offsetLeft * 2
    const height = cardWrap.value.clientHeight + offectWidth
    if (offectWidth < 0) return false

    $gsap.to(circle1.value, {
      ease: 'none',
      scrollTrigger: {
        trigger: panel.value,
        start: `0 top`,
        scrub: 0.3,
        // markers: true,
        onEnter: () => {
          $gsap.set(circle1.value, { backgroundColor: '#24E8D6' })
        },
        onLeaveBack: () => {
          $gsap.set(circle1.value, { backgroundColor: '#fff' })
        },
      }
    });
    $gsap.to(circle2.value, {
      ease: 'none',
      scrollTrigger: {
        trigger: panel.value,
        start: `+=${height * 0.25}px top`,
        scrub: 0.3,
        markers: false,
        onEnter: () => {
          $gsap.set(circle2.value, { backgroundColor: '#24E8D6' })
        },
        onLeaveBack: () => {
          $gsap.set(circle2.value, { backgroundColor: '#fff' })
        },
      }
    });
    $gsap.to(circle3.value, {
      ease: 'none',
      scrollTrigger: {
        trigger: panel.value,
        start: `+=${height * 0.5}px top`,
        scrub: 0.3,
        onEnter: () => {
          $gsap.set(circle3.value, { backgroundColor: '#24E8D6' })
        },
        onLeaveBack: () => {
          $gsap.set(circle3.value, { backgroundColor: '#fff' })
        },
      }
    });
    $gsap.to(circle4.value, {
      ease: 'none',
      scrollTrigger: {
        trigger: panel.value,
        start: `+=${height * 0.75}px top`,
        scrub: 0.3,
        onEnter: () => {
          $gsap.set(circle4.value, { backgroundColor: '#24E8D6' })
        },
        onLeaveBack: () => {
          $gsap.set(circle4.value, { backgroundColor: '#fff' })
        }
      }
    });

    $gsap.to(cardWrap.value, {
      x: - offectWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: panel.value,
        start: 'top top',
        end: `+=${height}px top`,
        pin: true,
        scrub: 1,
        markers: false,
        // base vertical scrolling on how wide the container is so it feels more natural.
      },
    })
  }
  function resetAnimate() {
    const offectWidth = cardWrap.value.clientWidth - window.innerWidth + cardWrap.value.offsetLeft * 2
    const height = cardWrap.value.clientHeight + offectWidth
    if (offectWidth < 0) return false

    $gsap.to(circle1.value, {
      ease: 'none',
      scrollTrigger: {
        trigger: panel.value,
        start: `0 top`,
        scrub: 0.3,
        // markers: true,
      }
    });
    $gsap.to(circle2.value, {
      ease: 'none',
      scrollTrigger: {
        trigger: panel.value,
        start: `+=${height * 0.25}px top`,
        scrub: 0.3,
        markers: false,
      }
    });
    $gsap.to(circle3.value, {
      ease: 'none',
      scrollTrigger: {
        trigger: panel.value,
        start: `+=${height * 0.5}px top`,
        scrub: 0.3
      }
    });
    $gsap.to(circle4.value, {
      ease: 'none',
      scrollTrigger: {
        trigger: panel.value,
        start: `+=${height * 0.75}px top`,
        scrub: 0.3
      }
    });

    $gsap.to(cardWrap.value, {
      ease: 'none',
      scrollTrigger: {
        trigger: panel.value,
        start: 'top top',
        end: `+=${height}px top`,
        pin: false,
        scrub: 1,
        markers: false,
        // base vertical scrolling on how wide the container is so it feels more natural.
      },
    })
  }
  $ScrollTrigger.matchMedia({
    "(min-width: 576px)": function () {
      initAnimate()
    },
    "(max-width: 576px)": function () {
      resetAnimate()
    }
  })
})
</script>
<style scoped>
.panel {
  padding-top: 5rem;
  padding-left: 6.25rem;
  padding-bottom: 4rem;
  position: relative;
  z-index: 2;
  background-color: var(--white);
}

.panel-animate {
  position: absolute;
  top: -13.125rem;
  left: 0;
  width: 42.875rem;
  height: 43.875rem;
  background: linear-gradient(180deg,
      #fdf3c8 0%,
      rgba(36, 232, 214, 0.33) 100%);
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
  background: var(--white);
  /* #24E8D6 */
  border: 1px solid #000000;
}

.card-wrap {
  width: 4560px;
  margin-top: 4.75rem;

  flex-shrink: 0;
  display: flex;
}

.card-item {
  border: 1px solid var(--black);
  width: calc(213.4831 * 60vh);
  height: calc(60vh);
  padding: 3.125rem;

  position: relative;
}

.card-item-img {
  width: 26.25rem;
  height: 23.125rem;

  z-index: -1;
}

.card-item-img.img1 {
  position: absolute;
  bottom: 0;
  right: 14rem;
}

.card-item-img.img2 {
  position: absolute;
  bottom: 0;
  right: 12.5rem;
}

.card-item-img img {
  width: 100%;
  height: 100%;
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

@media (max-width: 1500px) {
  .panel {
    padding-top: 3rem;
    padding-left: 6.25rem;
    padding-bottom: 4rem;
    position: relative;
    z-index: 2;
    background-color: var(--white);
  }

  .card-item {
    border: 1px solid var(--black);
    width: calc(213.4831 * 55vh);
    height: calc(55vh);
    padding: 3.125rem;

    position: relative;
  }
}

/* `sm` applies to x-small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .panel {
    padding-top: 3rem;
    padding-left: 0;
    padding-bottom: 3rem;
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
    display: none;
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
    background: var(--white);
    /* #24E8D6 */
    border: 1px solid #000000;
  }

  .card-wrap {
    width: auto;
    margin-top: 0;
    padding: 0 0.625rem;
    padding-bottom: 0.9375rem;

    display: block;
    flex: 1;
  }

  .card-item {
    border: 1px solid var(--black);
    width: 100%;
    height: auto;
    padding: 0;

    position: relative;
    padding-top: 0.25rem;
    padding-bottom: 2rem;
  }

  .card-item+div {
    margin-top: 2.375rem;
  }

  .card-item-img {
    width: 90vw;
    height: calc(0.8828 * 90vw);
  }

  .card-item-img.img1 {
    width: 90vw;
    height: calc(0.8828 * 90vw);
    margin: 0 auto;

    position: static;
  }

  .card-item-img.img2 {
    width: 90vw;
    height: calc(0.8828 * 90vw);
    margin: 0 auto;

    position: static;
  }

  .card-item-img img {
    width: 100%;
    height: 100%;
  }

  .card-item-title {
    font-size: 1.875rem;

    padding: 0 1.125rem;

    position: static;
  }

  .card-item-desc {
    font-size: 0.9375rem;

    padding: 0 1.125rem;
    margin-top: 0.9375rem;
  }
}
</style>