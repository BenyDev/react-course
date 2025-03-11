import React, { useState } from 'react'
import Profile from './Profile'

const ProfilesList = (props) => {
  const profiles = props.reviews

  const [listIndex, setListIndex] = useState(1)

  const showProfile = (element) => {
    const profile = profiles.find((profile) => profile.id === element)

    if (profile === undefined) {
      console.log(`Element of id ${element} do not exist`)
      return
    }

    return profile
  }

  const getRandomProfile = () => {
    const randomIndex = Math.floor(Math.random() * profiles.length + 1)
    setListIndex(randomIndex)
    console.log(randomIndex)
  }

  return (
    <section className="profile-list">
      <Profile
        key={showProfile(listIndex).id}
        {...showProfile(listIndex)}
        setListIndex={setListIndex}
        listIndex={listIndex}
        getRandomProfile={getRandomProfile}
      />
    </section>
  )
}

export default ProfilesList
