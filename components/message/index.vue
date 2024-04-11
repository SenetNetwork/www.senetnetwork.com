<template>
  <Transition name="message" appear @before-leave="emits('close', id)" @after-leave="emits('destroy')">
    <div
      v-show="visible"
      ref="messageRef"
      class="msg-box"
      p="y3"
      flex="~ v-center"
      :style="{
        top: `${offset}px`,
      }"
      @mousemove="stop"
      @mouseout="start"
    >
      <div class="flex-1 px-8" flex="~ items-center">
        <img v-if="icon" :src="icon" class="size-5 flex-0" alt="">
        <IconsSuccessful v-else class="size-5 shrink-0" />
        <div class="ml-2 flex-1">
          {{ msg }}
        </div>
      </div>
      <div v-if="showClose" class="mr-4 size-6 cursor-pointer" i-carbon-close @click="close" />
    </div>
  </Transition>
</template>

<script setup lang='ts'>
const {
  offset = 20,
  color = '#000000',
  borderColor = '#DAFD6080',
  backgroundColor = '#DAFD6050',
  showClose = false,
  duration = 3000
} = defineProps<{
  msg: string
  icon?: string
  offset?: number
  id: string
  color?: string
  borderColor?: string
  backgroundColor?: string
  showClose?: boolean
  duration?: number
}>()
const emits = defineEmits<{ destroy: []; close: [string] }>()
const messageRef = ref()
const visible = ref(true)
const height = computed<number>(() => messageRef.value?.getBoundingClientRect().height ?? 0)
const bottom = computed(() => height.value + offset)
const { start, stop } = useTimeoutFn(close, duration)

function close () {
  visible.value = false
  stop()
}
onMounted(() => {
  start()
})
defineExpose({
  visible,
  bottom,
  close
})
</script>

<style scoped>
.msg-box {
  position: fixed;
  left: 50%;
  top: 1.25rem;
  border-radius: 1rem;
  border-width: 1px;
  border-style: solid;
  z-index: 10003;
  transform: translateX(-50%);
  ;
  transition: all .4s;
  color: v-bind(color);
  border-color: v-bind(borderColor);
  background-color: #fff;
  overflow: hidden;
  max-width: 80%;
  word-break: break-word;
}

.msg-box::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: v-bind(backgroundColor);
  z-index: -1;
}

.message-enter-from,
.message-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-100%);
}
</style>
