'use client'
import { Carousel } from '@/ui'
import { WaveRipples } from '@/components/WaveRipples'
import Link from 'next/link'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <div className='relative flex items-center justify-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)] overflow-hidden'>
      <WaveRipples />
      <main className='flex flex-col gap-8 justify-center items-center z-10'>
        <Carousel items={['Создай свой ритм', 'Развивай свой стиль', 'Воплоти свои идеи']} />
        <h1 className='text-[96px] sm:text-[40px] bg-gradient-to-r from-primary-80 via-black-100 from-[-50%] to-[150%] to-secondary-100 px-[50px] py-[25px] rounded-xl select-none'>
          Привет, я Дрампад!
        </h1>

        <Link
          href='/drumpad'
          className='text-[40px] bg-gray-80 px-6 py-3 rounded-xl hover:bg-white-100 hover:text-gray-80 z-[11] select-none'
        >
          Погрузиться в музыку
        </Link>
      </main>
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'></footer>
    </div>
  )
}

export default Home
