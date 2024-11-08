'use client'

import Link from 'next/link'
import React from 'react'
import { PatternRow } from './features'
import { Slider, Button } from '@nextui-org/react'
import { usePageReady } from './hooks/usePageReady'
import { useDrumpadData } from './hooks/useDrumpadData'
import { useLoader } from './hooks/useLoader'
import { useBeatsControl } from './hooks/useBeatsControl'
import { LoaderView } from './components/LoaderView'

const initialConfig = {
  tacts: 4,
  beats: 4,
  columns: 4,
}

const DrumpadPage = () => {
  const pageReady = usePageReady()
  const { sounds, isLoading, progress } = useDrumpadData()
  const { loaderVisible, showLoader } = useLoader({
    isLoading,
    pageReady,
    progress,
  })
  const { squareSize, setSquareSize, selectedBeats, activeTact, handleBeatSelect, isPlaying, togglePlay } =
    useBeatsControl(initialConfig.tacts)

  if (showLoader) {
    return <LoaderView visible={loaderVisible} progress={progress} />
  }

  
  return (
    <div
      className={`min-h-screen h-screen flex flex-col p-8 transition-opacity duration-500 ease-in ${
        !showLoader ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Link href='/' className='flex gap-4 items-center'>
        <span className='text-3xl'>←</span>
        <span className='text-4xl'>Назад на главную</span>
      </Link>
      <div className='flex-1 flex flex-col gap-6 items-center justify-center'>
        <div className='flex flex-col gap-4 items-center w-full justify-center'>
          <Button color={isPlaying ? 'danger' : 'success'} onClick={togglePlay}>
            {isPlaying ? 'Стоп' : 'Играть'}
          </Button>
          <Slider
            size='md'
            step={1}
            color='foreground'
            label='Длина такта'
            showSteps={true}
            maxValue={6}
            minValue={2}
            defaultValue={4}
            onChange={(value) => setSquareSize(value as number)}
            className='max-w-md'
          />
        </div>
        <div className='flex flex-col gap-4'>
          {sounds &&
            Object.values(sounds).map(({ name, sound }) => (
              <div key={name} className='flex gap-4 items-center justify-end'>
                <span>{name}</span>
                <PatternRow
                  name={name}
                  sound={sound}
                  activeTact={activeTact}
                  squareSize={squareSize}
                  selectedBeats={selectedBeats}
                  onClick={(value) => handleBeatSelect(name, value)}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default DrumpadPage
