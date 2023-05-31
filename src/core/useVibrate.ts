import { useRef } from 'react'
const useVibrate = () => {
  const flag = useRef(false)

  const supportsVibrate = 'vibrate' in window.navigator;
  if(!supportsVibrate) {
    return { vibrate: () => {} }
  }
  function vibrate(args?: number | number[]) {
    if(args) {
      console.log(args)
      window.navigator.vibrate(args)
    }
    if(flag.current) {
      window.navigator.vibrate(30)
    } else {
      window.navigator.vibrate([50,5,10])
    }
    flag.current = !flag.current
  }

  return {
    vibrate
  }
}

export default useVibrate
