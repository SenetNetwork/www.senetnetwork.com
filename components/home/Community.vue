<template>
  <section ref="panel" class="section">
    <div ref="topic" class="topic-title">Our Community</div>
    <div ref="canvas" class="topic-canvas">
      <div class="topic-img">
        <img src="@/assets/images/community-img.png" />
      </div>
      <img
        ref="imgPlay"
        class="img-play"
        src="@/assets/images/community-play.svg"
      />
      <img
        ref="imgEarn"
        class="img-earn"
        src="@/assets/images/community-earn.svg"
      />
      <img
        ref="imgAngle"
        class="img-angle"
        src="@/assets/images/community-angle.svg"
      />
      <img
        ref="imgArrow"
        class="img-arrow"
        src="@/assets/images/community-arrow.svg"
      />
      <img
        ref="imgStick"
        class="img-stick"
        src="@/assets/images/community-stick.svg"
      />
      <img
        ref="imgBlock"
        class="img-block"
        src="@/assets/images/community-block.svg"
      />
    </div>
    <div ref="contactWrap" class="contact-wrap">
      <ul class="contact-us">
        <li>
          <a ref="contact1" href="https://discord.com/" target="_blank">
            <img
              class="icon icon-discord"
              src="@/assets/images/icon-discord.svg"
            />
            <span class="text">/Discord</span>
            <img class="icon-arrow" src="@/assets/images/icon-arrow.svg" />
          </a>
        </li>
        <li>
          <a ref="contact2" href="https://twitter.com/" target="_blank">
            <img
              class="icon icon-twitter"
              src="@/assets/images/icon-twitter.svg"
            />
            <span class="text">/Twitter</span>
            <img class="icon-arrow" src="@/assets/images/icon-arrow.svg" />
          </a>
        </li>
      </ul>
      <ul class="contact-us">
        <li>
          <a ref="contact3" href="https://medium.com/" target="_blank">
            <img
              class="icon icon-medium"
              src="@/assets/images/icon-medium.svg"
            />
            <span class="text">/Medium</span>
            <img class="icon-arrow" src="@/assets/images/icon-arrow.svg" />
          </a>
        </li>
        <li>
          <a ref="contact4" href="https://mail.google.com/" target="_blank">
            <img class="icon icon-email" src="@/assets/images/icon-email.svg" />
            <span class="text">/Email</span>
            <img class="icon-arrow" src="@/assets/images/icon-arrow.svg" />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup>
// alternatively, you can also use it here
const { $gsap, $ScrollTrigger } = useNuxtApp()

const panel = ref()

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
        end: '+=100px 80%', // end after scrolling 300px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        markers: false,
      },
    }
  )
}

const contactWrap = ref()
const contact1 = ref()
const contact2 = ref()
const contact3 = ref()
const contact4 = ref()
function contactAnimate() {
  $gsap.from([contact1.value, contact2.value, contact3.value, contact4.value], {
    x: '-200px',
    opacity: 0,
    ease: 'power1.inOut',
    stagger: 0.3,
    scrollTrigger: {
      trigger: contactWrap.value,
      start: 'top bottom',
      end: '+=280px bottom',
      scrub: true,
      markers: false
    }
  })
}

const canvas = ref()
const imgPlay = ref()
const imgEarn = ref()
const imgAngle = ref()
const imgArrow = ref()
const imgStick = ref()
const imgBlock = ref()
function imgAnimate() {
  const tl = $gsap.timeline()
  tl.from(imgPlay.value, {
    yPercent: 30,
    opacity: 0,
    ease: 'power4.in',
    scale: 0.9,
  })
  .from(imgEarn.value, {
    yPercent: 30,
    opacity: 0,
    ease: 'power4.in',
    scale: 0.9,
  })
  .from(imgAngle.value, {
    x: 100,
    y: 50,
    opacity: 0,
    rotate: 360,
    duration: 2,
    ease: 'power1.inOut',
  }, '<0.5')
  .from(imgArrow.value, {
    yPercent: 30,
    opacity: 0,
    ease: 'power4.in',
    scale: 0.9,
  }, '<0.5')
  .from(imgStick.value, {
    yPercent: 30,
    xPercent: 50,
    rotate: 360,
    opacity: 0,
    // ease: 'power4.inOut',
    duration: 2,
    scale: 0.6,
  }, '<0.5')
  .from(imgBlock.value, {
    rotation: 360,
    xPercent: 100,
    opacity: 0,
    duration: 2, // how long the animation lasts
  })
}

