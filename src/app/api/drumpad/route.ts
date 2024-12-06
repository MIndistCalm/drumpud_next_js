import { NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'

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
export async function GET(req: Request) {
  const url = new URL(req.url)
  const id = url.searchParams.get('id')
  
  // Если id не указан, возвращаем список всех звуков
  if (!id) {
    return NextResponse.json(sounds)
  }

  if (id && sounds[Number(id)]) {
    const soundPath = sounds[Number(id)].sound
    const filePath = path.join(process.cwd(), 'public', soundPath)

    if (fs.existsSync(filePath)) {
      const fileStream = fs.createReadStream(filePath)
      const readableStream = new ReadableStream({
        start(controller) {
          fileStream.on('data', (chunk) => controller.enqueue(chunk))
          fileStream.on('end', () => controller.close())
          fileStream.on('error', (err) => controller.error(err))
        },
      })
      return new Response(readableStream, {
        headers: {
          'Content-Type': 'audio/mpeg',
          'Content-Disposition': `attachment; filename=${path.basename(filePath)}`,
        },
      })
    } else {
      return NextResponse.json({ error: 'Файл не найден' }, { status: 404 })
    }
  } else {
    return NextResponse.json({ error: 'Неверный ID' }, { status: 400 })
  }
}
