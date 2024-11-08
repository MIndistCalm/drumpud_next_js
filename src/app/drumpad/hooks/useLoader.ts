import { useState, useEffect } from 'react'

interface UseLoaderProps {
  isLoading: boolean
  pageReady: boolean
}

interface UseLoaderProps {
  isLoading: boolean
  pageReady: boolean
  progress: number // Добавляем progress в пропсы
}

export const useLoader = ({ isLoading, pageReady, progress }: UseLoaderProps) => {
  const [loaderVisible, setLoaderVisible] = useState(true)
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    if (!pageReady || isLoading) {
      setShowLoader(true)
      setLoaderVisible(true)
    } else {
      setLoaderVisible(false)
      setTimeout(() => {
        setShowLoader(false)
      }, 500)
    }
  }, [pageReady, isLoading])

  return {
    loaderVisible,
    showLoader,
    progress
  }
}