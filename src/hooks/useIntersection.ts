import { RefObject, useEffect } from 'react'

const listenerCallbacks = new WeakMap()

let observer: IntersectionObserver

function handleIntersections(entries: IntersectionObserverEntry[]) {
  entries.forEach((entry) => {
    if (listenerCallbacks.has(entry.target)) {
      const cb = listenerCallbacks.get(entry.target)

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target)
        listenerCallbacks.delete(entry.target)
        cb()
      }
    }
  })
}

function getIntersectionObserver(options: IntersectionObserverInit) {
  if (observer === undefined) {
    observer = new IntersectionObserver(handleIntersections, options)
  }
  return observer
}

const useIntersection = (
  ref: RefObject<Element> | false,
  callback: VoidFunction,
  options = {
    rootMargin: '0px',
    threshold: 0,
    root: null,
  }
) => {
  useEffect(() => {
    if (!ref || !ref.current) {
      return
    }

    const target = ref.current
    const ob = getIntersectionObserver(options)

    listenerCallbacks.set(target, callback)
    ob.observe(target)

    return () => {
      listenerCallbacks.delete(target)
      ob.unobserve(target)
    }
    // Empty array ensures that effect is only run on mount and unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useIntersection
