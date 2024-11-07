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
  4: {
    name: 'Kick20',
    sound: '/sounds/Kick_20_828.wav',
  },
  5: {
    name: 'TapeKick',
    sound: '/sounds/TapeKicks_506_SP_31.wav',
  },
}

// Обработка GET-запроса
export async function GET() {
  // Возвращаем список объектов с информацией о звуках
  return NextResponse.json(sounds)
}
