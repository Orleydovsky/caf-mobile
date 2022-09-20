import { useState, useEffect } from 'react'
import { Caf } from '../types'

const useCafs = () => {
  const [cafs, setCafs] = useState<Caf[]>()
  const [isLoading, setIsLoading] = useState(false)

  const fetchCafs = async () => {
    setIsLoading(true)
    const response = await fetch('http://192.168.80.15:3000/cafs')
    const json = await response.json()
    setIsLoading(false)
    setCafs(json)
  }
  useEffect(() => {
    void fetchCafs()
  }, [])
  return { cafs, isLoading, refetch: fetchCafs }
}

export default useCafs
