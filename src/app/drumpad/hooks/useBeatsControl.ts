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
  }, [getActiveTact, isPlaying, playBeats, selectedBeats])

  const handleBeatSelect = useCallback((name: string, value: number) => {
    setSelectedBeats((prev) => ({
      ...prev,
      ...(prev[name]?.length > 0 ? { [name]: [...prev[name], value] } : { [name]: [value] }),
    }))
  }, [])

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev)
  }, [])

  return {
    squareSize,
    setSquareSize,
    selectedBeats,
    activeTact,
    handleBeatSelect,
    isPlaying,
    togglePlay,
  }
}
