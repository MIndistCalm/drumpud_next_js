import { SoundButton } from '../../ui'
import { useEffect } from 'react'

interface PatternRowProps {
  name: string
  sound: string
  activeTact: number
  squareSize?: number
  selectedBeats: Record<string, number[]>
  onBeatToggle?: (index: number) => void
}

export const PatternRow = ({
  name,
  sound,
  activeTact,
  squareSize = 4,
  selectedBeats,
  onBeatToggle = () => {},
}: PatternRowProps) => {
  const soundRow = Array.from({ length: 4 * squareSize }, (_, index) => index + 1)
  let isPlaying = false // Флаг для отслеживания состояния воспроизведения

  const handlePlayDrum = (sound: string): void => {
    if (isPlaying) return // Если уже воспроизводится, ничего не делаем
    isPlaying = true // Устанавливаем флаг воспроизведения

    const audio = new Audio(sound)
    audio.play()
  }

  useEffect(() => {
    if (selectedBeats[name]?.includes(activeTact)) {
      handlePlayDrum(sound)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTact, sound])

  return (
    <div className='flex gap-2'>
      {soundRow.map((sound, index) => {
        const color = activeTact === index ? '#f9f' : selectedBeats[name]?.includes(index) ? '#ece' : '#000'

        return (
          <div key={sound + index} className={`${index % 4 === 0 ? 'ml-4' : ''}`}>
            <SoundButton color={color} onClick={() => onBeatToggle(index)} />
          </div>
        )
      })}
    </div>
  )
}
