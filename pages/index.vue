<template>
  <div class="overflow-hidden">
    <NewHomeExplore />
    <NewHomeOneStop />
    <NewHomeGameTrading />
    <div class="bg">
      <NewHomeGameAsset />
      <NewHomeGameNft />
    </div>
    <NewHomeGameMission />
    <NewHomeComingSoon />
    <NewHomeSolution />
    <NewHomeGameTradingEvolution />
  </div>
</template>
<script lang="ts" setup>

// onMounted(() => {
//   document.body.style.overflowX = 'hidden'
//   document.body.style.overflowY = 'scroll'
// })
// onUnmounted(() => {
//   document.body.style.overflow = 'unset'
// })
</script>
<style scoped>
.bg {
  background: linear-gradient(180deg, #F0FFE3 0%, rgba(202, 233, 255, .3) 40%, rgba(250, 251, 243, 0) 100%);
}
</style>
