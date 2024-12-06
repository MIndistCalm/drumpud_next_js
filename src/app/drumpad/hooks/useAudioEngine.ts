import { useRef, useCallback, useEffect } from 'react'

interface AudioEngineState {
  context: AudioContext | null
  buffers: Map<string, AudioBuffer>
}

export const useAudioEngine = () => {
  const audioState = useRef<AudioEngineState>({
    context: null,
    buffers: new Map(),
  })

  // Инициализация AudioContext
  useEffect(() => {
    audioState.current.context = new AudioContext()

    return () => {
      audioState.current.context?.close()
    }
  }, [])

  // Загрузка звукового файла
  const loadSound = useCallback(async (name: string, url: string) => {
    if (!audioState.current.context) return

    try {
      const response = await fetch(url)
      console.log('first')
      const arrayBuffer = await response.arrayBuffer()
      const audioBuffer = await audioState.current.context.decodeAudioData(arrayBuffer)
      audioState.current.buffers.set(name, audioBuffer)
    } catch (error) {
      console.error(`Ошибка загрузки звука ${name}:`, error)
    }
  }, [])

  // Воспроизведение звука
  const playSound = useCallback((name: string) => {
    const { context, buffers } = audioState.current
    if (!context || !buffers.has(name)) return

    const source = context.createBufferSource()
    source.buffer = buffers.get(name)!
    source.connect(context.destination)
    source.start(0)
  }, [])

  // Воспроизведение звуков для активного такта
  const playBeats = useCallback(
    (activeTact: number, selectedBeats: Record<string, number[]>) => {
      const playPromises = Object.entries(selectedBeats).map(([name, beats]) => {
        if (beats.includes(activeTact)) {
          return new Promise<void>((resolve) => {
            playSound(name)
            resolve()
          })
        }
        return Promise.resolve()
      })

      Promise.all(playPromises).then(() => {})
    },
    [playSound],
  )

  return {
    loadSound,
    playSound,
    playBeats,
  }
}
