import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setError] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          setError(true)
          setIsLoading(false)
          return
        }
        const data = await response.json()
        setUser(data)
      } catch (error) {
        setError(true)
        console.log(error)
      }
      setIsLoading(false)
    }
    getUsers()
  }, [])
  if (isLoading) return <h2>Loading...</h2>

  if (isError) return <h2>There was a error</h2>
  const { avatar_url, name, company, bio } = user

  return (
    <div>
      <img
        src={avatar_url}
        alt={name}
        style={{ width: '150px', borderRadius: '25px' }}
      />
      <h2>{name}</h2>
      <h3>Works At {company}</h3>
      <p>{bio}</p>
    </div>
  )
}
export default MultipleReturnsFetchData
