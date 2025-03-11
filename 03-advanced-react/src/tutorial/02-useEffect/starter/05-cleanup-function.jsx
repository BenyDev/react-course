import { useEffect } from 'react'
import { useState } from 'react'

const CleanupFunction = () => {
  const [isOn, setIsOn] = useState(false)
  return (
    <div>
      <button className="btn" onClick={() => setIsOn(!isOn)}>
        Toggle
      </button>
      {isOn && <SecondComponent />}
    </div>
  )
}

export default CleanupFunction

const SecondComponent = () => {
  useEffect(() => {
    console.log('xd')
  }, [])
  return <div>Hello there</div>
}
