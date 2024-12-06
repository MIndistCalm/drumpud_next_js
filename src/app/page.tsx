'use client'
import { Carousel } from '@/ui'
import { WaveRipples } from '@/components/WaveRipples'
import Link from 'next/link'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <div className='relative flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)] overflow-hidden'>
      <main className='flex flex-col gap-8 justify-center items-center z-10'>
        <Carousel items={['Создай свой ритм', 'Развивай свой стиль', 'Воплоти свои идеи']} />
        <h1 className='text-[96px] sm:text-[40px] bg-gradient-to-r from-primary-80 via-black-100 from-[-50%] to-[150%] to-secondary-100 px-[50px] py-[25px] rounded-xl select-none'>
          Привет, я Дрампад!
        </h1>

        <Link
          href='/drumpad'
          className='text-[40px] bg-gray-80 px-6 py-3 rounded-xl hover:bg-white-100 hover:text-gray-80 z-[11]'
        >
          Погрузиться в музыку
        </Link>
      </main>
      <footer className='absolute bottom-0 left-0 p-4'>
        <a
          href='https://github.com/MIndistCalm/drumpud_next_js'
          className='
            fixed 
            bottom-8 
            text-lg 
            font-medium 
          hover:text-black-100 
          hover:bg-white-100
          [&>svg]:hover:fill-black-100
            transition-colors 
            duration-300 
            flex 
            items-center 
            gap-2 
            hover:scale-105 
            transform
            px-3 py-2
          '
          target='_blank'
          rel='noopener noreferrer'
        >
          {/* TODO Убрать */}
          <svg height='24' width='24' viewBox='0 0 16 16' className='fill-white-100'>
            <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z' />
          </svg>
          Ссылка на GitHub
        </a>
      </footer>
      <WaveRipples />
    </div>
  )
}

export default Home
