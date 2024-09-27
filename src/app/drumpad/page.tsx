'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { PatternRow } from './features'

// const initialConfig = {
//   beats: 4,
//   columns: 4,
// }

const DrumpadPage = () => {
  const [sounds, setSounds] = useState<Record<number, { name: string; sound: string }> | undefined>()
  const [activeTact, setActiveTact] = useState(1)

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('/api/drumpad')
      const result = await response.json()
      setSounds(result)
    }

    fetchItems()
  }, [])
  setInterval(() => {
    setActiveTact((prev) => prev + 1)
  }, 1000)
  console.log(activeTact)

  // TODO: обработать загрузку и ошибки
  return (
    <div className='min-h-screen p-8'>
      <Link href='/' className='flex gap-4 items-center'>
        <span className='text-3xl'>←</span>
        <span className='text-4xl'>Назад на главную</span>
      </Link>
      <div className='flex items-center justify-center h-full min-h-full'>
        <div className='flex flex-col gap-4'>
          {sounds &&
            Object.values(sounds).map(({ name, sound }) => {
              return (
                <div key={name} className='flex gap-4 items-center justify-end'>
                  <span>{name}</span>
                  <PatternRow sound={sound} />
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default DrumpadPage
