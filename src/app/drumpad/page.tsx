'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { PatternRow } from './features'
import { Progress, Slider, Spinner } from '@nextui-org/react'

const initialConfig = {
  tacts: 4,
  beats: 4,
  columns: 4,
}

const DrumpadPage = () => {
  const { tacts } = initialConfig
  const [sounds, setSounds] = useState<Record<number, { name: string; sound: string }> | undefined>()
  const [squareSize, setSquareSize] = useState(tacts)
  const [selectedBeats, setSelectedBeats] = useState<Record<string, number[]>>({})
  const [activeTact, setActiveTact] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_error, setError] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)
  const [pageReady, setPageReady] = useState(false)
  const [loaderVisible, setLoaderVisible] = useState(true)
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    let isMounted = true
    setIsLoading(true)
    setError(null)

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 10
      })
    }, 100)

    const fetchItems = async () => {
      try {
        const response = await fetch('/api/drumpad')
        if (!response.ok) {
          throw new Error('Ошибка загрузки данных')
        }
        const result = await response.json()

        if (isMounted) {
          setSounds(result)
          setProgress(100)
          clearInterval(progressInterval)
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

  useEffect(() => {
    const handleLoad = () => {
      setPageReady(true)
    }

    if (document.readyState === 'complete') {
      setPageReady(true)
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  useEffect(() => {
    if (!pageReady || isLoading) {
      setShowLoader(true)
      setLoaderVisible(true)
    } else {
      // Сначала запускаем анимацию скрытия
      setLoaderVisible(false)
      
      // Ждем окончания анимации перед удалением лоадера из DOM
      setTimeout(() => {
        setShowLoader(false)
      }, 500) // Время должно совпадать с duration-500
    }
  }, [pageReady, isLoading])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getActiveTact = (prev: number) => {
    if (squareSize * tacts - 1 === prev) return 0
    return prev + 1
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTact(getActiveTact)
    }, 250)

    return () => clearInterval(interval)
  }, [getActiveTact, squareSize, tacts])

  if (showLoader) {
    return (
      <div
        className={`min-h-screen h-screen flex flex-col p-8 animate-popup transition-opacity duration-500 ease-out ${
          loaderVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className='flex-1 flex flex-col items-center justify-center gap-4'>
          <Spinner label='Подключаем биты...' color='warning' labelColor='warning' />
          <Progress
            aria-label='Загрузка...'
            size='md'
            value={progress}
            color='warning'
            showValueLabel={true}
            className='max-w-md w-full'
          />
        </div>
      </div>
    )
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
        <div className='flex flex-col gap-4'>
          {sounds &&
            Object.values(sounds).map(({ name, sound }) => {
              return (
                <div key={name} className='flex gap-4 items-center justify-end'>
                  <span>{name}</span>
                  <PatternRow
                    name={name}
                    sound={sound}
                    activeTact={activeTact}
                    squareSize={squareSize}
                    selectedBeats={selectedBeats}
                    onClick={(value) =>
                      setSelectedBeats({
                        ...selectedBeats,
                        ...(selectedBeats[name]?.length > 0
                          ? { [name]: [...selectedBeats[name], value] }
                          : { [name]: [value] }),
                      })
                    }
                  />
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default DrumpadPage
