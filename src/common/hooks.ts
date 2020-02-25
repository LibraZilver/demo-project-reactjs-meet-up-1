import { useRef, useEffect } from 'react'

type IntervalFunction = () => unknown | void
export const useInterval = (callback: IntervalFunction, delay: number) => {
  const savedCallback = useRef<IntervalFunction | null>(null)
  useEffect(() => {
    savedCallback.current = callback
  })
  useEffect(() => {
    function tick() {
      if (savedCallback.current !== null) {
        savedCallback.current()
      }
    }
    const id = setInterval(tick, delay)
    return () => clearInterval(id)
  }, [delay])
}
