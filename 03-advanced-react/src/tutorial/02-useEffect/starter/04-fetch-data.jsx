import { useState, useEffect } from 'react'
const url = 'https://api.github.com/users'

const FetchData = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      setUsers(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUsers()
    console.log(users)
  }, [])
  return (
    <>
      <h2>fetch data example</h2>
      {users.map((user) => {
        return <User {...user} key={user.id} />
      })}
    </>
  )
}
export default FetchData

const User = (props) => {
  const { login, avatar_url } = props
  return (
    <div>
      <img
        style={{ width: '75px', height: '75px', borderRadius: '50%' }}
        src={avatar_url}
      />
      <p>{login}</p>
    </div>
  )
}
