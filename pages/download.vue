<template>
  <div class="bg-[url(@img/bg-explore.png)] bg-no-repeat bg-cover h-full  box-border">
    <Header />
    <div class="flex-col items-center m-x-auto px-8" md="max-w-80% mt-12">
      <p class="text-6 text-center family-medium" sm="text-10 line-height-10" lg="text-12 line-height-12" xl="text-16 line-height-16">
        Best Choice for Exploring and Trading in Blockchain Games.
      </p>
      <p lg="max-w-60%" md=" max-w-70%" sm="max-w-80%  text-5" class="text-center mt-4.5">
        Access and invest in all GameFi-related projects with just one app. Available via the App Store and Google Play Store.
      </p>
      <div class="mt-4 flex items-center gap-8" sm="mt-10" lg="gap-30 ">
        <img
          src="@img/google_play.png"
          class="w-30 cursor-pointer"
          sm="w-40"
          md="w-67"
          alt=""
          @click="android"
        >
        <img
          src="@img/appstore.png"
          class="w-30 cursor-pointer"
          sm="w-40"
          md="w-67"
          alt=""
          @click="ios"
        >
      </div>
    </div>
    <div class="mt-10 justify-center hidden" lg="flex" xl="gap-10">
      <img v-for="img in phoneImgs" :key="img" :src="img" alt="" class="w-60">
    </div>
    <div class="flex justify-center mt-4" sm="mt-10" lg="hidden">
      <div class=" flex-center w-full relative px-8" sm="w-60%">
        <div class="swiper-prev-button cursor-pointer size-8 shrink-0">
          <div v-if="showPreButton" class="rounded-full bg-#00000010 p-2 opacity-50">
            <IconsArrowLeft size-4 />
          </div>
        </div>
        <swiper v-bind="swiperOpts" @slide-change="onSlideChange">
          <swiper-slide v-for="img, index in phoneImgs" :key="index">
            <div class="flex-center">
              <img
                class="size-100 object-contain"
                sm="size-120"
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
        <div class="swiper-next-button cursor-pointer size-8 shrink-0">
          <div v-if="showNextButton" class="rounded-full bg-#00000010 p-2 opacity-50">
            <IconsArrowRight class="size-4" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import phone1 from '@img/explore-1.png'
import phone2 from '@img/explore-2.png'
import phone3 from '@img/explore-3.png'
import phone4 from '@img/explore-4.png'
import 'swiper/css'
import 'swiper/css/pagination'

const phoneImgs = [phone1, phone2, phone3, phone4]
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
  showNextButton.value = e.activeIndex < phoneImgs.length - 1
}

// onMounted(() => {
//   document.body.style.overflowX = 'hidden'
//   document.body.style.overflowY = 'auto'
// })
// onUnmounted(() => {
//   document.body.style.overflow = 'unset'
// })
definePageMeta({
  layout: false
})
const { success } = useMessage()
const ua = navigator.userAgent
const isIos = ua.match(/iPhone|iPad|Mac/) !== null
const isAndroid = ua.match(/Android|Linux/) !== null
const isPc = ua.includes('Windows')
const pc = () => {
  if (!isPc) { return }
  window.open('https://play.google.com/store/apps')
}
const android = () => {
  return success('Coming soon')
  // if (isPc) {
  //   return pc()
  // }
  // if (!isAndroid) { return }
  // const packageName = 'com.senetnetwork.wallet'
  // window.location.href = `http://play.google.com/store/apps/details?id=${packageName}`
}
const ios = () => {
  return success('Coming soon')
  // if (!isIos) { return }
  // window.location.href = 'https://itunes.apple.com/app/id0000000?mt=8'
}
</script>
<style scoped>

</style>
