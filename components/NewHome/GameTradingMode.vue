<template>
  <section ref="panel" class="flex-col items-center  py-8" md="py-15">
    <h2 ref="title" class="family-medium text-center px-8" md="w-60%">
      An ever-evolving way to trade games
    </h2>
    <div ref="imgRef" class="flex-center w-full mt-8 relative gap-4 px-8" md="w-40% gap-8 mt-10">
      <div class="swiper-prev-button cursor-pointer size-6 shrink-0" md="size-8">
        <div v-if="showPreButton" class="rounded-full bg-#00000010 p-2 opacity-50">
          <IconsArrowLeft size-2 md="size-4" />
        </div>
      </div>
      <swiper v-bind="swiperOpts" @slide-change="onSlideChange">
        <swiper-slide v-for="img, index in imgs" :key="index">
          <div class="flex-center">
            <img
              ref="img"
              class="size-80 object-contain"
              md="size-120"
              :src="img"
              alt="An ever-evolving way to trade games"
            >
          </div>
        </swiper-slide>
      </swiper>
      <div
        class="swiper-pagination"
        style="--swiper-pagination-color:var(--primary-color);--swiper-pagination-bottom:-2rem;"
      />

      <div class="swiper-next-button cursor-pointer size-6 shrink-0" md="size-8">
        <div v-if="showNextButton" class="rounded-full bg-#00000010 p-2 opacity-50">
          <IconsArrowRight class="size-2" md="size-4" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang='ts'>
import { Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import img1 from '@img/game-trading-1.png'
import img2 from '@img/game-trading-2.png'
import img3 from '@img/game-trading-3.png'
import img4 from '@img/game-trading-4.png'
import img5 from '@img/game-trading-5.png'
import img6 from '@img/game-trading-6.png'

const imgs = [img1, img2, img3, img4, img5, img6]
const swiperOpts = {
  modules: [Pagination, Navigation],
  slidesPerView: 1,
  autoplay: true,
  autoHeight: true,
  allowSlidePrev: true,
  allowSlideNext: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-next-button',
    prevEl: '.swiper-prev-button'
  }
}
const showPreButton = ref(false)
const showNextButton = ref(true)
const onSlideChange = (e: any) => {
  showPreButton.value = e.activeIndex > 0
  showNextButton.value = e.activeIndex < imgs.length - 1
}
const { $gsap } = useNuxtApp()
const panel = ref()
const imgRef = ref()
const title = ref()
const animation = (els: HTMLElement | HTMLElement[], handle?: (opt: any) => void) => {
  const options = {
    yPercent: 30,
    opacity: 0,
    ease: 'power4.in',
    scale: 0.9,
    stagger: 0.5,
    scrollTrigger: {
      trigger: panel.value,
      pin: false, // pin the trigger element while active
      start: 'top 70%', // when the top of the trigger hits the top of the viewport
      end: '50% 80%', // end after scrolling 300px beyond the start
      scrub: 1 // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      // markers: true,
    }
  }
  if (handle) {
    handle(options)
  }
  $gsap.from(els, options)
}
onMounted(() => {
  animation(title.value)
  animation(imgRef.value)
})
</script>
<style scoped lang='less'></style>
