import { createMessage } from '@/components/message/message'

interface Base {
  duration?: number
  showClose?: boolean
  color?: string
  borderColor?: string
  backgroundColor?: string
  icon?: string
}
interface UseMessageOptions extends Base {
  success?: Base
  error?: Base
}
export function useMessage (options?: UseMessageOptions) {
  const success = (msg: string, opt?: Base) => {
    const { success, ...rest } = options ?? {}
    const config = {
      msg,
      ...rest,
      ...success,
      ...opt
    }
    return createMessage(config)
  }
  const error = (msg: string, opt?: Base) => {
    const { error, ...rest } = options ?? {}
    const config = {
      msg,
      color: '#ff0000',
      borderColor: '#ff000050',
      backgroundColor: '#ff000010',
      ...rest,
      ...error,
      ...opt
    }
    return createMessage(config)
  }
  return {
    success,
    error
  }
}
