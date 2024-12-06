import { useState, useCallback, useEffect } from 'react'
import { useAudioEngine } from './useAudioEngine'

export const useBeatsControl = (tacts: number) => {
  const [squareSize, setSquareSize] = useState(tacts)
  const [selectedBeats, setSelectedBeats] = useState<Record<string, number[]>>({})
  const [activeTact, setActiveTact] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const { playBeats } = useAudioEngine()

  const getActiveTact = useCallback(
    (prev: number) => {
      if (squareSize * tacts - 1 === prev) return 0
      return prev + 1
    },
    [squareSize, tacts],
  )

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isPlaying) {
      interval = setInterval(() => {
        setActiveTact((prev) => {
          const nextTact = getActiveTact(prev)
          playBeats(nextTact, selectedBeats)
          return nextTact
        })
      }, 250)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getActiveTact, isPlaying, playBeats])

  const handleBeatToggle = useCallback((name: string, value: number) => {
    setSelectedBeats((prev) => {
      const currentBeats = prev[name] || []
      if (currentBeats.includes(value)) {
        return {
          ...prev,
          [name]: currentBeats.filter((beat) => beat !== value),
        }
      } else {
        return {
          ...prev,
          [name]: [...currentBeats, value],
        }
      }
    })
  }, [])

  const resetBeats = useCallback(() => {
    setSelectedBeats({})
  }, [])

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev)
  }, [])

  return {
    squareSize,
    selectedBeats,
    activeTact,
    isPlaying,
    setSquareSize,
    handleBeatToggle,
    togglePlay,
    resetBeats,
  }
}
