import { NextResponse } from 'next/server'

// Хранилище данных в памяти
const sounds: Record<number, { name: string; sound: string }> = {
  0: {
    name: 'Kick',
    sound: '/sounds/kick.mp3',
  },
  1: {
    name: 'Hi-hat',
    sound: '/sounds/hihat.mp3',
  },
  2: {
    name: 'Snare',
    sound: '/sounds/snare.mp3',
  },
  3: {
    name: 'Tom',
    sound: '/sounds/tom.mp3',
  },
}

// Обработка GET-запроса
export async function GET() {
  // Возвращаем список объектов с информацией о звуках
  return NextResponse.json(sounds)
}
