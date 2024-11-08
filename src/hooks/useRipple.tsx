'use client'
import { useState, useCallback, useEffect } from 'react'

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

  const createRipple = useCallback((x: number, y: number) => {
    setRipples((prev) => {
      const newRipple = {
        x,
        y,
        id: Date.now(),
        color: getRandomColor(),
        isAnimating: true,
      }

      if (prev.length >= MAX_RIPPLES) {
        return [...prev.slice(1), newRipple]
      }
      return [...prev, newRipple]
    })
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    const rect = e.currentTarget.getBoundingClientRect()
    createRipple(e.clientX - rect.left, e.clientY - rect.top)
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

    const interval = setInterval(() => {
      const { x, y } = getRandomPosition()
      createRipple(x, y)
    }, 200)

    return () => clearInterval(interval)
  }, [containerSize.width, createRipple, getRandomPosition])

  useEffect(() => {
    if (ripples.length === 0) return

    const cleanup = () => {
      const now = Date.now()
      setRipples((prev) => prev.filter((ripple) => now - ripple.id < 1500))
    }

    const cleanupInterval = setInterval(cleanup, 1600)
    return () => clearInterval(cleanupInterval)
  }, [ripples.length])

  const RipplesComponent = () => (
    <>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          style={{
            position: 'absolute',
            left: ripple.x,
            top: ripple.y,
            borderRadius: '50%',
            pointerEvents: 'none',
            backgroundColor: ripple.color,
            transform: 'translate(-50%, -50%)',
            animation: 'ripple 1.5s ease-out forwards',
            width: '0',
            height: '0',
            opacity: '0.8',
          }}
        />
      ))}
    </>
  )

  return {
    RIPPLE_ID,
    Ripples: RipplesComponent,
    onClick: handleClick,
    onMouseDown: handleClick,
  }
}
