import { useEffect, useState } from 'react'
import Tours from './Components/Tours'
import Loading from './Components/Loading'

const url = 'https://www.course-api.com/react-tours-project'

const App = () => {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getTours = async () => {
    setIsLoading(true)
    try {
      const resp = await fetch(url)
      const data = await resp.json()

      setTours(data)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  const removeTour = (id) => {
    const newTours = tours.filter((item) => item.id !== id)
    setTours(newTours)
    console.log(tours.length)
    if (newTours.length === 0) {
    }
    console.log(isAnyTours)
  }

  useEffect(() => {
    getTours()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  if (tours.length === 0) {
    return (
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2>no tours left</h2>
        <button
          type="button"
          className="btn"
          onClick={() => getTours()}
          style={{ marginTop: '2rem' }}
        >
          refresh
        </button>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}
export default App
