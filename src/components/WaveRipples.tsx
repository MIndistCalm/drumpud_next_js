'use client'
import { useEffect, useState } from 'react'

interface Ripple {
  id: number
  x: number
  y: number
  color: string
}

export const WaveRipples = () => {
  const [ripples, setRipples] = useState<Ripple[]>([])

  // Массив возможных цветов (можете добавить свои)
  const colors = [
    'border-primary-80',
    'border-secondary',
    'border-purple-50',
    'border-action',
    'border-warning',
    'border-error',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      const newRipples = Array.from({ length: 10 }, () => ({
        id: Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        // Выбираем случайный цвет из массива
        color: colors[Math.floor(Math.random() * colors.length)],
      }))

      setRipples((prev) => {
        const filtered = prev.slice(-50)
        return [...filtered, ...newRipples]
      })

      setTimeout(() => {
        const rippleIds = newRipples.map((r) => r.id)
        setRipples((prev) => prev.filter((ripple) => !rippleIds.includes(ripple.id)))
      }, 3000)
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className={`absolute w-4 h-4 border-2 rounded-full animate-wave-ripple ${ripple.color}`}
          style={{
            left: `${ripple.x}%`,
            top: `${ripple.y}%`,
          }}
        />
      ))}
    </>
  )
}
