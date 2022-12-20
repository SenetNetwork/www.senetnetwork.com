<template>
  <div id="why-us" ref="panel" class="section">
    <div class="topic-wrap">
      <img
        ref="topicAnimate"
        class="topic-animate"
        src="@/assets/images/whyus-animate1.png"
      />
      <div class="topic-left"></div>
      <div class="topic-right">
        <div ref="topic" class="topic-title">WHY US</div>
        <div ref="topicDesc" class="topic-desc">
          an authentic decentralized game network with a healthy economic
          system.
        </div>
        <div ref="divider" class="divider-line">
          <div class="divider-label"></div>
        </div>
      </div>
    </div>
    <div class="row-list">
      <!-- <img class="row-animate" src="@/assets/images/whyus-animate2.png" /> -->
      <div class="row-container">
        <div ref="row1" class="row">
          <div class="row-item left">
            <div class="row-title">High performance & compliance</div>
            <div class="row-desc">
              By assembling private and public blockchain functions and linking
              with middleware, TPS is increased and GAS is decreased.
              Scalability is also ensured through its multi­chain structure,
              enabling efficient and smooth transfer of assets and data in a
              multi-node, multi-chain structure. At the same time, it is
              guaranteed that the game meets the publishing requirements of
              mainstream stores.
            </div>
          </div>
          <div class="row-item right">
            <img src="@/assets/images/whyus-img1.png" />
          </div>
        </div>
        <div ref="row2" class="row">
          <div class="row-item left">
            <div class="row-title">Intelligent driven</div>
            <div class="row-desc">
              Introduce advertisers and big data recommendation algorithms,
              increase monetization channels, realize the "triangle balance" of
              the positive economic cycle, and increase users engagement.
              Meanwhile, Use Al governance economic model to avoid the risk of a
              "death spiral" in time.
            </div>
          </div>
          <div class="row-item right">
            <img src="@/assets/images/whyus-img2.png" />
          </div>
        </div>
        <div ref="row3" class="row">
          <div class="row-item left">
            <div class="row-title">User Friendly</div>
            <div class="row-desc">
              In SENET, users can easily register on a game platform or Wallet
              through common methods such as Google or WeChat. SENET wallet
              integrates MPC function, which is safe and convenient without
              keys.
            </div>
          </div>
          <div class="row-item right">
            <img src="@/assets/images/whyus-img3.png" />
          </div>
        </div>
        <div ref="row4" class="row">
          <div class="row-item left">
            <div class="row-title">Agile development</div>
            <div class="row-desc">
              Middleware RHINO BIRD is provided to reduce the difficulty of
              blockchain game development, which will minimize the modification
              of existing games and effectively lower the threshold of technical
              and paying in blockchain games. At the same time, the IGO platform
              will solve the problems of pre-sale assets and financing before
              the game goes online.
            </div>
          </div>
          <div class="row-item right">
            <img src="@/assets/images/whyus-img4.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// alternatively, you can also use it here
const { $gsap, $ScrollTrigger } = useNuxtApp()
const panel = ref()

const topic = ref()
const topicDesc = ref()
const divider = ref()
const topicAnimate = ref()

function rotateAnimate() {
  $gsap.from(topicAnimate.value, {
    xPercent: -100,
    duration: 2,
    rotate: 360,
    scale: 0.8,
    ease: "slow(0.7, 0.7, false)",
    repeat: -1,
    yoyo: true
  })
}

function textAnimate() {
  $gsap.from(topic.value, {
    yPercent: 30,
    opacity: 0,
    ease: 'power4.in',
    scale: 0.9,
    scrollTrigger: {
      trigger: panel.value,
      pin: false, // pin the trigger element while active
      start: 'top 80%', // when the top of the trigger hits the top of the viewport
      end: '+=50px 80%', // end after scrolling 300px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      markers: false,
    },
  })
  $gsap.from(
    [topicDesc.value, divider.value],
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
        end: '30% 80%', // end after scrolling 300px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        markers: false,
      },
    })
}

function rowTextAnimate() {
  $gsap.utils.toArray('#why-us .row .row-title').forEach((el, i) => {
    $gsap.from(
      el,
      {
        yPercent: 30,
        opacity: 0,
        ease: 'power4.in',
        scale: 0.9,
        scrollTrigger: {
          trigger: el,
          pin: false, // pin the trigger element while active
          start: 'top 80%', // when the top of the trigger hits the top of the viewport
          end: '+=50px 80%', // end after scrolling 300px beyond the start
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          markers: false,
        },
      }
    )
  })
  $gsap.utils.toArray('#why-us .row .row-desc').forEach((el, i) => {
    $gsap.from(
      el,
      {
        yPercent: 30,
        opacity: 0,
        ease: 'power4.in',
        scale: 0.9,
        scrollTrigger: {
          trigger: el,
          pin: false, // pin the trigger element while active
          start: 'top 80%', // when the top of the trigger hits the top of the viewport
          end: '+=50px 80%', // end after scrolling 300px beyond the start
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          markers: false,
        },
      }
    )
  })
}

