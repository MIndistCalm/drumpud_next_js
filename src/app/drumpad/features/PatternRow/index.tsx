import { SoundButton } from '../../ui'
import { useEffect } from 'react'

interface PatternRowProps {
  name: string
  sound: string
  activeTact: number
  squareSize?: number
  selectedBeats: Record<string, number[]>
  onClick?: (index: number) => void
}

export const PatternRow = ({
  name,
  sound,
  activeTact,
  squareSize = 4,
  selectedBeats,
  onClick = () => {},
}: PatternRowProps) => {
  const soundRow = Array.from({ length: 4 * squareSize }, (_, index) => index + 1)
  //   console.log(soundRow, sound)

  const handlePlayDrum = (sound: string): void => {
    const audio = new Audio(sound)
    audio.play()
  }
  useEffect(() => {
    if (selectedBeats[name]?.includes(activeTact)) {
      handlePlayDrum(sound)
    }
  }, [activeTact, name, selectedBeats, sound])

  return (
    <div className='flex gap-2'>
      {soundRow.map((sound, index) => {
        const color = activeTact === index ? '#ece' : selectedBeats[name]?.includes(index) ? '#ece' : '#000'

        return (
          <div key={sound + index} className={`${index % 4 === 0 ? 'ml-4' : ''}`}>
            <SoundButton color={color} onClick={() => onClick(index)} />
          </div>
        )
      })}
    </div>
  )
}
