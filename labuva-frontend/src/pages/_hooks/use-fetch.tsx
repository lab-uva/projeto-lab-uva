import { useEffect, useState } from 'react'

export const useFetch = (
  url: string,
  options: object = {},
  refetch?: boolean,
) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<any[] | null>(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url, options)
      .then(async (response) => {
        const json = await response.json()
        setData(json)
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [url, refetch])

  return { isLoading, data, error }
}