const row1 = ref()
const row2 = ref()
const row3 = ref()
const row4 = ref()
function pinAnimate() {
  const list = [row1.value, row2.value, row3.value, row4.value]
  list.forEach((panel, i) => {
    const end = i === 3 ? 'top top' : 'bottom top'
    $ScrollTrigger.create({
      trigger: panel,
      start: 'top top',
      end,
      pin: true,
      pinSpacing: false,
      markers: false
    })
  })
}

onMounted(() => {
  rotateAnimate()
  textAnimate()
  rowTextAnimate()
  pinAnimate()
})
</script>
<style scoped>
.section {
  background-color: var(--black);
  color: var(--white);

  position: relative;
  z-index: 1;
  padding-bottom: 60px;
}
.topic-wrap {
  display: flex;
  padding-top: 60px;

  position: relative;
}
.topic-animate {
  width: 400px;

  position: absolute;
  top: 188px;
  left: 70px;
  z-index: 1;
}
.topic-left {
  flex: 1;
}
.topic-right {
  flex: 2;

  position: relative;
  padding-top: 30px;
  padding-bottom: 30px;
}
.topic-title {
  font-family: var(--font-work-sans);
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: -0.02em;
}
.topic-desc {
  font-family: var(--font-space-grotesk);
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 130%;
  text-transform: uppercase;

  margin-top: 30px;
  width: 100%;
  min-height: 390px;
}

.divider-line {
  border-top: 1px solid #d2d2d2;

  position: absolute;
  width: 100%;
  right: -38px;
  bottom: 0;
}
.divider-label {
  width: 251px;
  height: 35px;
  background: #dafd60;

  position: absolute;
  top: -1.0625rem;
  right: 0;
}

.row-list {
  padding-top: 60px;
  position: relative;
}
.row-animate {
  width: 500px;
  position: absolute;
  top: 16%;
  left: -330px;
}
.row {
  display: flex;
  background-color: var(--black);
  color: var(--white);
  padding-top: 15px;
  padding-bottom: 15px;
}

/* .row + div {
  margin-top: 30px;
} */
.row-item {
}
.row-item.left {
  flex: 1;
}
.row-item.right {
  flex: 2;
}
.row-title {
  font-family: var(--font-space-grotesk);
  font-style: normal;
  font-weight: 500;
  font-size: 44px;
  line-height: 120%;
  text-transform: uppercase;

  width: 80%;
  margin: 0 auto;
  margin-top: 35px;
}
.row-desc {
  font-family: var(--font-work-sans);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 170%;
  width: 80%;
  margin: 0 auto;

  margin-top: 35px;
}
.row-item > img {
  width: calc(2 / 3 * 100vw * 0.9);
  height: calc(2 / 3 * 100vw * 0.9 * 0.714);
}

/* `sm` applies to x-small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .section {
    padding-top: 14px;
    padding-bottom: 14px;
  }
  .topic-wrap {
    display: block;
  }
  .topic-animate {
    width: 200px;

    position: absolute;
    top: 0;
    left: 0;
  }
  .topic-left {
    display: none;
  }
  .topic-right {
    flex: auto;

    position: relative;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .topic-title {
    font-size: 14px;
    line-height: 16px;
    text-align: center;
  }
  .topic-desc {
    font-size: 30px;
    line-height: 130%;

    margin-top: 23px;
    text-align: center;
    width: 96%;
    margin-left: auto;
    margin-right: auto;
    min-height: 196px;
  }

  .divider-line {
    border-top: 1px solid #d2d2d2;

    position: absolute;
    width: 100%;
    right: 0;
    bottom: 0;
  }
  .divider-label {
    width: 226px;
    height: 35px;
    background: #dafd60;

    position: absolute;
    top: -1.0625rem;
    right: -113px;
  }

  .row-list {
    padding-top: 32px;
    padding-bottom: 32px;
  }
  .row-animate {
    display: none;
  }
  .row {
    display: block;
  }
  .row + div {
    margin-top: 0;
  }
  .row-item {
  }
  .row-item.left {
    flex: flex;
  }
  .row-item.right {
    display: flex;
  }
  .row-title {
    font-size: 24px;

    width: 90%;
    margin: 0 auto;
    padding-top: 48px;
  }
  .row-desc {
    font-family: var(--font-work-sans);
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 170%;
    display: none;
  }
  .row-item > img {
    width: calc(90vw);
    height: calc(90vw * 0.714);
    margin: 0 auto;

    margin-top: 24px;
  }
}
</style>