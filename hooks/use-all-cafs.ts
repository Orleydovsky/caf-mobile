import { useState, useEffect } from 'react'
import { Caf } from '../types'

const useAllCafs = () => {
  const [allCaffs, setAllCafs] = useState<Caf[]>()
  const [isLoading, setIsLoading] = useState(false)

  const fetchAllCafs = async () => {
    setIsLoading(true)
    const response = await fetch('http://192.168.80.15:3000/cafs')
    const json = await response.json()
    setIsLoading(false)
    setAllCafs(json)
  }
  useEffect(() => {
    void fetchAllCafs()
  }, [])
  return { allCaffs, isLoading, refetch: fetchAllCafs }
}

export default useAllCafs
