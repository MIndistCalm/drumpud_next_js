import { Spinner } from '@nextui-org/react'

import { Progress } from '@nextui-org/react'

interface LoaderViewProps {
  visible: boolean
  progress: number
}

export const LoaderView: React.FC<LoaderViewProps> = ({ visible, progress }) => {
  return (
    <div
      className={`min-h-screen h-screen flex flex-col p-8 animate-popup transition-opacity duration-500 ease-out ${
        visible ? 'opacity-100' : 'opacity-0'
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
          classNames={{
            base: 'max-w-md',
            track: 'drop-shadow-md border border-default',
            indicator: 'bg-gradient-to-r from-pink-500 to-yellow-500',
            label: 'tracking-wider font-medium text-default-600',
            value: 'text-foreground/60',
          }}
        />
      </div>
    </div>
  )
}