onMounted(() => {
  textAnimate()
  contactAnimate()

  $ScrollTrigger.create({
    trigger: canvas.value,
    pin: false, // pin the trigger element while active
    start: 'top 80%', // when the top of the trigger hits the top of the viewport
    end: 'top 80%', // end after scrolling 300px beyond the start
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    // markers: true,
    onEnter: () => {
      imgAnimate()
    }
  })
})
</script>
<style scoped>
.section {
  background: var(--bg-gradient);
  padding-top: 0;
  padding-bottom: 68px;
  padding-left: 5vw;
  padding-right: 5vw;
}
.topic-title {
  font-family: var(--font-space-grotesk);
  font-style: normal;
  font-weight: 500;
  font-size: 100px;
  line-height: 120%;
  text-align: center;
  text-transform: uppercase;

  padding-top: 128px;
}
.topic-img {
  width: 100%;
  height: calc(2202 / 5358 * 90vw);
  margin-top: 55px;
  margin-left: auto;
  margin-right: auto;
}
.topic-img > img {
  width: 100%;
  height: 100%;
}

.contact-wrap {
  display: flex;
}
ul.contact-us {
  display: flex;

  margin-top: 18px;
  flex: 1;
}
ul.contact-us + ul {
  margin-left: 4px;
}
ul.contact-us li {
  flex: 1;
  padding: 12px;
  background-color: var(--black);
}
ul.contact-us li + li {
  margin-left: 4px;
}
ul.contact-us li > a {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
ul.contact-us li .icon {
  width: 100px;
  height: 100px;
}
ul.contact-us li .text {
  font-family: var(--font-work-sans);
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 140%;
  color: var(--white);
}
ul.contact-us li .icon-arrow {
  width: 34px;
  height: 34px;
}

.topic-canvas {
  position: relative;
}
.img-play {
  width: 29.411764705882355%;
  height: 29.972752043596728%;

  position: absolute;
  top: 2%;
  left: 1%;
}
.img-earn {
  width: 24.19047619047619%;
  height: 22.45367847411444%;

  position: absolute;
  top: 66%;
  left: 36.8%;
}
.img-angle {
  width: 8.284593837535013%;
  height: 31.659400544959126%;
  position: absolute;
  top: 49%;
  left: 0;
}
.img-arrow {
  width: 13.165266106442578%;
  height: 32.01634877384196%;
  position: absolute;
  top: 0;
  left: 32%;
}
.img-stick {
  width: 8.794957983193278%;
  height: 28.381471389645775%;
  position: absolute;
  top: 22%;
  left: 64.05%;
}
.img-block {
  width: 12.591596638655462%;
  height: 31.30517711171662%;
  position: absolute;
  bottom: 6%;
  left: 71%;
}

/* `sm` applies to x-small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .section {
    background: var(--bg-gradient);
    padding-top: 0;
    padding-bottom: 30px;
    padding-left: 1vw;
    padding-right: 1vw;
  }
  .topic-title {
    font-size: 40px;

    padding-top: 80px;
  }
  .topic-img {
    width: 100%;
    height: calc(2202 / 5358 * 98vw);
    margin-top: 15px;

    margin-left: auto;
    margin-right: auto;
  }
  .topic-img > img {
    width: 100%;
    height: 100%;
  }

  .contact-wrap {
    display: flex;
    flex-direction: column;
  }
  ul.contact-us {
    display: flex;

    margin-top: 14px;
  }
  ul.contact-us + ul {
    margin-left: 0;
    margin-top: 10px;
  }
  ul.contact-us li {
    flex: 1;
    padding: 12px;
    background-color: var(--black);
  }
  ul.contact-us li + li {
    margin-left: 4px;
  }
  ul.contact-us li > a {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  ul.contact-us li .icon {
    width: 40px;
    height: 40px;
  }
  ul.contact-us li .text {
    font-size: 15px;
  }
  ul.contact-us li .icon-arrow {
    width: 14px;
    height: 14px;
  }
}
</style>