import { useState } from 'react'

const UseStateBasics = () => {
  const [count, setCount] = useState(0)

  const handlerCount = () => {
    setCount(count + 1)
  }
  return (
    <>
      <span>number of licked </span>
      {count}
      <br />
      <button type="button" className="btn" onClick={() => setCount(count + 1)}>
        clik me
      </button>
    </>
  )
}

export default UseStateBasics
