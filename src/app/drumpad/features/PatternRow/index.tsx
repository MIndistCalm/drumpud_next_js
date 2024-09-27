import { SoundButton } from '../../ui'

interface PatternRowProps {
  sound: string
  squareSize?: number
}

export const PatternRow = ({ sound, squareSize = 4 }: PatternRowProps) => {
  const soundRow = Array.from({ length: 4 * squareSize }, (_, index) => index + 1)
//   console.log(soundRow, sound)

  const handlePlayDrum = (sound: string): void => {
    const audio = new Audio(sound)
    audio.play()
  }

  return (
    <div className='flex gap-2'>
      {soundRow.map((index) => {
        return (
          <div key={index}>
            <SoundButton color='#ece' onClick={() => handlePlayDrum(sound)} />
          </div>
        )
      })}
    </div>
  )
}
