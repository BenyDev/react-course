import { useState } from 'react'

const ToggleChallenge = () => {
  const [isOn, setIsOn] = useState(false)

  function toggle() {
    return isOn ? setIsOn(false) : setIsOn(true)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <button className="btn" onClick={toggle}>
        switch
      </button>
      {isOn && <p>I'am on it</p>}
    </div>
  )
}

export default ToggleChallenge
