<template>
  <section ref="panel" class="panel">
    <div class="topic-title">Roadmap</div>
    <div class="topic-body">
      <div class="progress"></div>
      <div class="card-wrap">
        <div class="card-item">
          <div class="card-item-img">
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
          <div class="card-item-img">
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
    <div style="height: 2200px"></div>
  </section>
</template>
<script setup>
// alternatively, you can also use it here
const { $gsap } = useNuxtApp()
const panel = ref()
onMounted(() => {
  $gsap.to('.card-item', {
    xPercent: -100 * (2 - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: '.card-wrap',
      start: 'top center',
      end: 'bottom center',
      pin: false,
      scrub: 1,
      markers: true,
      // base vertical scrolling on how wide the container is so it feels more natural.
    },
  })
})
</script>
<style scoped>
.panel {
  padding-top: 165px;
  padding-left: 100px;
  padding-bottom: 126px;
}
.topic-title {
  font-family: var(--font-space-grotesk);
  font-style: normal;
  font-weight: 500;
  font-size: 100px;
  line-height: 120%;
  text-transform: uppercase;

  margin-left: 36px;
}
.topic-body {
  margin-top: 38px;

  max-width: 1830px;
  overflow: hidden;
}

.progress {
  margin-left: 36px;
}
.card-wrap {
  width: 100vw;
  margin-top: 76px;

  display: flex;
}

.card-item {
  border: 1px solid var(--black);
  width: 60vw;
  padding: 50px;

  display: flex;

  position: relative;
  padding-top: 170px;
}
.card-item-img {
  flex: 1;
  order: 2;

  display: flex;
  align-items: flex-end;
}
.card-item-img img {
  width: 430px;
  height: auto;
}
.card-item-title {
  font-family: var(--font-work-sans);
  font-style: normal;
  font-weight: 500;
  font-size: 90px;
  line-height: 120%;
  text-transform: uppercase;

  position: absolute;
  top: 50px;
  left: 50px;
}
.card-item-desc {
  font-family: var(--font-work-sans);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 170%;

  margin-top: 54px;

  flex: 1;
  order: 1;
}
</style>