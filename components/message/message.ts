import { createVNode, render } from 'vue'
import Message from './index.vue'

const getId = (() => {
  let id = 0
  return () => id++
})()
const instances = shallowReactive<any[]>([])

function getOffset () {
  instances.forEach(({ props }: any, index: number) => {
    if (index === 0) {
      props.offset = 20
    } else {
      props.offset = instances[index - 1].vm.exposed!.bottom.value + 20
    }
  })
}

function closeMessage (instance: any) {
  const index = instances.indexOf(instance)
  if (index === -1) { return }

  instances.splice(index, 1)
  instance.handler.close()
  getOffset()
}

export function createMessage (options: any) {
  const appendTo = document.body
  const container = document.createElement('div')
  const id = `message_${getId()}`
  const props = {
    ...options,
    id,
    onClose (id: string) {
      closeMessage(
        instances.find((item: any) => item.id === id)
      )
    },
    onDestroy () {
      render(null, container)
    },
    offset:
      instances.length > 0
        ? instances.at(-1).vm.exposed!.bottom.value + 20
        : 20
  }

  const vNode = createVNode(Message, props)
  render(vNode, container)
  appendTo.appendChild(container.firstElementChild!)
  const vm = vNode.component!

  const instance = {
    id,
    vNode,
    vm,
    props: vNode.component!.props,
    handler: {
      close () {
        vm.exposed!.visible.value = false
      }
    }
  }
  instances.push(instance)
  return instance.handler
}
