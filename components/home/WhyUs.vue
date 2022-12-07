<template>
  <div ref="panel" class="section">
    <div class="topic-wrap">
      <img class="topic-animate" src="@/assets/images/whyus-animate1.png" />
      <div class="topic-left"></div>
      <div class="topic-right">
        <div ref="topic" class="topic-title">WHY US</div>
        <div ref="topicDesc" class="topic-desc">
          an authentic decentralized game network with a healthy economic
          system.
        </div>
        <div class="divider-line">
          <div class="divider-label"></div>
        </div>
      </div>
    </div>
    <div class="row-list">
      <!-- <img class="row-animate" src="@/assets/images/whyus-animate2.png" /> -->
      <div class="row-container">
        <div class="row">
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
        <div class="row">
          <div class="row-item left">
            <div class="row-title">Intelligent driven</div>
            <div class="row-desc">
              Introduce advertisers and big data recommendation algorithms,
              increase monetization channels, realize the "triangle balance" of
              the positive economic cycle, and increase users· engagement.
              Meanwhile, Use Al governance economic model to avoid the risk of
              "death spiral" in time.
            </div>
          </div>
          <div class="row-item right">
            <img src="@/assets/images/whyus-img2.png" />
          </div>
        </div>
        <div class="row">
          <div class="row-item left">
            <div class="row-title">User Friendly</div>
            <div class="row-desc">
              In SENET, uses can easily register in game platform or Wallet
              through common methods such as Google or WeChat. SENET wallet
              integrates MPC function, which is safe and convenient without
              keys.
            </div>
          </div>
          <div class="row-item right">
            <img src="@/assets/images/whyus-img3.png" />
          </div>
        </div>
        <div class="row">
          <div class="row-item left">
            <div class="row-title">Agile development</div>
            <div class="row-desc">
              Middleware RHINO BIRD is provided to reduce the difficulty of
              blockchain game development, which will minimize the modification
              of existing games and effectively lower the threshold of technic
              and paying in blockchain games. At the same time, the IGO platform
              will solve the problems of pre-sale assets and financing before
              the game goes on line.
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
const { $gsap } = useNuxtApp()
const panel = ref()

const topic = ref()
const topicDesc = ref()
function textAnimate() {
  $gsap.from(
    [topic.value, topicDesc.value],
    {
      yPercent: 100,
      opacity: 0,
      ease: 'power4.in',
      scale: 0.9,
      scrollTrigger: {
        trigger: panel.value,
        pin: false, // pin the trigger element while active
        start: 'top center', // when the top of the trigger hits the top of the viewport
        end: '+=100px', // end after scrolling 300px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        markers: false,
      },
    })
}

function rowTextAnimate() {
  $gsap.from(
    '.row .row-title',
    {
      xPercent: -100,
      opacity: 0,
      ease: 'power4.in',
      scale: 0.9,
      scrollTrigger: {
        trigger: panel.value,
        pin: false, // pin the trigger element while active
        start: 'top top', // when the top of the trigger hits the top of the viewport
        end: '+=100px', // end after scrolling 300px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        markers: false,
      },
    }
  )
  $gsap.from('.row .row-desc', {
    yPercent: 100, opacity: 0,
    scrollTrigger: {
      trigger: panel.value,
      pin: false, // pin the trigger element while active
      start: 'top top', // when the top of the trigger hits the top of the viewport
      end: '+=100px', // end after scrolling 300px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      markers: false,
    },
  })
}

onMounted(() => {
  textAnimate()
  rowTextAnimate()
})
</script>
<style scoped>
.section {
  background-color: var(--black);
  color: var(--white);

  position: relative;
  z-index: 1;
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
  padding-top: 80px;
  padding-bottom: 200px;

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
}

.row + div {
  margin-top: 30px;
}
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
  width: calc(0.6667 * 100vw * 0.9);
  height: calc(0.6667 * 100vw * 0.9 * 0.5625);
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
    padding-bottom: 80px;
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
    display: none;
  }
  .row-item > img {
    width: 90%;
    min-height: auto;
    height: 100%;
    margin: 0 auto;

    margin-top: 24px;
  }
}
</style>