import { useState } from 'react'

const UseStateGotcha = () => {
  let [count, setCount] = useState(0)

  const incressValue = () => {
    setCount((prevValue) => {
      const newValue = prevValue + 1
      return newValue
    })
  }

  return (
    <>
      <h2>Numer: {count}</h2>
      <button className="btn" onClick={incressValue}>
        increase Value
      </button>
    </>
  )
}

export default UseStateGotcha
