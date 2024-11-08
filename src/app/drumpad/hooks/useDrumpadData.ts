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

    const fetchItems = async () => {
      try {
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

    fetchItems()
    return () => {
      isMounted = false
      clearInterval(progressInterval)
    }
  }, [])

  return { sounds, isLoading, error, progress }
}
