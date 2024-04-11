<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang='ts'>
const { resize } = useResize()
window.onresize = () => {
  resize()
}
resize()
</script>
<style scoped></style>
