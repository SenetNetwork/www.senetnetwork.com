export const useResize = () => {
  const resize = (() => {
    const designWidth = 1920
    const minWidth = 1440
    return () => {
      const clientWidth = document.documentElement.clientWidth
      if (clientWidth < minWidth) {
        return
      }
      const fontSize = (clientWidth / designWidth) * 16
      document.documentElement.style.fontSize = fontSize + 'px'
    }
  })()
  // const event = new Event('resize')
  // window.dispatchEvent(event)
  return { resize }
}
