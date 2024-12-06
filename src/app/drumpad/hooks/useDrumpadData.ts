import { useState, useEffect } from 'react'

export const useDrumpadData = () => {
  const [sounds, setSounds] = useState<Record<number, { name: string; sound: string }>>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let isMounted = true
    setIsLoading(true)
    setError(null)
    setProgress(0)

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 99) {
          clearInterval(progressInterval)
          return 99
        }
        return prev + 10
      })
    }, 100)

    const fetchSounds = async () => {
      try {
        // Получаем список всех звуков
        const response = await fetch('/api/drumpad')
        if (!response.ok) throw new Error('Ошибка загрузки данных')
        const result = await response.json()

        if (isMounted) {
          setSounds(result)
          clearInterval(progressInterval)
          setTimeout(() => {
            setProgress(100)
          }, 300)
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Произошла ошибка')
          clearInterval(progressInterval)
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    fetchSounds()
    return () => {
      isMounted = false
      clearInterval(progressInterval)
    }
  }, [])

  // // Функция для загрузки конкретного звука
  // const loadSound = async (id: number) => {
  //   try {
  //     const response = await fetch(`/api/drumpad?id=${id}`)
  //     if (!response.ok) throw new Error('Ошибка загрузки звука')
  //     const audioBlob = await response.blob()
  //     return URL.createObjectURL(audioBlob)
  //   } catch (err) {
  //     console.error('Ошибка загрузки звука:', err)
  //     return null
  //   }
  // }

  return { sounds, isLoading, error, progress }
}
