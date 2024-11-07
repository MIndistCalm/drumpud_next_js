import { FC } from 'react'
import { getColorForIndex } from '../../utils'

import styles from './styles.module.scss'

export interface SoundButtonProps {
  color?: string
  onClick?: VoidFunction
}

export const SoundButton: FC<SoundButtonProps> = ({ color, onClick = () => {} }) => {
  const colorBtn = color || getColorForIndex(0, 0, 0)

  return (
    <div
      className={`h-[50px] w-[50px] rounded-lg text-sm cursor-pointer ${styles.btn}`}
      style={{ backgroundColor: colorBtn, boxShadow: `0 0 70px -5px ${colorBtn}, 0 2px 4px -1px ${colorBtn}` }}
      onClick={onClick}
    />
  )
}
