import { useState, useEffect } from 'react'

export const usePageReady = () => {
  const [pageReady, setPageReady] = useState(false)

  useEffect(() => {
    const handleLoad = () => {
      setPageReady(true)
    }

    if (document.readyState === 'complete') {
      setPageReady(true)
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  return pageReady
} 