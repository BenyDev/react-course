import { useState } from 'react'

const UserChallenge = () => {
  const [user, setUser] = useState(null)

  function login() {
    setUser({ name: 'Madzia' })
  }
  function logout() {
    setUser(null)
  }

  // return user.name ? <h4>hello there</h4> : <h4>no</h4>
  return (
    <>
      {user ? (
        <div>
          <h4>hello there, {user.name}</h4>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4>plis login</h4>
          <button className="btn" onClick={login}>
            login
          </button>
        </div>
      )}
    </>
  )
}

export default UserChallenge
