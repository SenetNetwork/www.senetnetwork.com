<template>
  <section ref="panel" class="section">
    <div class="topic-title">Our Community</div>
    <div class="topic-img">
      <img src="@/assets/images/community-img.png" />
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
const { $gsap } = useNuxtApp()

const panel = ref()

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
      end: '+=260px bottom',
      scrub: true,
      markers: false
    }
  })
}

onMounted(() => {
  contactAnimate()
})
</script>
<style scoped>
.section {
  background: var(--bg-gradient);
  padding-top: 0;
  padding-bottom: 68px;
  padding-left: 86px;
  padding-right: 86px;
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
  width: calc(0.88 * 100vw);
  height: calc(0.9 * 100vw * 0.406);
  margin-top: 55px;
  margin-left: auto;
  margin-right: auto;
}
.topic-img > img {
  width: 100%;
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
/* `sm` applies to x-small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .section {
    background: var(--bg-gradient);
    padding-top: 0;
    padding-bottom: 30px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .topic-title {
    font-size: 40px;

    padding-top: 80px;
  }
  .topic-img {
    margin-top: 15px;
  }
  .topic-img > img {
    width: 100%;
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