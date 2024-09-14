import { FC } from 'react'

export interface CarouselProps {
  items: string[]
}

export const Carousel: FC<CarouselProps> = ({ items }) => {
  return (
    <div className='overflow-hidden w-full max-h-8 max-w-[600px] relative cursor-default'>
      {items.map((item, index) => (
        <p key={index} className='text-3xl text-center min-w-full box-border animate-slideY'>
          {item}
        </p>
      ))}
    </div>
  )
}
