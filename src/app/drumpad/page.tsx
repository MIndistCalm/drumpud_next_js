'use client'

import Link from 'next/link'
import React, { FC, useEffect, useState } from 'react'
import { SoundButton } from './ui'

const DrumpadPage: FC = () => {
  const [sounds, setSounds] = useState<Record<number, { name: string; sound: string }> | undefined>()

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('/api/drumpad')
      const result = await response.json()
      setSounds(result)
    }

    fetchItems()
  }, [])

  const handlePlayDrum = (sound: string): void => {
    const audio = new Audio(sound)
    audio.play()
  }

  return (
    <div className='min-h-screen p-8'>
      <Link href='/' className='flex gap-4 items-center'>
        <span className='text-3xl'>←</span>
        <span className='text-4xl'>Назад на главную</span>
      </Link>
      <div className='flex items-center justify-center h-full min-h-full'>
        <div>
          {sounds &&
            Object.values(sounds).map((item) => {
              return (
                <div key={item.name} className='flex gap-4 items-center'>
                  <span>{item.name}</span>
                  <SoundButton color='#ece' onClick={() => handlePlayDrum(item.sound)} />
                  {/* <audio src={item.sound} controls /> */}
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default DrumpadPage
