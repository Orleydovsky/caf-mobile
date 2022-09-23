import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-native'
import { Caf } from '../types'

const useCaf = () => {
  const [caf, setCaf] = useState<Caf>()
  const { pathname } = useLocation()
  const fetchCaf = async () => {
    const response = await fetch(`http://192.168.80.15:3000/cafs${pathname}`)
    const json = await response.json()
    setCaf(json)
  }
  useEffect(() => {
    void fetchCaf()
  }, [])
  return { caf, refetchCaf: fetchCaf }
}

export default useCaf
