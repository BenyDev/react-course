import { Person } from './Person'
import React from 'react'
import { people } from './../../../data'
const List = () => {
  const peoples = people

  return (
    <div>
      {peoples.map((person) => {
        return <Person key={person.id} {...person} />
      })}
    </div>
  )
}

export default List
