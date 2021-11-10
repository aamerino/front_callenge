import { useEffect, useState } from 'react'

export const useFetch = (url) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    const response = await fetch(url).then((response) => response.json())
    setData(response)
    setLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return [data, loading, fetchData]
}
