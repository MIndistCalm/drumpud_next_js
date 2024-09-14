import Link from 'next/link'
import { FC } from 'react'

const Drumpad: FC = () => {
  return (
    <div className='min-h-screen p-6'>
      <Link href='/' className='flex gap-4 items-center'>
        <span className='text-3xl'>←</span>
        <span className='text-4xl'>Назад на главную</span>
      </Link>
      <div className='flex items-center justify-centertext-3xl full'>
        <span>Тут будет Дрампад</span>
      </div>
    </div>
  )
}

export default Drumpad
