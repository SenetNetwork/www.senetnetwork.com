<template>
  <section ref="panel" class="flex-col py-8" md="py-10 h-80vh min-h-165 gap-10">
    <h2 class="mx-auto text-center px-8" md="w-60%">
      <p>Evolution of Game Trading</p>
    </h2>
    <div ref="swiperWrap" class="flex-center w-full mt-8 relative gap-4 px-8 mx-auto" md="w-40% gap-8 mt-10 hidden">
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
    <div ref="gridWrap" class="grow-1 hidden grid-wrap grid-cols-2 grid-rows-2 w-full items-center justify-items-center px-8" md="grid">
      <img ref="evolution2" :src="img2" alt="">
      <img ref="evolution3" :src="img3" alt="">
      <img ref="evolution1" :src="img1" alt="">
      <img ref="evolution4" :src="img4" alt="">
    </div>
  </section>
</template>

<script setup lang='ts'>
import { Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import img1 from '@img/evolution-1.png'
import img2 from '@img/evolution-2.png'
import img3 from '@img/evolution-3.png'
import img4 from '@img/evolution-4.png'

const imgs = [img1, img2, img3, img4]
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
const gridWrap = ref()
const evolution1 = ref()
const evolution2 = ref()
const evolution3 = ref()
const evolution4 = ref()
let timer:NodeJS.Timeout|null = null
let tl :gsap.core.Timeline|null = null
const startAnimation = () => {
  tl = $gsap.timeline()
  tl.eventCallback('onComplete', () => {
    timer = setTimeout(() => {
      tl!.restart()
    }, 5000)
  })

  const options = {
    opacity: 0,
    ease: 'power1.in',
    scale: 0.9,
    delay: 1
  }
  tl.from(evolution1.value, options)
    .from(evolution2.value, options)
    .from(evolution3.value, options)
    .from(evolution4.value, options)
}
const stopAnimation = () => {
  timer && clearTimeout(timer)
  tl?.clear()
  tl = null
}
const { stop } = useIntersectionObserver(gridWrap, ([{ isIntersecting }]) => {
  isIntersecting ? startAnimation() : stopAnimation()
})
onUnmounted(() => {
  stop()
  stopAnimation()
})
</script>
<style scoped>
.grid-wrap img{
  @apply w-80% lg-w-60%;
}
</style>
