<template>
  <section ref="panel" class="px-57 pb-55 mt-40">
    <p class="text-15" ref="title"><strong>COMING SOON</strong></p>
    <div grid="~ cols-2 gap-row-12 gap-col-31" class="card-wrap relative mt-16" ref="cards">
      <div class="bg-white rounded-2 py-8 px-10 flex-col" ref="card1">
        <img class="size-15" src="@img/icon-community.png" alt="Community">
        <p class="text-5.5 font-500 mt-12">Community</p>
        <p class="text-gray mt-4">
          We will create a community about the web3 game world for players, increase interaction between players, and
          bring more fun games to our users
        </p>
      </div>
      <div class="bg-white rounded-2 py-8 px-10" ref="card2">
        <img class="size-15" src="@img/icon-voting.png" alt="IGO voting">
        <p class="text-5.5 font-500 mt-12">IGO voting</p>
        <p class="text-gray mt-4">Each player can vote to promote their favorite games so that more players can join the
          game.</p>
      </div>
      <div class="bg-white rounded-2 py-8 px-10" ref="card3">
        <img class="size-15" src="@img/icon-card.png" alt="Credit card top-up">
        <p class="text-5.5 font-500 mt-12">Credit card top-up</p>
        <p class="text-gray mt-4">You can use a credit card to recharge and cash out, making payment more free,
          convenient and fast. Meet the
          ways players need to recharge.</p>
      </div>
      <div class="bg-white rounded-2 py-8 px-10" ref="card4">
        <img class="size-15" src="@img/icon-simulator.png" alt="Blockchain version of game simulator">
        <p class="text-5.5 font-500 mt-12">Blockchain version of game simulator</p>
        <p class="text-gray mt-4">A game simulator for developing and researching blockchain games. More compatible
          games, better services for
          games, and enhanced user experience.</p>
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
    stagger: .5,
    scrollTrigger: {
      trigger: panel.value,
      pin: false, // pin the trigger element while active
      start: 'top 70%', // when the top of the trigger hits the top of the viewport
      end: '30% 35%', // end after scrolling 300px beyond the start
      scrub: 1.5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      // markers: true,
    },
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
    options.x = '50%';
    options.y = '50%';
  })
  animation(card2.value, (options) => {
    options.x = '-50%';
    options.y = '50%';
  })
  animation(card3.value, (options) => {
    options.x = '50%';
    options.y = '-50%';
  })
  animation(card4.value, (options) => {
    options.x = '-50%';
    options.y = '-50%';
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
</style>