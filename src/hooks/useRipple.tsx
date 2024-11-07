import { useState, useCallback, useEffect, useMemo } from 'react'

interface RippleType {
  x: number
  y: number
  id: number
  color: string
}

const RIPPLE_ID = 'ripple-container'

export const useRipple = () => {
  const [ripples, setRipples] = useState<RippleType[]>([])
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
  const MAX_RIPPLES = 20

  const getRandomColor = () => {
    const colors = [
      'hsla(0, 100%, 70%, 0.3)', // Красный
      'hsla(30, 100%, 70%, 0.3)', // Оранжевый
      'hsla(60, 100%, 70%, 0.3)', // Желтый
      'hsla(120, 100%, 70%, 0.3)', // Зеленый
      'hsla(180, 100%, 70%, 0.3)', // Голубой
      'hsla(240, 100%, 70%, 0.3)', // Синий
      'hsla(300, 100%, 70%, 0.3)', // Фиолетовый
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  const getRandomPosition = useCallback(() => {
    return {
      x: Math.random() * containerSize.width,
      y: Math.random() * containerSize.height,
    }
  }, [containerSize])

  const createRipple = useCallback(() => {
    setRipples((prev) => {
      if (prev.length >= MAX_RIPPLES) {
        return [
          ...prev.slice(1),
          {
            x: getRandomPosition().x,
            y: getRandomPosition().y,
            id: Date.now(),
            color: getRandomColor(),
          },
        ]
      }

      return [
        ...prev,
        {
          x: getRandomPosition().x,
          y: getRandomPosition().y,
          id: Date.now(),
          color: getRandomColor(),
        },
      ]
    })
  }, [getRandomPosition])

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    const rect = e.currentTarget.getBoundingClientRect()
    setRipples((prev) => {
      if (prev.length >= MAX_RIPPLES) {
        return [
          ...prev.slice(1),
          {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            id: Date.now(),
            color: getRandomColor(),
          },
        ]
      }

      return [
        ...prev,
        {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          id: Date.now(),
          color: getRandomColor(),
        },
      ]
    })
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    handleClick(e)
  }

  useEffect(() => {
    const updateSize = () => {
      const container = document.getElementById(RIPPLE_ID)
      if (container) {
        setContainerSize({
          width: container.offsetWidth,
          height: container.offsetHeight,
        })
      }
    }

    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  useEffect(() => {
    if (containerSize.width === 0) return

    const interval = setInterval(createRipple, 200)
    return () => clearInterval(interval)
  }, [containerSize.width, createRipple])

  useEffect(() => {
    if (ripples.length === 0) return

    const cleanup = () => {
      const now = Date.now()
      setRipples((prev) => prev.filter((ripple) => now - ripple.id < 1500))
    }

    const cleanupInterval = setInterval(cleanup, 200)
    return () => clearInterval(cleanupInterval)
  }, [ripples.length])

  const RipplesComponent = useMemo(() => {
    return (
      <>
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className='absolute rounded-full pointer-events-none animate-ripple'
            style={{
              left: ripple.x,
              top: ripple.y,
              transform: 'translate(-50%, -50%)',
              background: `radial-gradient(circle, ${ripple.color} 0%, ${ripple.color.replace(
                '0.3',
                '0.2',
              )} 50%, ${ripple.color.replace('0.3', '0')} 70%)`,
              borderColor: ripple.color.replace('0.3', '0.5'),
            }}
          />
        ))}
      </>
    )
  }, [ripples])

  return {
    RIPPLE_ID,
    Ripples: RipplesComponent,
    onClick: handleClick,
    onMouseDown: handleMouseDown,
  }
}
