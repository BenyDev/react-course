import React from 'react'
import { FaAngleLeft } from 'react-icons/fa6'
import { FaAngleRight } from 'react-icons/fa6'
import { GiPerspectiveDiceSixFacesFour } from 'react-icons/gi'
const Profile = ({
  id,
  name,
  job,
  image,
  text,
  listIndex,
  setListIndex,
  getRandomProfile,
}) => {
  return (
    <article>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <span>{job}</span>
      <p>{text}</p>

      <button className="btn left" onClick={() => setListIndex(--listIndex)}>
        <FaAngleLeft />
      </button>
      <button className="btn right" onClick={() => setListIndex(++listIndex)}>
        <FaAngleRight />
      </button>
      <button className="btn right" onClick={() => getRandomProfile()}>
        <GiPerspectiveDiceSixFacesFour />
      </button>
    </article>
  )
}
export default Profile
