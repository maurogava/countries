import { FC, useRef, useState } from 'react'

import useIntersection from 'hooks/useIntersection'

type IProps = {
  src: string
  width?: string
  height?: string
  alt?: string
  preload?: boolean
  className?: string
}

const Image: FC<IProps> = ({
  alt = '',
  src,
  className,
  width,
  height,
  preload = false,
}) => {
  const ref = useRef<HTMLImageElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useIntersection(!preload && ref, () => setIsLoaded(true))

  return (
    <img
      alt={alt}
      ref={ref}
      {...((isLoaded || preload) && { src })}
      {...(className && { className })}
      {...(width && { width })}
      {...(height && { height })}
    />
  )
}
export default Image
