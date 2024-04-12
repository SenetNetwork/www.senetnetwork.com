<template>
  <section ref="panel" class="p-8" md="px-30 py-15">
    <h2 ref="title">
      COMING SOON
    </h2>
    <div ref="cards" md="grid grid-cols-2 gap-row-15 gap-col-20 mt-20" class="card-wrap relative mt-8 grid grid-cols-1 gap-8">
      <div ref="card1" class="bg-white rounded-2 flex-col card">
        <img class="size-12" src="@img/icon-community.png" alt="Community">
        <p class="text-5.5 font-500 mt-6">
          Community
        </p>
        <p class="text-gray mt-2">
          Forge social connections with players across the global blockchain gaming community, united by
          shared gaming interests.
        </p>
      </div>
      <div ref="card2" class="bg-white rounded-2 card">
        <img class="size-12" src="@img/icon-voting.png" alt="IGO voting">
        <p class="text-5.5 font-500 mt-6">
          IGO voting
        </p>
        <p class="text-gray mt-2">
          Every player has a voice: Vote on the games and in-game tokens you want listed. Participate in
          private sales, initial offerings, and staking for mining rewards.
        </p>
      </div>
      <div ref="card3" class="bg-white rounded-2 card">
        <img class="size-12" src="@img/icon-card.png" alt="Credit card top-up">
        <p class="text-5.5 font-500 mt-6">
          Credit card top-up
        </p>
        <p class="text-gray mt-2">
          Earn crypto and cash by playing games with your Senet credit card. Look forward to the launch of
          offline gaming ATMs for real-world gameplay and cash access.
        </p>
      </div>
      <div ref="card4" class="bg-white rounded-2 card">
        <img class="size-12" src="@img/icon-simulator.png" alt="Blockchain version of game simulator">
        <p class="text-5.5 font-500 mt-6">
          Blockchain Gaming Engine
        </p>
        <p class="text-gray mt-2">
          You will be able to enjoy all games on the platform without any need for downloads, earning as you
          play. Furthermore, this system will be integrated into Senet's hardware facilities in the future.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang='ts'>
const { $gsap } = useNuxtApp()
const panel = ref()
const title = ref()
const card1 = ref()
const card2 = ref()
const card3 = ref()
const card4 = ref()
const animation = (els: HTMLElement | HTMLElement[], handle?: (opt: any) => void) => {
  const options = {
    yPercent: 30,
    opacity: 0,
    ease: 'power1.inOut',
    scale: 0.9,
    stagger: 0.5,
    scrollTrigger: {
      trigger: panel.value,
      pin: false, // pin the trigger element while active
      start: 'top 80%', // when the top of the trigger hits the top of the viewport
      end: 'top 50%', // end after scrolling 300px beyond the start
      scrub: 1.5 // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      // markers: true,
    }
  }
  if (handle) {
    handle(options)
  }
  $gsap.from(els, options)
}
onMounted(() => {
  animation(title.value, (options) => {
    options.scrollTrigger.scrub = 1
    options.scrollTrigger.start = 'top 90%'
    options.scrollTrigger.end = 'top 80%'
    options.ease = 'power4.in'
  })
  animation(card1.value, (options) => {
    options.x = '50%'
    options.y = '50%'
  })
  animation(card2.value, (options) => {
    options.x = '-50%'
    options.y = '50%'
  })
  animation(card3.value, (options) => {
    options.x = '50%'
    options.y = '-50%'
  })
  animation(card4.value, (options) => {
    options.x = '-50%'
    options.y = '-50%'
  })
})
</script>
<style scoped>
.card-wrap::before {
  content: '';
  position: absolute;
  left: 40%;
  top: 70%;
  width: 20%;
  padding-bottom: 20%;
  transform: translate(-50%, -50%);
  background: linear-gradient(140deg, #DAFD60 0%, #687D1D 100%);
  filter: blur(200px);
  z-index: -1;
}
.card{
  @apply py-6 px-8 lg-py-8;
}
</style>
