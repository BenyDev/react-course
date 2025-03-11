import { data } from '../../../data'
import { useState } from 'react'
const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id)
    console.log(`Removing person with id: ${id}`)
    setPeople(newPeople)
  }
  const removeAllPerson = () => {
    setPeople([])
  }

  return (
    <>
      <h2>useState array example</h2>
      {people.map(({ id, name }) => {
        return (
          <div key={id}>
            <h4>{name}</h4>
            <br />
            <button
              type="button"
              className="btn"
              onClick={() => removePerson(id)}
            >
              remove
            </button>
          </div>
        )
      })}
      <br />
      <button className="btn" type="button" onClick={() => removeAllPerson()}>
        remove all
      </button>
    </>
  )
}

export default UseStateArray
